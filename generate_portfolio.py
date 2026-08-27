"""
Portfolio PDF — Beraanur Sahin / The Black Dot
Layout: sol = kapak gorseli, sag = proje bilgisi
Renk paleti: web sitesinden alinmistir
"""
import os
import sys
from io import BytesIO
from reportlab.lib.pagesizes import A4
from reportlab.lib import colors
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.enums import TA_LEFT
from reportlab.platypus import Paragraph
from reportlab.pdfgen import canvas
from reportlab.lib.utils import ImageReader
from PIL import Image as PILImage

W, H = A4
BASE = os.path.dirname(os.path.abspath(__file__))

# ── Web sitesi renk paleti ─────────────────────────────────────
BG_DARK   = colors.HexColor("#0a1122")   # --dark: ana arka plan
BG_MID    = colors.HexColor("#12203a")   # biraz daha acik koyu
NEON      = colors.HexColor("#a8ff78")   # --neon: vurgu yesil
NEON_DIM  = colors.HexColor("#2a3d1a")   # neon soluk
WHITE     = colors.HexColor("#f0f0f0")   # --white
GRAY      = colors.HexColor("#8a8a9a")   # --gray
PURPLE    = colors.HexColor("#585081")   # --bg: mor
DIVIDER   = colors.HexColor("#1e2d4a")   # ince cizgi rengi

FONT_R = "Helvetica"
FONT_B = "Helvetica-Bold"
FONT_I = "Helvetica-Oblique"


# ── Yardimci: gorsel krop & yerlestir ─────────────────────────
def draw_cropped(c, path, x, y, w, h):
    if not path or not os.path.exists(path):
        # placeholder
        c.setFillColor(BG_MID)
        c.rect(x, y, w, h, fill=1, stroke=0)
        return
    try:
        pil = PILImage.open(path).convert("RGB")
        iw, ih = pil.size
        scale = max(w / iw, h / ih)
        nw, nh = iw * scale, ih * scale
        ox = (nw - w) / 2 / scale
        oy = (nh - h) / 2 / scale
        pil = pil.crop((ox, oy, ox + w / scale, oy + h / scale))
        pil = pil.resize((int(w), int(h)), PILImage.LANCZOS)
        buf = BytesIO()
        pil.save(buf, "JPEG", quality=92)
        buf.seek(0)
        c.drawImage(ImageReader(buf), x, y, w, h)
    except Exception as e:
        print(f"  Gorsel atlandi: {path} — {e}")
        c.setFillColor(BG_MID)
        c.rect(x, y, w, h, fill=1, stroke=0)


def draw_fit(c, path, x, y, max_w, max_h):
    if not path or not os.path.exists(path):
        return
    try:
        pil = PILImage.open(path).convert("RGB")
        iw, ih = pil.size
        scale = min(max_w / iw, max_h / ih)
        nw, nh = iw * scale, ih * scale
        buf = BytesIO()
        pil.save(buf, "JPEG", quality=90)
        buf.seek(0)
        cx = x + (max_w - nw) / 2
        cy = y + (max_h - nh) / 2
        c.drawImage(ImageReader(buf), cx, cy, nw, nh)
    except Exception as e:
        print(f"  Logo atlandi: {path} — {e}")


def p(*parts):
    path = os.path.join(BASE, *parts)
    return path if os.path.exists(path) else None


# ── KAPAK SAYFASI ─────────────────────────────────────────────
def cover_page(c):
    c.setFillColor(BG_DARK)
    c.rect(0, 0, W, H, fill=1, stroke=0)

    # neon parcaciklarini andiran ince dikey cizgi (dekoratif)
    c.setStrokeColor(NEON)
    c.setLineWidth(0.4)
    c.line(W / 2, H - 60, W / 2, H / 2 + 80)

    # logo
    logo = p("logo.png")
    if logo:
        draw_fit(c, logo, W / 2 - 36, H - 155, 72, 72)

    # marka adi
    c.setFillColor(WHITE)
    c.setFont(FONT_B, 30)
    c.drawCentredString(W / 2, H - 174, "THE BLACK DOT")

    # neon alt cizgi
    c.setStrokeColor(NEON)
    c.setLineWidth(1)
    c.line(W / 2 - 70, H - 183, W / 2 + 70, H - 183)

    # isim
    c.setFillColor(NEON)
    c.setFont(FONT_B, 15)
    c.drawCentredString(W / 2, H - 200, "Beraanur Sahin")

    # unvan
    c.setFillColor(GRAY)
    c.setFont(FONT_R, 9.5)
    c.drawCentredString(W / 2, H - 215, "Grafik Tasarimci & Sosyal Medya Yoneticisi")

    # proje listesi
    projects = [
        "01  Wall Story",
        "02  The White T-Shirt",
        "03  Vortify Media",
        "04  Sofor Go",
        "05  The Little Black Book",
        "06  Parfum Mutfagi",
        "07  Sarki Kapaklari",
    ]
    y = H / 2 + 55
    for proj in projects:
        num, name = proj.split("  ", 1)
        c.setFillColor(NEON)
        c.setFont(FONT_B, 9)
        c.drawCentredString(W / 2 - 30, y, num)
        c.setFillColor(WHITE)
        c.setFont(FONT_R, 9)
        c.drawString(W / 2 - 16, y, name)
        y -= 18

    # alt cizgi
    c.setStrokeColor(DIVIDER)
    c.setLineWidth(0.5)
    c.line(30, 58, W - 30, 58)

    c.setFillColor(GRAY)
    c.setFont(FONT_R, 8)
    c.drawCentredString(W / 2, 44, "beranursahin@gmail.com   |   theblackdot.work")
    c.drawCentredString(W / 2, 32, "2026")

    c.showPage()


# ── HAKKIMDA SAYFASI ──────────────────────────────────────────
def about_page(c):
    c.setFillColor(BG_DARK)
    c.rect(0, 0, W, H, fill=1, stroke=0)

    # sol neon serit
    c.setFillColor(NEON)
    c.rect(0, 0, 3, H, fill=1, stroke=0)

    # ust etiket
    c.setFillColor(NEON)
    c.setFont(FONT_B, 8)
    c.drawString(22, H - 30, "HAKKIMDA")

    c.setStrokeColor(DIVIDER)
    c.setLineWidth(0.4)
    c.line(22, H - 36, W - 22, H - 36)

    # baslik
    c.setFillColor(WHITE)
    c.setFont(FONT_B, 28)
    c.drawString(22, H - 72, "Beraanur Sahin")

    c.setFillColor(NEON)
    c.setFont(FONT_R, 10.5)
    c.drawString(22, H - 90, "Grafik Tasarimci & Sosyal Medya Yoneticisi")

    # biyografi
    bio = (
        "Grafik tasarim ve dijital icerik uretimi odaginda, markalar icin stratejik ve tutarli "
        "gorsel kimlikler tasarliyorum. Her projede, markanin karakterine uygun bir dil olusturup "
        "bunu tum temas noktalarinda sistemli sekilde uygulamayi hedefliyorum. Icerik, tasarim ve "
        "kullanici algisini birlikte ele alan bir yaklasim benimsiyorum."
    )
    bio_style = ParagraphStyle("bio",
        fontName=FONT_R, fontSize=10, leading=17,
        textColor=colors.HexColor("#c8cfe0"), alignment=TA_LEFT)
    para = Paragraph(bio, bio_style)
    pw = W - 44
    _, ph = para.wrapOn(c, pw, 300)
    para.drawOn(c, 22, H - 110 - ph)
    ly = H - 110 - ph - 22

    # hizmetler
    services = [
        ("Marka Kimligi",        "Logo, renk, tipografi\nve marka dili tasarimi"),
        ("Kurumsal Kimlik",      "Kartvizit, antetli kagit\nve kurumsal materyaller"),
        ("Sosyal Medya Tasarimi","Post, carousel, story\nve icerik takvimi"),
        ("Yayin ve Baski",       "Brosur, katalog, afis\nve baski tasarimlari"),
    ]
    col_w = (W - 44) / 2 - 6
    row_h = 68
    for i, (title, desc) in enumerate(services):
        col = i % 2
        row = i // 2
        bx = 22 + col * (col_w + 12)
        by = ly - row * (row_h + 8)
        c.setFillColor(BG_MID)
        c.roundRect(bx, by - row_h + 8, col_w, row_h - 4, 5, fill=1, stroke=0)
        # neon sol sert
        c.setFillColor(NEON)
        c.rect(bx, by - row_h + 8, 2.5, row_h - 4, fill=1, stroke=0)
        c.setFillColor(NEON)
        c.setFont(FONT_B, 8.5)
        c.drawString(bx + 10, by - 8, title.upper())
        c.setFillColor(colors.HexColor("#c8cfe0"))
        c.setFont(FONT_R, 8)
        for j, line in enumerate(desc.split("\n")):
            c.drawString(bx + 10, by - 22 - j * 13, line)

    # araçlar
    tools_y = ly - 2 * (row_h + 8) - 22
    c.setFillColor(NEON)
    c.setFont(FONT_B, 8)
    c.drawString(22, tools_y, "ARACLAR & BECERILER")
    c.setStrokeColor(DIVIDER)
    c.line(22, tools_y - 6, W - 22, tools_y - 6)

    skills = [
        "Adobe Photoshop", "Adobe Illustrator", "Adobe InDesign",
        "Canva Pro", "Figma", "Midjourney", "Adobe Firefly",
        "Instagram", "Meta Business Suite", "Icerik Stratejisi",
    ]
    sx, sy = 22, tools_y - 24
    c.setFont(FONT_R, 8.5)
    for s in skills:
        tw = c.stringWidth(s, FONT_R, 8.5) + 18
        if sx + tw > W - 22:
            sx = 22
            sy -= 22
        c.setFillColor(BG_MID)
        c.roundRect(sx, sy - 9, tw, 17, 6, fill=1, stroke=0)
        c.setStrokeColor(DIVIDER)
        c.roundRect(sx, sy - 9, tw, 17, 6, fill=0, stroke=1)
        c.setFillColor(WHITE)
        c.drawString(sx + 9, sy, s)
        sx += tw + 6

    # footer
    c.setStrokeColor(DIVIDER)
    c.line(22, 48, W - 22, 48)
    c.setFillColor(GRAY)
    c.setFont(FONT_R, 7.5)
    c.drawCentredString(W / 2, 36, "beranursahin@gmail.com   |   theblackdot.work   |   +90 530 524 05 10")

    c.showPage()


# ── PROJE SAYFASI ─────────────────────────────────────────────
def project_page(c, number, title, tag, description, work_items, palette_hex, cover_img):
    """Sol: kapak gorseli | Sag: proje bilgisi"""
    c.setFillColor(BG_DARK)
    c.rect(0, 0, W, H, fill=1, stroke=0)

    IMG_W = W * 0.48
    INFO_X = IMG_W + 14
    INFO_W = W - INFO_X - 14

    # ── Sol: tam sayfa gorsel ──────────────────────────────────
    draw_cropped(c, cover_img, 0, 0, IMG_W, H)

    # gorsel uzerine altta numara bandı
    c.setFillColor(colors.Color(0, 0, 0, alpha=0.55))
    c.rect(0, 0, IMG_W, 38, fill=1, stroke=0)
    c.setFillColor(NEON)
    c.setFont(FONT_B, 22)
    num_str = f"0{number}"
    c.drawString(12, 11, num_str)
    c.setFillColor(WHITE)
    c.setFont(FONT_R, 8.5)
    c.drawString(44, 15, "THE BLACK DOT")

    # ── Sag: bilgi paneli ─────────────────────────────────────

    # ust bosluk / etiket
    iy = H - 22

    # tag rozeti
    tag_w = c.stringWidth(tag, FONT_R, 7.5) + 16
    c.setFillColor(NEON_DIM)
    c.roundRect(INFO_X, iy - 16, tag_w, 16, 5, fill=1, stroke=0)
    c.setStrokeColor(NEON)
    c.setLineWidth(0.5)
    c.roundRect(INFO_X, iy - 16, tag_w, 16, 5, fill=0, stroke=1)
    c.setFillColor(NEON)
    c.setFont(FONT_R, 7.5)
    c.drawString(INFO_X + 8, iy - 10, tag)

    iy -= 30

    # proje basligi
    c.setFillColor(WHITE)
    c.setFont(FONT_B, 20)
    # uzun basliklar icin satir sar
    words = title.split()
    line, lines = "", []
    for w in words:
        test = (line + " " + w).strip()
        if c.stringWidth(test, FONT_B, 20) > INFO_W:
            lines.append(line)
            line = w
        else:
            line = test
    lines.append(line)
    for ln in lines:
        c.drawString(INFO_X, iy, ln)
        iy -= 24

    # neon alt cizgi
    c.setStrokeColor(NEON)
    c.setLineWidth(0.8)
    c.line(INFO_X, iy + 6, INFO_X + INFO_W, iy + 6)
    iy -= 14

    # aciklama
    desc_style = ParagraphStyle("desc",
        fontName=FONT_R, fontSize=9, leading=15,
        textColor=colors.HexColor("#c8cfe0"), alignment=TA_LEFT)
    para = Paragraph(description, desc_style)
    _, ph = para.wrapOn(c, INFO_W, 300)
    para.drawOn(c, INFO_X, iy - ph)
    iy = iy - ph - 18

    # calisma basliklari
    c.setFillColor(NEON)
    c.setFont(FONT_B, 8)
    c.drawString(INFO_X, iy, "CALISMALAR")
    iy -= 6
    c.setStrokeColor(DIVIDER)
    c.setLineWidth(0.3)
    c.line(INFO_X, iy, INFO_X + INFO_W, iy)
    iy -= 14

    c.setFont(FONT_R, 9)
    for item in work_items:
        c.setFillColor(NEON)
        c.circle(INFO_X + 4, iy + 3.5, 2, fill=1, stroke=0)
        c.setFillColor(WHITE)
        c.drawString(INFO_X + 13, iy, item)
        iy -= 14

    # renk paleti
    if palette_hex:
        iy -= 8
        c.setFillColor(NEON)
        c.setFont(FONT_B, 8)
        c.drawString(INFO_X, iy, "RENK PALETI")
        iy -= 6
        c.setStrokeColor(DIVIDER)
        c.line(INFO_X, iy, INFO_X + INFO_W, iy)
        iy -= 18
        px = INFO_X
        for hex_color in palette_hex:
            try:
                col = colors.HexColor(hex_color)
                r, g, b = (int(hex_color.lstrip("#")[i:i+2], 16) for i in (0, 2, 4))
                is_light = (r + g + b) > 600
                c.setFillColor(col)
                stroke_col = colors.HexColor("#444466") if is_light else col
                c.setStrokeColor(stroke_col)
                c.setLineWidth(0.5)
                c.roundRect(px, iy - 16, 24, 24, 4, fill=1, stroke=1)
                px += 30
            except Exception:
                pass

    # footer
    c.setStrokeColor(DIVIDER)
    c.setLineWidth(0.3)
    c.line(INFO_X, 22, INFO_X + INFO_W, 22)
    c.setFillColor(GRAY)
    c.setFont(FONT_R, 7)
    c.drawString(INFO_X, 10, "theblackdot.work")
    c.drawRightString(INFO_X + INFO_W, 10, f"0{number} / 07")

    c.showPage()


# ── ILETISIM SAYFASI ──────────────────────────────────────────
def contact_page(c):
    c.setFillColor(BG_DARK)
    c.rect(0, 0, W, H, fill=1, stroke=0)

    # neon yatay cubuk ust
    c.setFillColor(NEON)
    c.rect(0, H - 3, W, 3, fill=1, stroke=0)

    # arka dekorasyon: buyuk soluk kare
    c.setFillColor(BG_MID)
    c.roundRect(W / 2 - 110, H / 2 - 90, 220, 220, 12, fill=1, stroke=0)

    # baslik
    c.setFillColor(WHITE)
    c.setFont(FONT_B, 36)
    c.drawCentredString(W / 2, H / 2 + 94, "BIR FIKRIN MI VAR?")

    # neon cizgi
    c.setStrokeColor(NEON)
    c.setLineWidth(1.2)
    c.line(W / 2 - 60, H / 2 + 82, W / 2 + 60, H / 2 + 82)

    # alt yazi
    c.setFillColor(colors.HexColor("#c8cfe0"))
    c.setFont(FONT_R, 10)
    c.drawCentredString(W / 2, H / 2 + 64,
        "Yeni bir proje, cesur bir konsept ya da sadece merhaba demek icin —")
    c.drawCentredString(W / 2, H / 2 + 49, "kapim her zaman acik. Kahve benden.")

    # iletisim satirlari
    items = [
        ("E-POSTA",    "beranursahin@gmail.com"),
        ("WHATSAPP",   "+90 530 524 05 10"),
        ("WEB",        "theblackdot.work"),
    ]
    iy = H / 2 + 10
    for label, val in items:
        c.setFillColor(NEON)
        c.setFont(FONT_B, 7.5)
        c.drawCentredString(W / 2, iy, label)
        c.setFillColor(WHITE)
        c.setFont(FONT_R, 12)
        c.drawCentredString(W / 2, iy - 16, val)
        iy -= 42

    # dipnot
    c.setFillColor(GRAY)
    c.setFont(FONT_R, 8)
    c.drawCentredString(W / 2, 30, "2026 The Black Dot. Tum haklari saklidir.")

    c.showPage()


# ── ANA ───────────────────────────────────────────────────────
def main():
    out = os.path.join(BASE, "beraanur-sahin-portfolyo.pdf")

    # onceki PDF aciksa farkli isim kullan
    if os.path.exists(out):
        try:
            open(out, "ab").close()
        except PermissionError:
            out = os.path.join(BASE, "beraanur-sahin-portfolyo-v3.pdf")

    c = canvas.Canvas(out, pagesize=A4)
    c.setTitle("Beraanur Sahin — The Black Dot Portfolyo")
    c.setAuthor("Beraanur Sahin")
    c.setSubject("Grafik Tasarim & Sosyal Medya Yonetimi")

    cover_page(c)
    about_page(c)

    projects = [
        (1, "WALL STORY", "Kisisel Proje",
         "Kurdugun ve yaratici direktorlugunu yaptigim, kuratorluk yapilmis tablolar ve "
         "ic mekan estetigi uzerine insaa edilmis bir sanat markasi. Her post, mekan ile "
         "eserin uyumunu one cikaran tutarli bir anlatiya katki sagliyor.",
         ["Marka Kurulusu & Konumlandirma", "Art Direction",
          "Gorsel Kuratorluk", "Sosyal Medya Stratejisi", "Icerik Tasarimi"],
         ["#25344F", "#617891", "#D5B893", "#6F4D38", "#632024"],
         p("wall.story.art", "ana.png")),

        (2, "THE WHITE T-SHIRT", "Kisisel Proje",
         "Minimal bir t-shirt markasi icin sosyal medya icerik tasarimi. "
         "Sade, guclu ve tutarli gorsel dil.",
         ["Sosyal Medya", "Icerik Uretimi", "Gorsel Kimlik"],
         ["#FFFFFF", "#1A1A1A", "#BFBFBF"],
         p("the.white.t-shirt.co", "ana.jpg")),

        (3, "VORTIFY MEDIA", "Musteri Projesi — Reklam Ajansi",
         "Dijital buyume icin yaratici icerik cozumleri. Icerik yazimi, post tasarimi, "
         "icerik takvimi ve hesap yonetimi.",
         ["Sosyal Medya", "Carousel Tasarimi", "Baski / Yayin", "Icerik Uretimi"],
         ["#41210A", "#6A607D", "#4E73AD", "#BFD8F2", "#F3F5F2"],
         p("vortify", "ana.jpg")),

        (4, "SOFOR GO", "Musteri Projesi — Profesyonel Sofor Hizmeti",
         "Aracin sende, surus bizde. Tam marka kimligi: logo, renk, tipografi, "
         "sosyal medya sablonlari, uygulama arayuzu ve kurumsal kimlik.",
         ["Logo Tasarimi", "Marka Kimligi", "Sosyal Medya", "Uygulama Arayuzu"],
         ["#F5F6FB", "#A7A6AB", "#A927E7", "#180934", "#6620F0"],
         p("sofor-go", "ana.jpg")),

        (5, "THE LITTLE BLACK BOOK", "Musteri Projesi — Lifestyle Icerik Markasi",
         "Bodrum'daki secili mekan ve deneyimleri kurate eden lifestyle icerik markasi. "
         "Minimal ve rafine estetik yaklasim.",
         ["Icerik Kurgusu", "Gorsel Kimlik", "Sosyal Medya", "Editorial Tasarim"],
         ["#FFFFFF", "#000000", "#E42B91"],
         p("thelittleblackbook", "ana.jpg")),

        (6, "PARFUM MUTFAGI", "Musteri Projesi — Parfum Markasi",
         "Premium ve sade gorsel dil ile urun fotograf konseptleri ve sosyal medya "
         "icerik tasarimi. Yapay zeka destekli gorsel uretim.",
         ["Urun Gorselleri", "Sosyal Medya", "Yapay Zeka Konsept", "Icerik Kurgusu"],
         ["#719A73", "#003A35", "#001F27", "#1F73C2"],
         p("parfum", "ana.jpg")),

        (7, "SARKI KAPAKLARI", "Kisisel Proje",
         "Orijinal fotograflar kullanilarak tasarlanan album kapaklari. "
         "Her kapak, muzugun ruhunu gorsel bir dile ceviriyor.",
         ["Album Kapagi", "Fotograf", "Tipografi"],
         [],
         p("sarki", "sarki-kapagi-mockup", "ana.png")),
    ]

    for args in projects:
        print(f"Sayfa {args[0]}: {args[1]}")
        project_page(c, *args)

    contact_page(c)
    c.save()
    print(f"PDF olusturuldu: {out}")


if __name__ == "__main__":
    main()
