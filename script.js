/* =============================================
   HORMKRACHAY PASTURE FARM — SCRIPT
   ============================================= */

// ── TRANSLATIONS ────────────────────────────────────────────
const translations = {
  en: {
    nav_brand:         'HORMKRACHAY PASTURE FARM',
    nav_about:         'ABOUT US',
    nav_farm:          'OUR FARM',
    nav_eggs:          'OUR EGGS',
    nav_standards:     'STANDARDS',
    nav_restaurants:   'RESTAURANTS',
    nav_faq:           'FAQ',
    nav_cta:           'CONTACT US',

    dir_label:         'PAGES',
    dir_home:          'Home',
    dir_contact:       'Order',
    dir_col_navigate:  'NAVIGATE',
    dir_col_legal:     'LEGAL',

    hero_eyebrow:      'LOPBURI PROVINCE · SINCE 2026',
    hero_h1:           'Pasture raised eggs',
    hero_sub:          'Raised on open pasture in Lopburi, Thailand.<br>On a farm where quality has never been negotiable.',
    hero_cta1:         'FOR RESTAURANTS →',
    hero_cta2:         'THE FARM',
    hero_caption:      'Lohmann Brown hens on 250 rai of rotational pasture, Lopburi Province.',

    about_footer:      'Most egg producers in Thailand use the word "farm" generously. Behind it is usually an indoor facility — indoor sheds, artificial lighting, cages stacked in rows and nothing like what the word suggests. Ours is a farm you could walk across. Open pasture, Open sky, hens that live outside every day of their lives.',
    about_panel_sub:   'OUR STORY.<br>OUR LAND.',
    about_eyebrow:     'HOW WE STARTED',
    about_heading:     'ABOUT US',
    about_text_l:      'We believe the best eggs come from hens that live as nature intended. Raised on 250 rai of open Lopburi grassland, our Lohmann Brown hens roam freely and forage naturally — producing eggs with flavour and nutritional density serious kitchens demand.',
    about_text_r:      'What started as a small cattle and crop farm in the middle of Lopburi Province has grown, across three generations, become something else. Today, we raise pasture hens the way eggs were meant to be produced — slowly, attentively, and without shortcuts. Every decision, from the breed we keep to the grasses we grow, is made with one thing in mind: <br><br> <em>A better egg follows naturally from better care.</em>',
    about_cta:         'DISCOVER MORE →',

    farm_eyebrow:      'ALL FAMILY OWNED',
    farm_heading:      'OUR FARM',
    farm_visit_btn:    'REQUEST A FARM VISIT',
    farm_panel_sub:    'SINGLE FARM.<br>OPEN PASTURE.',
    farm_text_r:       'Across 40 hectares of living pasture, our hens move from paddock to paddock on a rotation that keeps the grass growing and the soil healthy. We use no pesticides, no herbicides, and no synthetic fertilisers. Our flock spends every day outdoors on fresh grass, foraging as hens are meant to. The result is land that gets richer the longer we farm it, and a flock that lives the way nature intended. <br><br> <em>Better pasture, better hens, better eggs.</em>',
    farm_accent:       'naturally',
    farm_footer:       'Every egg comes from this single farm, gathered by hand, graded by our team, and delivered without passing through a supplier or distributor. It\'s how we keep our standards and our promise intact.',

    eggs_eyebrow:      'THE FINEST EGG FOR YOUR KITCHEN',
    eggs_heading:      'OUR EGGS',
    eggs_panel_sub:    'RICH YOLKS.<br>FIRM WHITES.',
    eggs_text_r:       'THE QUALITY OF AN EGG IS A DIRECT REFLECTION OF THE HEN\'S LIFESTYLE AND DIET. OUR EGGS DELIVER UNMATCHED NUTRITIONAL DENSITY.',
    eggs_accent:       'premium',
    eggs_footer:       'Whether it\'s for a delicate pastry or a hearty breakfast, Hormkrachay Pasture Farm eggs bring vibrant amber color, robust structure, and incredible flavor to any high-end culinary creation.',
    eggs_side_heading: 'Our hens live outdoors from morning to dusk, foraging freely on grass, insects, and worms. <br><br> <em>The natural diet produces eggs measurably higher in omega-3, vitamin D, vitamin E, and essential minerals than conventional alternatives</em> <br><br> — raised without antibiotics, hormones, or pesticides of any kind. An egg you can serve with confidence.',
    eggs_subheader:    'Pasture raised egg is the highest standard in egg production — nutritionally and ethically. Every hen on our farm lives on open pasture for her entire laying life, never confined, never indoors.',
    eggs_card1_title:  'Free Range',
    eggs_card1_text:   'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.',
    eggs_card2_title:  'Pasture Raised',
    eggs_card2_text:   'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.',
    eggs_card3_title:  'Non-GMO Feed',
    eggs_card3_text:   'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.',
    eggs_card4_title:  '48hr Delivery',
    eggs_card4_text:   'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.',

    contact_title:     'CONTACT US',
    contact_intro:     'We work directly with restaurants and kitchens. For wholesale supply, single orders, buying enquiries, farm visit or any questions about our eggs — you can reach us through the following.',
    contact_h_new:     'Line Official Account',
    contact_t_new1:    '<a href="https://lin.ee/yc51Dau" target="_blank">@437vqbqw</a>',
    contact_t_new2:    '',
    contact_h_addr:    'Address',
    contact_t_addr:    '154 Tambon Niyomchai,<br>Sa Bot District, Lopburi 15240<br>Thailand',
    contact_h_gen:     'TELEPHONE',
    contact_t_gen1:    '+66....',
    contact_t_gen2:    '',
    contact_h_car:     'Careers & Internships',
    contact_t_car:     'jobs@normcph.com',
    contact_h_fol:     'Follow us',

    stat1: 'EGGS / HEN / YEAR',
    stat2: 'PASTURE PER HEN',
    stat3: 'RAI LOPBURI FARM',
    stat4: 'FARM TO KITCHEN',

    farm_label:    '01 — THE FARM',
    farm_title:    'ROOM<br>TO<br><em>ROAM.</em>',
    farm_body:     'Spanning 250 rai of open land in Lopburi Province, our Lohmann Brown hens enjoy full outdoor access from sunrise to sunset, every single day. Selected for their heat tolerance and calm temperament, they thrive in Thailand\'s climate.',
    farm_f1_title: 'TROPICAL CLIMATE ADAPTED',
    farm_f1_desc:  'Lohmann Brown hens chosen specifically for heat tolerance and calm temperament in Thailand.',
    farm_f2_title: 'REGENERATIVE GRAZING',
    farm_f2_desc:  '6-cell rotational system with a 28-day pasture recovery cycle. Fresh grass, healthier soil.',
    farm_f3_title: 'NATURAL DIET',
    farm_f3_desc:  'Supplemented with Black Soldier Fly larvae — natural, high-quality insect protein. No synthetic feed additives.',
    farm_cta:      'REQUEST A VISIT →',

    std_label:         '02 — STANDARDS',
    std_title:         'THE AMBER<br><em>DIFFERENCE.</em>',
    std_sub:           'A hen\'s diet directly dictates the quality of her eggs. Our pasture-raised eggs offer dramatic nutritional superiority over conventionally caged eggs.',
    std_s1_title:      'OMEGA-3<br>FATTY ACIDS',
    std_s1_desc:       'Crucial for heart health and reducing inflammation naturally.',
    std_s2_title:      'MORE<br>VITAMIN D',
    std_s2_desc:       'Directly from our hens spending their days under the Thai sun.',
    std_s3_title:      'LESS<br>CHOLESTEROL',
    std_s3_desc:       'A leaner, healthier egg without sacrificing the rich, full flavour.',
    std_yolk_caption:  'Conventional · Cage-free · Pasture-raised',
    std_yolk1_title:   'VIBRANT AMBER YOLKS',
    std_yolk1_desc:    'Our yolks aren\'t the pale yellow you find in supermarkets. The deep amber colour comes naturally from the carotenoids our hens consume while grazing on fresh pasture and insects.',
    std_yolk2_title:   'FIRMER WHITES',
    std_yolk2_desc:    'A sign of true freshness and protein quality. Our egg whites hold their shape perfectly, making them ideal for poaching and professional baking.',

    rest_label:        '03 — FOR RESTAURANTS',
    rest_title:        'BUILT FOR<br>THE<br><em>PASS.</em>',
    rest_sub:          'We supply Bangkok\'s finest restaurants, hotels, and food service operations with a product that elevates every dish. Weekly delivery, volume-based pricing, and a supply chain you can put on your menu.',
    rest_adv_label:    'CULINARY ADVANTAGES',
    rest_li1:          'Richer, more stable hollandaise',
    rest_li2:          'Deeper, creamier scrambles and custards',
    rest_li3:          'Vibrant golden pasta dough',
    rest_li4:          'Firmer whites for flawless poaching and frying',
    rest_pricing_label:'PRICING FROM',
    rest_per_egg:      'PER EGG (1,000+ / MONTH)',
    rest_delivery:     'Bangkok delivery twice weekly · MOQ 1,000 eggs/month · Invoice-ready supply chain.',
    rest_cta:          'REQUEST SAMPLES →',

    cta_band_text:     'READY TO TRIAL?',
    cta_band_btn:      'REQUEST A COMPLIMENTARY TRIAL BOX →',

    faq_label:  '04 — FAQ',
    faq_title:  'GOT<br>QUESTIONS?',
    faq_sub:    'Quick answers to common questions about our farming methods, egg quality, and delivery.',
    faq_q1:     'What do the hens eat?',
    faq_a1:     'Our hens graze freely on open pasture and are supplemented with a non-GMO grain mix and Black Soldier Fly larvae for natural insect protein. No synthetic additives, antibiotics, or growth hormones — ever.',
    faq_q2:     'Why are the yolks so orange?',
    faq_a2:     'The deep amber yolk colour comes from carotenoids — natural pigments found in the grasses, insects, and forage our hens eat daily. This is a reliable marker of both diet quality and nutritional density.',
    faq_q3:     'Can we visit the farm?',
    faq_a3:     'Yes — we welcome scheduled visits from wholesale buyers, chefs, and media. Please contact us to arrange a farm tour. We believe in full transparency and are proud to show you exactly how we operate.',
    faq_q4:     'How fast is delivery to Bangkok?',
    faq_a4:     'Eggs are collected, graded, and dispatched within 24 hours. Bangkok delivery typically arrives within 48 hours of collection, maintaining peak freshness. We operate on a scheduled twice-weekly run for wholesale clients.',
    faq_q5:     'What is the minimum order?',
    faq_a5:     'Minimum order is 1,000 eggs per month for the standard B2B subscription. Trial boxes (30 eggs) are available on request before committing. Payment terms: COD or 7-day net for established accounts.',
    faq_q6:     'What sizes are available?',
    faq_a6:     'We grade by weight: No.0 Jumbo (70g+), No.1 Extra Large (65–70g), No.2 Large (60–65g), No.3 Medium (55–60g), No.4 Small (under 55g). No.2 Large is our hero SKU at ฿8.55/egg for volume accounts.',

    footer_logo:          'HORMKRACHAY PASTURE FARM',
    footer_tagline:       'Raised on pasture.<br>Delivered to your kitchen.',
    footer_email_cta:     'GET IN TOUCH →',
    footer_nav_head:      'NAVIGATE',
    footer_contact_head:  'CONTACT',
    footer_location:      'Lopburi Province, Thailand',
    footer_whatsapp:      'WhatsApp →',
    footer_form_head:     'REQUEST A TRIAL BOX',
    form_ph_restaurant:   'Restaurant name *',
    form_ph_name:         'Your name *',
    form_ph_whatsapp:     'WhatsApp +66 ...',
    form_ph_email:        'Email (optional)',
    form_area_placeholder:'Delivery area *',
    form_area_sathorn:    'Sathon / Silom',
    form_area_sukhumvit:  'Sukhumvit',
    form_area_wittayu:    'Wittayu / Ploenchit',
    form_area_other:      'Other Bangkok',
    form_submit:          'SEND REQUEST →',
    form_pdpa:            'By submitting you agree to our <a href="#">Privacy Policy</a>.',
    footer_copy:          '© 2026 Hormkrachay Pasture Farm. All rights reserved.',
    footer_privacy:       'Privacy Policy',
    footer_terms:         'Terms of Service',
  },

  th: {
    nav_brand:         'ลพบุรี พาสเจอร์',
    nav_about:         'เกี่ยวกับเรา',
    nav_farm:          'ฟาร์มของเรา',
    nav_eggs:          'ไข่ไก่ของเรา',
    nav_standards:     'มาตรฐาน',
    nav_restaurants:   'สำหรับร้านอาหาร',
    nav_faq:           'คำถามที่พบบ่อย',
    nav_cta:           'ติดต่อเรา',

    dir_label:         'หน้าเว็บ',
    dir_home:          'หน้าแรก',
    dir_contact:       'สั่งซื้อ',
    dir_col_navigate:  'นำทาง',
    dir_col_legal:     'กฎหมาย',

    hero_eyebrow:      'LOPBURI PROVINCE · SINCE 2026',
    hero_h1:           'Pasture raised eggs',
    hero_sub:          'เราคือฟาร์มไข่ไก่ Pasture raised จากฟาร์มในจังหวัดลพบุรี <br> แม่ไก่ของเราทุกตัวถูกเลี้ยงโดยให้มีคุณภาพชีวิตที่ดีที่สุด',
    hero_cta1:         'FOR RESTAURANTS →',
    hero_cta2:         'THE FARM',
    hero_caption:      'ไก่ Lohmann Brown บน 250 ไร่ของทุ่งหญ้าหมุนเวียน จังหวัดลพบุรี',

    about_panel_sub:   'OUR STORY.<br>OUR LAND.',
    about_eyebrow:     'HOW WE STARTED',
    about_heading:     'เกี่ยวกับเรา',
    about_text_l:      'เราเชื่อว่าไข่ที่ดีที่สุดมาจากแม่ไก่ที่ใช้ชีวิตตามธรรมชาติ บนพื้นที่ทุ่งหญ้า 250 ไร่ในจังหวัดลพบุรี แม่ไก่ของเราเดินหาอาหารอย่างอิสระ สร้างไข่ที่เต็มไปด้วยรสชาติและคุณค่าทางโภชนาการที่ครัวระดับมืออาชีพต้องการ',
    about_text_r:      'ฟาร์มของเรามีจุดเริ่มต้นมาจากการทำพืชไร่และเลี้ยงวัวทั่วไป บนพื้นที่ที่สืบทอดกันมานานกว่า 3 ชั่วอายุคน ใจกลางจังหวัดลพบุรี พื้นที่แห่งนี้ได้เติบโตและเปลี่ยนแปลงไปพร้อมๆกับผู้คนบนผืนไร่แห่งนี้ ปัจจุบันฟาร์มของเราได้เริ่มต้นการเลี้ยงไก่แบบ Pasture Raised ฟาร์มเราใส่ใจในทุกรายละเอียด ตั้งแต่วิธีการเลี้ยงไก่ของเราไปจนถึงการดูแลผืนดินของเราที่ไก่ทุกตัวของเราใช้ชีวิตและอาศัยอยู่ เรายึดถือและมีความเชื่อว่า: <br><br> <em>ไข่ไก่ที่ดี ย่อมมาจากความใส่ใจที่ดีกว่า</em>',
    about_cta:         'ค้นพบเพิ่มเติม →',
    about_footer:      'คำว่า "ฟาร์ม" ในอุตสาหกรรมไข่ไก่ของเรามักถูกเรียกใช้กันอย่างกว้างขวาง แต่เบื้องหลัง "ฟาร์ม" เหล่านั้นมักเป็นระบบโรงเรือนปิดที่ไม่มีแสงอาทิตย์ส่องถึง ไก่ส่วนใหญ่ต้องใช้ชีวิตอยู่ในโรงเรือนตลอดชีวิต ซึ่งห่างไกลจากคำว่า "ฟาร์ม" มาก แต่สำหรับเรา ฟาร์มคือพื้นที่ที่ไก่ทุกตัวสามารถเดินและสามารถสัมผัสผืนดิน ได้ใช้ชิวิตอยู่ในทุ่งหญ้ากว้าง และได้รับแสงแดดตามธรรมชาติทุกๆวัน เป็นที่ๆแม่ไก่ทุกตัวของฟาร์มเราได้ใช้ชีวิตอยู่ในทุกๆ วัน',

    farm_eyebrow:      'ALL FAMILY OWNED',
    farm_heading:      'ฟาร์มของเรา',
    farm_visit_btn:    'ขอเยี่ยมชมฟาร์ม',
    farm_panel_sub:    'SINGLE FARM.<br>OPEN PASTURE.',
    farm_text_r:       'บนพื้นที่ทุ่งหญ้ากว่า 250 ไร่ แม่ไก่ของเราจะถูกปล่อยให้ใช้ชีวิตอยู่ในทุ่งหญ้าและถูกจัดการอย่างเป็นระบบโดยการใช้ระบบ Rotational grazing เพื่อให้ผืนหญ้าได้ฟื้นตัวและรักษาความสมบูรณ์ของดิน เราไม่ใช้ยาฆ่าแมลง, ยากำจัดวัชพืช และปุ๋ยเคมีทุกชนิด บนผืนหญ้าทั้งหมดของเรา ทำให้ฝูงไก่ของเราสามารถเดินหาอาหารและใช้ชีวิตตามธรรมชาติของแม่ไก่บนผืนหญ้าได้อย่างปลอดภัย ผลลัพธ์ที่ได้คือผืนดินที่อุดมสมบูรณ์ และฝูงไก่ที่มีความสุขและสามารถใช้ชีวิตอย่างที่ควรจะเป็น <br><br> <em>แม่ไก่ที่อาศัยอยู่ในทุ่งหญ้าที่ดีย่อมมีความสุข และให้ไข่ไก่ที่ดีกว่า</em>',
    farm_accent:       'ตามวิถีธรรมชาติ',
    farm_footer:       'ไข่ไก่ทุกฟองของเรามาจากฟาร์มของเราเพียงแห่งเดียว (Single Origin) และไม่มีการนำไข่จากฟาร์มอื่นมาปน เราเชื่อมั่นในมาตรฐานของไข่ไก่ทุกฟองของเรา เพื่อลูกค้าทุกคนจะได้รับไข่ไก่ที่ดีที่สุดจากเรา',

    eggs_eyebrow:      'THE FINEST EGG FOR YOUR KITCHEN',
    eggs_heading:      'ไข่ไก่ของเรา',
    eggs_panel_sub:    'RICH YOLKS.<br>FIRM WHITES.',
    eggs_text_r:       'คุณภาพของไข่สะท้อนโดยตรงถึงวิถีชีวิตและอาหารของแม่ไก่ ไข่ของเราส่งมอบคุณค่าทางโภชนาการที่ไม่มีใครเทียบได้',
    eggs_accent:       '',
    eggs_footer:       'ไม่ว่าจะเป็นสำหรับขนมอบที่ละเอียดอ่อนหรืออาหารเช้าที่เต็มอิ่ม ไข่จาก Hormkrachay Pasture Farm มอบสีอำพันสดใส โครงสร้างที่แข็งแรง และรสชาติที่ยอดเยี่ยมให้กับการสร้างสรรค์อาหารระดับไฮเอนด์ทุกรูปแบบ',
    eggs_side_heading: 'แม่ไก่ของเราใช้ชีวิตอยู่กลางทุ่งหญ้าทั้งวันตั้งแต่เช้าจรดค่ำ ทำให้แม่ไก่เดินหาอาหารได้อย่างอิสระ ไม่ว่าจะเป็นหญ้าที่เราปลูกไว้หรือแมลงต่างๆ <br><br> <em>การที่แม่ไก่ได้อาหารที่หลากหลายตามธรรมชาติทำให้ไข่ไก่ที่ได้ มีปริมาณ โอเมก้า 3, วิตามินดี, วิตามินอี, และแร่ธาตุ สูงกว่าไข่ไก่ทั่วไป</em> <br><br> แม่ไก่ทุกตัวของเราปราศจากการใช้ยาปฏิชีวนะและ ฮอร์โมนต่างๆ นี่คือไข่ไก่ที่คุณสามารถมั่นใจในคุณภาพและความปลอดภัยทุกการบริโภค',
    eggs_subheader:    'ไข่ไก่ Pasture Raised คือไข่ไก่ที่มีมาตรฐานสูงที่สุด ไม่ว่าจะด้านคุณค่าทางสารอาหาร (Nutrition) หรือด้านคุณภาพชีวิตของสัตว์ (Animal Welfare) ฟาร์มเราการันตีว่าแม่ไก่ทุกตัวในฟาร์มเราได้ใช้ชีวิตในทุ่งหญ้าเปิดและไม่ถูกขังอยู่ในโรงเรือนตลอดชีวิตของการให้ไข่ของแม่ไก่',
    eggs_card1_title:  'ไข่ไก่ Free Range',
    eggs_card1_text:   'ลอเรม อิปซัม โดลอร์ ซิต อาเมต คอนเซคเตตูร์ อดิปิสซิง เอลิต เซด โด เอียสมอด เทมปอร์',
    eggs_card2_title:  'ไข่ไก่ Pasture Raised',
    eggs_card2_text:   'ไข่ไก่ Pasture Raised คือไข่ไก่ที่มีมาตรฐานสูงที่สุด ไม่ว่าจะด้านคุณค่าทางสารอาหาร (Nutrition) <br> หรือด้านคุณภาพชีวิตของสัตว์ (Animal Welfare) ฟาร์มเราการันตีว่าแม่ไก่ทุกตัวในฟาร์มเราได้ใช้ชีวิตใน <br> ทุ่งหญ้าเปิดและไม่ถูกขังอยู่ในโรงเรือนตลอดชีวิตของการให้ไข่ของแม่ไก่.',
    eggs_card3_title:  'อาหารปลอด GMO',
    eggs_card3_text:   'ลอเรม อิปซัม โดลอร์ ซิต อาเมต คอนเซคเตตูร์ อดิปิสซิง เอลิต เซด โด เอียสมอด เทมปอร์',
    eggs_card4_title:  'ส่งภายใน 48 ชม.',
    eggs_card4_text:   'ลอเรม อิปซัม โดลอร์ ซิต อาเมต คอนเซคเตตูร์ อดิปิสซิง เอลิต เซด โด เอียสมอด เทมปอร์',

    contact_title:     'ติดต่อเรา',
    contact_intro:     'เรารับคำสั่งซื้อจากร้านอาหารหรือธุรกิจอาหารต่างๆโดยตรง สำหรับการสั่งซื้อไข่ไก่ หรือสอบถามข้อสงสัยอื่นๆเกี่ยวกับไข่ไก่ของเรา สามารถติดต่อเราได้ตามช่องทางต่างๆ ดังนี้',
    contact_h_new:     'Line Official Account',
    contact_t_new1:    '<a href="https://lin.ee/yc51Dau" target="_blank">@437vqbqw</a>',
    contact_t_new2:    '',
    contact_h_addr:    'ที่อยู่ฟาร์มของเรา',
    contact_t_addr:    '154 ตำบล นิยมชัย อำเภอ สระโบสถ์ ลพบุรี 15240',
    contact_h_gen:     'TELEPHONE',
    contact_t_gen1:    '+66....',
    contact_t_gen2:    '',
    contact_h_car:     'ร่วมงานกับเรา',
    contact_t_car:     'jobs@normcph.com',
    contact_h_fol:     'ติดตามเรา',

    stat1: 'ฟองต่อตัวต่อปี',
    stat2: 'ทุ่งหญ้าต่อตัว',
    stat3: 'ไร่ ฟาร์มลพบุรี',
    stat4: 'จากฟาร์มถึงครัว',

    farm_label:    '01 — ฟาร์มของเรา',
    farm_title:    'อิสระ<br>ที่<br><em>กว้างใหญ่</em>',
    farm_body:     'บนพื้นที่กว่า 250 ไร่ในจังหวัดลพบุรี ไก่ Lohmann Brown ของเราได้ออกสู่ทุ่งโล่งตั้งแต่รุ่งเช้าจนพระอาทิตย์ตกทุกวัน คัดเลือกสายพันธุ์ที่ทนร้อนและมีอารมณ์สงบ เหมาะกับสภาพอากาศเมืองไทย',
    farm_f1_title: 'ปรับตัวกับอากาศร้อน',
    farm_f1_desc:  'คัดเลือกไก่ Lohmann Brown โดยเฉพาะเพราะทนต่อความร้อนและมีอารมณ์สงบในสภาพอากาศของประเทศไทย',
    farm_f2_title: 'ระบบหมุนเวียนทุ่งหญ้า',
    farm_f2_desc:  'ระบบหมุนเวียน 6 แปลง พักดิน 28 วัน ทุ่งหญ้าสดใหม่ ดินอุดมสมบูรณ์',
    farm_f3_title: 'อาหารตามธรรมชาติ',
    farm_f3_desc:  'เสริมด้วยตัวอ่อนแมลงวันทหาร (BSF) โปรตีนคุณภาพสูงจากธรรมชาติ ไม่มีสารเติมแต่งสังเคราะห์',
    farm_cta:      'ขอนัดเยี่ยมชมฟาร์ม →',

    std_label:         '02 — มาตรฐาน',
    std_title:         'ความแตกต่าง<br><em>ของสีทอง</em>',
    std_sub:           'อาหารของแม่ไก่กำหนดคุณภาพของไข่โดยตรง ไข่เลี้ยงทุ่งของเรามีคุณค่าทางโภชนาการเหนือกว่าไข่ไก่กรงแบบธรรมดาอย่างชัดเจน',
    std_s1_title:      'โอเมก้า-3<br>กรดไขมัน',
    std_s1_desc:       'สำคัญต่อสุขภาพหัวใจและช่วยลดการอักเสบตามธรรมชาติ',
    std_s2_title:      'วิตามินดี<br>สูงกว่า',
    std_s2_desc:       'ได้รับโดยตรงจากแม่ไก่ที่อยู่กลางแดดของเมืองไทยทุกวัน',
    std_s3_title:      'คอเลสเตอรอล<br>ต่ำกว่า',
    std_s3_desc:       'ไข่ที่ดีต่อสุขภาพมากขึ้น โดยไม่สูญเสียรสชาติที่เข้มข้น',
    std_yolk_caption:  'ไก่กรง · ไก่กรงอิสระ · ไก่เลี้ยงทุ่ง',
    std_yolk1_title:   'ไข่แดงสีทองเข้ม',
    std_yolk1_desc:    'ไข่แดงของเราไม่ใช่สีเหลืองซีดแบบที่พบในซุปเปอร์มาร์เก็ต สีแดงส้มเข้มนั้นมาจากแคโรทีนอยด์ที่แม่ไก่ได้รับตามธรรมชาติจากการกินหญ้าและแมลง',
    std_yolk2_title:   'ไข่ขาวที่แน่นกว่า',
    std_yolk2_desc:    'สัญญาณของความสดและคุณภาพโปรตีน ไข่ขาวของเราคงรูปได้ดี เหมาะสำหรับการลวกและการอบขนมมืออาชีพ',

    rest_label:        '03 — สำหรับร้านอาหาร',
    rest_title:        'สร้างมา<br>เพื่อ<br><em>ครัวมืออาชีพ</em>',
    rest_sub:          'เราส่งสินค้าให้ร้านอาหาร โรงแรม และธุรกิจอาหารชั้นนำในกรุงเทพฯ ด้วยคุณภาพที่ยกระดับทุกเมนู ส่งรายสัปดาห์ ราคาตามปริมาณ ระบบการสั่งพร้อมใบแจ้งหนี้',
    rest_adv_label:    'ข้อได้เปรียบในการทำอาหาร',
    rest_li1:          'ซอสฮอลแลนเดสที่เข้มข้นและเสถียรกว่า',
    rest_li2:          'ไข่คนและคัสตาร์ดที่เนียนนุ่มลึกกว่า',
    rest_li3:          'แป้งพาสต้าสีทองสวยงาม',
    rest_li4:          'ไข่ขาวแน่นเหมาะสำหรับการลวกและทอด',
    rest_pricing_label:'ราคาเริ่มต้น',
    rest_per_egg:      'ต่อฟอง (1,000+ ฟอง/เดือน)',
    rest_delivery:     'ส่งกรุงเทพฯ สัปดาห์ละ 2 ครั้ง · MOQ 1,000 ฟอง/เดือน · ระบบใบแจ้งหนี้พร้อมใช้งาน',
    rest_cta:          'ขอตัวอย่างสินค้า →',

    cta_band_text:     'พร้อมทดลองแล้วใช่ไหม?',
    cta_band_btn:      'ขอกล่องทดลองฟรี 30 ฟอง →',

    faq_label:  '04 — คำถามที่พบบ่อย',
    faq_title:  'มี<br>คำถาม?',
    faq_sub:    'คำตอบสั้นๆ สำหรับคำถามทั่วไปเกี่ยวกับวิธีการเลี้ยง คุณภาพไข่ และการจัดส่ง',
    faq_q1:     'แม่ไก่กินอาหารอะไร?',
    faq_a1:     'แม่ไก่ของเราหากินอย่างอิสระบนทุ่งหญ้า และได้รับอาหารเสริมจากข้าวสาลีปลอด GMO และตัวอ่อนแมลงวันทหาร (BSF) ไม่มีสารเติมแต่ง ยาปฏิชีวนะ หรือฮอร์โมนเร่งโต — เลย',
    faq_q2:     'ทำไมไข่แดงถึงสีส้มเข้มขนาดนี้?',
    faq_a2:     'สีไข่แดงสีแดงส้มเข้มมาจากแคโรทีนอยด์ ซึ่งเป็นรงควัตถุธรรมชาติที่พบในหญ้า แมลง และพืชที่แม่ไก่กินทุกวัน นี่คือตัวบ่งชี้ที่เชื่อถือได้ถึงคุณภาพอาหารและความหนาแน่นของสารอาหาร',
    faq_q3:     'เยี่ยมชมฟาร์มได้ไหม?',
    faq_a3:     'ได้ — เรายินดีรับการเยี่ยมชมที่นัดล่วงหน้าจากผู้ซื้อส่ง เชฟ และสื่อมวลชน ติดต่อเราเพื่อนัดทัวร์ฟาร์ม เราเชื่อในความโปร่งใสและภูมิใจที่จะแสดงให้เห็นว่าเราดำเนินการอย่างไร',
    faq_q4:     'ส่งถึงกรุงเทพฯ เร็วแค่ไหน?',
    faq_a4:     'ไข่จะถูกเก็บ คัดเกรด และจัดส่งภายใน 24 ชั่วโมง การส่งถึงกรุงเทพฯ ปกติใช้เวลาภายใน 48 ชั่วโมงนับจากการเก็บ รักษาความสดสูงสุด เราดำเนินการตามกำหนดการส่งสัปดาห์ละ 2 ครั้งสำหรับลูกค้าขายส่ง',
    faq_q5:     'สั่งขั้นต่ำเท่าไหร่?',
    faq_a5:     'สั่งขั้นต่ำ 1,000 ฟองต่อเดือนสำหรับการสมัครสมาชิก B2B มาตรฐาน กล่องทดลอง (30 ฟอง) สามารถขอรับได้ก่อนตัดสินใจ เงื่อนไขชำระเงิน: เงินสดหรือเครดิต 7 วันสำหรับบัญชีที่มีอยู่',
    faq_q6:     'มีขนาดไข่อะไรบ้าง?',
    faq_a6:     'คัดเกรดตามน้ำหนัก: เบอร์ 0 จัมโบ้ (70 กรัม+) เบอร์ 1 ใหญ่พิเศษ (65-70 กรัม) เบอร์ 2 ใหญ่ (60-65 กรัม) เบอร์ 3 กลาง (55-60 กรัม) เบอร์ 4 เล็ก (ต่ำกว่า 55 กรัม) เบอร์ 2 คือ SKU หลักของเราที่ ฿8.55/ฟองสำหรับบัญชีปริมาณมาก',

    footer_logo:          'ลพบุรี พาสเจอร์',
    footer_tagline:       'เลี้ยงบนทุ่งหญ้า<br>ส่งตรงถึงครัวของคุณ',
    footer_email_cta:     'ติดต่อเรา →',
    footer_nav_head:      'เมนู',
    footer_contact_head:  'ติดต่อ',
    footer_location:      'จังหวัดลพบุรี ประเทศไทย',
    footer_whatsapp:      'WhatsApp →',
    footer_form_head:     'ขอกล่องทดลอง',
    form_ph_restaurant:   'ชื่อร้านอาหาร *',
    form_ph_name:         'ชื่อของคุณ *',
    form_ph_whatsapp:     'WhatsApp +66 ...',
    form_ph_email:        'อีเมล (ไม่บังคับ)',
    form_area_placeholder:'เขตจัดส่ง *',
    form_area_sathorn:    'สาทร / สีลม',
    form_area_sukhumvit:  'สุขุมวิท',
    form_area_wittayu:    'วิทยุ / เพลินจิต',
    form_area_other:      'กรุงเทพฯ อื่นๆ',
    form_submit:          'ส่งคำขอ →',
    form_pdpa:            'การส่งแบบฟอร์มถือว่าคุณยอมรับ <a href="#">นโยบายความเป็นส่วนตัว</a>',
    footer_copy:          '© 2026 Hormkrachay Pasture Farm สงวนลิขสิทธิ์',
    footer_privacy:       'นโยบายความเป็นส่วนตัว',
    footer_terms:         'ข้อกำหนดการให้บริการ',
  }
};

// ── LANGUAGE ─────────────────────────────────────────────────
const _isThPage = window.location.pathname.includes('/th');
const _isEnPage = window.location.pathname.includes('/en');
let currentLang = _isThPage ? 'th' : 'en';

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('lp_lang', lang);
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = translations[lang][key];
    if (val === undefined) return;
    if (val === '') { el.innerHTML = ''; return; }
    if (val.includes('<')) {
      el.innerHTML = val;
    } else {
      el.textContent = val;
    }
  });

  // Update input placeholders
  document.querySelectorAll('[data-ph-i18n]').forEach(el => {
    const key = el.getAttribute('data-ph-i18n');
    const val = translations[lang][key];
    if (val) el.placeholder = val;
  });

  // Update lang toggle active state
  document.querySelectorAll('.lang-opt').forEach(opt => {
    opt.classList.toggle('active', opt.getAttribute('data-lang') === lang);
  });
}

// Lang toggle — navigate between dedicated language pages
document.getElementById('langToggle').addEventListener('click', () => {
  if (_isThPage) {
    window.location.href = '/en/';
  } else {
    window.location.href = '/th/';
  }
});

// Init language
setLanguage(currentLang);

// ── ACTIVE NAV & SITE DIR (page-based) ───────────────────────
const currentFile = window.location.pathname.split('/').pop() || 'index.html';

document.querySelectorAll('.nav-links a').forEach(a => {
  a.classList.toggle('active', a.getAttribute('href') === currentFile);
});

document.querySelectorAll('.site-dir-item').forEach(item => {
  item.classList.toggle('current', item.getAttribute('href') === currentFile);
});

// ── MOBILE DRAWER ─────────────────────────────────────────────
const mobileDrawer = document.getElementById('mobileDrawer');
const navHamburger = document.getElementById('navHamburger');
const drawerClose   = document.getElementById('drawerClose');

navHamburger.addEventListener('click', () => {
  mobileDrawer.classList.add('open');
  document.body.style.overflow = 'hidden';
});

function closeDrawer() {
  mobileDrawer.classList.remove('open');
  document.body.style.overflow = '';
}

drawerClose.addEventListener('click', closeDrawer);
mobileDrawer.addEventListener('click', e => {
  if (e.target === mobileDrawer) closeDrawer();
});

// ── FAQ ACCORDION ─────────────────────────────────────────────
document.querySelectorAll('.faq-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const isOpen = btn.getAttribute('aria-expanded') === 'true';
    const answer = btn.nextElementSibling;
    if (isOpen) {
      btn.setAttribute('aria-expanded', 'false');
      answer.classList.remove('open');
    } else {
      btn.setAttribute('aria-expanded', 'true');
      answer.classList.add('open');
    }
  });
});

// ── SCROLL REVEAL ─────────────────────────────────────────────
const reveals = document.querySelectorAll(
  '.about-content, .stat-item, .std-card, .feat-label, .faq-item, .split-text, .split-img'
);

reveals.forEach(el => el.classList.add('reveal'));

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

reveals.forEach(el => revealObserver.observe(el));

// ── FORM SUBMIT ───────────────────────────────────────────────
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    const btn = e.target.querySelector('button[type="submit"]');
    btn.textContent = currentLang === 'th' ? 'ส่งแล้ว ✓' : 'SENT ✓';
    btn.style.background = '#1D4A2E';
    btn.disabled = true;
  });
}

// ── HERO VIDEO LOOP ──────────────────────────────────────────
const heroVideo = document.getElementById('heroVideo');
if (heroVideo) {
  const videos = [
    { webm: 'Hero1.webm', mp4: 'Hero1.mp4' },
    { webm: 'Hero2.webm', mp4: 'Hero2.mp4' },
  ];
  let current = 0;
  const canPlayWebM = heroVideo.canPlayType('video/webm') !== '';
  heroVideo.addEventListener('ended', () => {
    current = (current + 1) % videos.length;
    heroVideo.src = canPlayWebM ? videos[current].webm : videos[current].mp4;
    heroVideo.play();
  });
}

// ── NAV BACKGROUND ON SCROLL ──────────────────────────────────
const navEl = document.getElementById('nav');
window.addEventListener('scroll', () => {
  if (navEl.classList.contains('nav--hero')) {
    navEl.classList.toggle('nav--scrolled', window.scrollY > 80);
  }
}, { passive: true });

// ── ABOUT SECTION SCROLL REVEAL (SLIDING EFFET) ─────────────────
(function aboutScrollReveal() {
  const wrappers = document.querySelectorAll('.about-scroll-wrapper');
  if (wrappers.length === 0) return;

  // Track the actual scroll targets vs the smoothed (lerped) current positions
  const progressMap = new Map();
  wrappers.forEach(w => progressMap.set(w, { current: 0, target: 0 }));

  let isAnimating = false;

  function update() {
    let needsUpdate = false;
    wrappers.forEach(wrapper => {
      const state = progressMap.get(wrapper);
      const diff = state.target - state.current;
      
      // Interpolate the current position towards the target position for momentum
      if (Math.abs(diff) > 0.001) {
        state.current += diff * 0.2; // Optimized for high snappiness (Option 2)
        needsUpdate = true;
      } else {
        state.current = state.target;
      }
      
      wrapper.style.setProperty('--scroll-progress', state.current);
    });

    if (needsUpdate) {
      requestAnimationFrame(update);
    } else {
      isAnimating = false;
    }
  }

  function onScroll() {
    wrappers.forEach(wrapper => {
      const state = progressMap.get(wrapper);
      const rect = wrapper.getBoundingClientRect();
      const wrapperH = wrapper.offsetHeight;
      const windowH = window.innerHeight;

      // Pre-entry: section scrolling into view from below (rect.top: windowH → 0)
      const preProgress = Math.max(0, Math.min(1, 1 - rect.top / windowH));
      wrapper.style.setProperty('--pre-progress', preProgress);

      const scrolled = -rect.top / (wrapperH - windowH);
      state.target = Math.max(0, Math.min(1, scrolled));
    });

    if (!isAnimating) {
      isAnimating = true;
      requestAnimationFrame(update);
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // initialize targets

  // Force initial smooth settling
  isAnimating = true;
  requestAnimationFrame(update);
})();

// Contact buttons (nav + drawer)
function scrollToContact() {
  const wrapper = document.getElementById('contactScrollWrapper');
  if (!wrapper) return;
  const wrapperTop = wrapper.offsetTop;
  const isMobile = window.innerWidth <= 1280;
  window.scrollTo({ top: wrapperTop + window.innerHeight * (isMobile ? 1.1 : 1.7), behavior: 'smooth' });
}

// Farm visit button
function scrollToFarmVisit() {
  const wrapper = document.getElementById('contactScrollWrapper');
  if (!wrapper) return;
  const wrapperTop = wrapper.offsetTop;
  const isMobile = window.innerWidth <= 1280;
  window.scrollTo({ top: wrapperTop + window.innerHeight * (isMobile ? 0.925 : 1.7), behavior: 'smooth' });
}

document.querySelector('.farm-visit-btn')?.addEventListener('click', function(e) {
  e.preventDefault();
  scrollToFarmVisit();
});

document.querySelector('.btn-nav')?.addEventListener('click', function(e) {
  e.preventDefault();
  scrollToContact();
});
