import os

# ساختار متنی پروژه شما به عنوان ورودی مستقیم
project_text_tree = """
Web3Auto_Platform/
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── .env.example
├── README.md
├── DEPLOYMENT_GUIDE.md
├── MARKETING_STRATEGY.md
├── src/
│   ├── components/
│   │   ├── Hero.tsx
│   │   ├── Features.tsx
│   │   ├── Pricing.tsx
│   │   └── Dashboard.tsx
│   ├── pages/
│   │   └── api/
│   │       └── bots/
│   │           └── create.ts
│   └── styles/
│       └── globals.css
├── contracts/
│   └── AutomationVault.sol
└── prisma/
    └── schema.prisma
"""

def clean_line(line):
    """پاک‌سازی نشانه‌های گرافیکی درخت و استخراج نام فایل یا پوشه"""
    line = line.replace('├──', '').replace('└──', '').replace('│', '').strip()
    return line

def parse_and_create_tree():
    path_stack = []
    
    for line in project_text_tree.strip().split('\n'):
        if not line.strip():
            continue
            
        # محاسبه سطح پوشه بر اساس تعداد فضاهای خالی یا کاراکترهای درختی
        indent_level = (len(line) - len(line.lstrip(' │├└'))) // 4
        name = clean_line(line)
        
        if not name:
            continue
            
        # تنظیم مجدد موقعیت در پشته مسیر بر اساس سطح دندانه (Indentation)
        path_stack = path_stack[:indent_level]
        
        # ساخت مسیر کامل
        current_path = os.path.join(*path_stack, name) if path_stack else name
        
        if name.endswith('/'):
            # اگر پوشه است
            folder_name = name.rstrip('/')
            current_path = os.path.join(*path_stack, folder_name) if path_stack else folder_name
            os.makedirs(current_path, exist_ok=True)
            path_stack.append(folder_name)
            print(f"📁 ساخت پوشه: {current_path}")
        else:
            # اگر فایل است
            # مطمئن شدن از اینکه پوشه والد فایل قبلاً ایجاد شده است
            if path_stack:
                os.makedirs(os.path.join(*path_stack), exist_ok=True)
            
            if not os.path.exists(current_path):
                with open(current_path, 'w', encoding='utf-8') as f:
                    f.write("") # ایجاد فایل خالی
                print(f"📄 ساخت فایل: {current_path}")

if __name__ == "__main__":
    parse_and_create_tree()
    print("\n✅ ساختار پروژه Web3Auto_Platform با موفقیت به صورت خودکار ایجاد شد!")
