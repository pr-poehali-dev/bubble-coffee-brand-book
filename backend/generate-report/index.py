'''
Business: Generate PDF financial report for Bubble Coffee
Args: event - dict with httpMethod, body (JSON with report data)
      context - object with attributes: request_id, function_name
Returns: HTTP response with PDF file in base64
'''
import json
from typing import Dict, Any
from io import BytesIO
import base64
from reportlab.lib.pagesizes import A4
from reportlab.pdfgen import canvas
from reportlab.lib.units import cm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    method: str = event.get('httpMethod', 'GET')
    
    # Handle CORS OPTIONS request
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, X-User-Id',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }
    
    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'isBase64Encoded': False,
            'body': json.dumps({'error': 'Method not allowed'})
        }
    
    # Create PDF in memory
    buffer = BytesIO()
    c = canvas.Canvas(buffer, pagesize=A4)
    width, height = A4
    
    # Title
    c.setFont("Helvetica-Bold", 16)
    c.drawCentredString(width / 2, height - 2 * cm, "ФИНАНСОВАЯ МОДЕЛЬ И СТРАТЕГИЯ BUBBLE COFFEE")
    
    y = height - 3.5 * cm
    c.setFont("Helvetica", 11)
    
    sections = [
        ("1. Финансовая модель и прибыль", 
         "Маржинальность по категориям:\n"
         "- Баблти — 68-72% (наибольшая прибыль, средняя маржа 250 руб)\n"
         "- Кофе (латте, капучино, раф) — 70-80% (высокочастотные позиции)\n"
         "- Авторские напитки — 60-65%\n"
         "- Чай — 50-55% (минимальная прибыльность)\n\n"
         "Средняя маржинальность кофейни: ~72%\n"
         "Точка безубыточности: 290 000 руб / мес (~25 чеков в день)\n"
         "Оптимальный объём продаж: 700 000 руб / мес для прибыли 250 000 руб."),
        
        ("2. Стратегия роста прибыли и выхода на 1 млн руб/мес",
         "Цели: выручка 1 000 000 руб, чистая прибыль 300 000 руб.\n\n"
         "Сценарии роста:\n"
         "- Увеличение среднего чека до 500 руб (+апселлы, добавки, комбо).\n"
         "- Рост потока через гео-таргетинг, отзывы, офлайн-активации.\n"
         "- Повышение конверсии через систему лояльности и Telegram-клуб.\n\n"
         "Модель '1 кофейня = прибыльный бренд':\n"
         "1. Система стандартов и регламентов.\n"
         "2. Фирменный стиль и tone of voice.\n"
         "3. Франшиза с окупаемостью 4-6 мес и ROI > 400%."),
        
        ("3. Оптимизация фонда оплаты труда",
         "ФОТ сейчас: 130 000 руб (25% от выручки).\n\n"
         "Модель мотивации:\n"
         "- Базовая ставка + % от личных продаж (0.5-1%).\n"
         "- Бонус за рост среднего чека >450 руб.\n"
         "- 'Бариста месяца' = +3 000 руб.\n"
         "- Коллективный бонус при выручке >700 000 руб (1.5% от превышения).\n\n"
         "Гибкая система удержания персонала повышает стабильность и качество."),
        
        ("4. Инвестиционный расчёт",
         "Первичные вложения: 386 398 руб.\n"
         "Средняя чистая прибыль: 150 000 руб/мес.\n"
         "Срок окупаемости: 2.5-3 месяца.\n"
         "ROI (годовой): ~460%.\n\n"
         "Вывод: Bubble Coffee — устойчивая и масштабируемая модель, готовая к франчайзингу.")
    ]
    
    for title, text in sections:
        c.setFont("Helvetica-Bold", 13)
        c.drawString(2 * cm, y, title)
        y -= 0.8 * cm
        c.setFont("Helvetica", 11)
        for line in text.split("\n"):
            if y < 3 * cm:
                c.showPage()
                c.setFont("Helvetica", 11)
                y = height - 2 * cm
            c.drawString(2 * cm, y, line)
            y -= 0.55 * cm
        y -= 0.7 * cm
    
    # Final section
    c.setFont("Helvetica-Bold", 13)
    c.drawString(2 * cm, y, "ИТОГ:")
    y -= 0.7 * cm
    c.setFont("Helvetica", 11)
    final_text = "Bubble Coffee уже достигла высокой маржинальности и стабильной прибыли.\nСледующий шаг — усиление маркетинга, рост чека и создание франшизной модели."
    for line in final_text.split("\n"):
        c.drawString(2 * cm, y, line)
        y -= 0.55 * cm
    
    c.save()
    
    # Get PDF bytes and encode to base64
    pdf_bytes = buffer.getvalue()
    buffer.close()
    pdf_base64 = base64.b64encode(pdf_bytes).decode('utf-8')
    
    return {
        'statusCode': 200,
        'headers': {
            'Content-Type': 'application/pdf',
            'Content-Disposition': 'attachment; filename="Bubble_Coffee_Report.pdf"',
            'Access-Control-Allow-Origin': '*'
        },
        'isBase64Encoded': True,
        'body': pdf_base64
    }
