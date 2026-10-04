import os
import re

def inject_codes_from_file(source_txt="project_code.txt"):
    if not os.path.exists(source_txt):
        print(f"❌ خطا: فایل {source_txt} یافت نشد! ابتدا این فایل را بسازید.")
        return

    current_file_path = None
    current_file_lines = []

    # الگوی شناسایی نام فایل (مثال: // FILE: Web3Auto_Platform/src/Hero.tsx)
    file_marker_pattern = re.compile(r'^\s*//\s*FILE:\s*(.+)$')

    with open(source_txt, 'r', encoding='utf-8') as f:
        for line in f:
            match = file_marker_pattern.match(line)
            if match:
                # ذخیره فایل قبلی قبل از رفتن به فایل جدید
                if current_file_path and current_file_lines:
                    write_to_file(current_file_path, current_file_lines)
                
                # شروع فایل جدید
                current_file_path = match.group(1).strip()
                current_file_lines = []
                print(f"⏳ در حال آماده‌سازی: {current_file_path}")
            else:
                if current_file_path is not None:
                    current_file_lines.append(line)

        # ذخیره آخرین فایل باقی‌مانده در انتهای حلقه
        if current_file_path and current_file_lines:
            write_to_file(current_file_path, current_file_lines)

def write_to_file(file_path, lines):
    try:
        # ساخت اتوماتیک پوشه‌های والد در صورت عدم وجود
        parent_dir = os.path.dirname(file_path)
        if parent_dir:
            os.makedirs(parent_dir, exist_ok=True)
            
        with open(file_path, 'w', encoding='utf-8') as f:
            f.writelines(lines)
        print(f"✅ فایل با موفقیت نوشته شد: {file_path}")
    except Exception as e:
        print(f"❌ خطا در نوشتن فایل {file_path}: {e}")

if __name__ == "__main__":
    inject_codes_from_file()
    print("\n🎉 فرآیند اتوماسیون کامل شد. تمام کدها در مسیرهای خود جایگذاری شدند!")
