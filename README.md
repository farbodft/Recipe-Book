# آزمایش اول | گیت
## اعضای تیم
- مهسا حاجی رحیمی 401105837
- فربد فتاحی 402106231
## مشخصات Branch ها و Commit ها
در این قسمت به معرفی brach ها و commit ها می‌پردازیم.
### توضیحات Branch  ها
* برنچ **`main`**: برنچ اصلی پروژه که همیشه حاوی کد پایدار، تست‌شده و آماده برای محیط عملیاتی (Production) است.
* برنچ **`dev`**: برنچ توسعه اصلی که تمام ویژگی‌های جدید ابتدا در آن merge شده و برای deployment تست می‌شوند و در نهایت در main مرج می‌شوند.
* برنچ **`feature`**: برنچی  که برای توسعه یک ویژگی (Feature) یا قابلیت جدید در پروژه ایجاد شده است.
* برنچ **`hotfix`**: برنچی اضطراری که برای رفع سریع باگ‌های موجود در کد ها ایجاد می‌شود.
* برنچ **`architecture`**: برنچی اختصاصی که برای پیاده‌سازی، اصلاح یا بهبود ساختار و معماری پایه‌ای پروژه مورد استفاده قرار گرفته است.
* برنچ **`gh-pages`**: برنچی ویژه که به صورت خودکار برای میزبانی و نمایش خروجی فرانت‌اند یا مستندات پروژه روی سرویس GitHub Pages استفاده می‌شود.
* برنچ **`report`**: برنچی ویژه برای ثبت و تکمیل گزارش پروژه.

### توضیحات Commit ها
در این بخش، لیست تمامی کامیت‌های ثبت‌شده در پروژه به همراه توضیحات عملکرد هر کدام و لینک دسترسی به آن‌ها آورده شده است:

* **Merge pull request #13 from farbodft/dev** (farbodft)
  * توضیح: ادغام تغییرات شاخه توسعه به شاخه اصلی.
  * لینک کامیت: [مشاهده](https://github.com/farbodft/Recipe-Book/commit/d199c0f2a2e0adb767016c2fd715b86a786bd689)
* **Fix image paths for GitHub Pages deployment using BASE_URL** (mahsahajirahimi)
  * توضیح: اصلاح مسیر آدرس‌دهی تصاویر با استفاده از BASE_URL برای نمایش صحیح در گیت‌هاب پیجز.
  * لینک کامیت: [مشاهده](https://github.com/farbodft/Recipe-Book/commit/e71cd7f83709e413d4de8474075e3545361c486a)
* **Fix GitHub Pages deploy permissions and upgrade action version** (mahsahajirahimi)
  * توضیح: برطرف کردن مشکل دسترسی‌های بخش انتشار و ارتقای نسخه اکشن مورد استفاده.
  * لینک کامیت: [مشاهده](https://github.com/farbodft/Recipe-Book/commit/37ca2e5592a8632525362e05200a5a07944ade9e)
* **Temporarily add dev branch to workflow trigger for testing** (mahsahajirahimi)
  * توضیح: افزودن موقت شاخه dev به تریگرهای ورک‌فلو جهت تست فرایند استقرار.
  * لینک کامیت: [مشاهده](https://github.com/farbodft/Recipe-Book/commit/13f18081bc445434b70d69baeb9b130068f79b99)
* **Merge pull request #12 from farbodft/dev** (farbodft)
  * توضیح: تایید و ادغام پول ریکوئست شماره 12 از شاخه توسعه.
  * لینک کامیت: [مشاهده](https://github.com/farbodft/Recipe-Book/commit/af6e68552d70d02d88cae8a19000ddebcd0f093e)
* **Merge pull request #11 from farbodft/feature** (mahsahajirahimi)
  * توضیح: ادغام قابلیت‌های جدید توسعه‌داده شده از شاخه ویژگی به شاخه توسعه.
  * لینک کامیت: [مشاهده](https://github.com/farbodft/Recipe-Book/commit/2a88553c8888f38d159a9ca85f271315e88298fc)
* **Merge branch 'dev' into feature** (mahsahajirahimi)
  * توضیح: همگام‌سازی شاخه ویژگی با آخرین تغییرات شاخه توسعه.
  * لینک کامیت: [مشاهده](https://github.com/farbodft/Recipe-Book/commit/076aa21549332e95032e45eafcc9e331ccd5bb0c)
* **fix routing** (mahsahajirahimi)
  * توضیح: رفع باگ‌ها و اصلاح سیستم مسیردهی برنامه.
  * لینک کامیت: [مشاهده](https://github.com/farbodft/Recipe-Book/commit/c0071d3f5fa07ec6f4b9dfadab8105ebc8c1db10)
* **FIX typo in file format** (farbodft)
  * توضیح: برطرف کردن غلط املایی موجود در فرمت یکی از فایل‌ها.
  * لینک کامیت: [مشاهده](https://github.com/farbodft/Recipe-Book/commit/38213adcaa7fc27c7a16d17dc635c5996cf3e555)
* **Add github initial deployment yaml file** (farbodft)
  * توضیح: افزودن فایل پیکربندی اولیه برای راه‌اندازی فرآیند دپلویمنت.
  * لینک کامیت: [مشاهده](https://github.com/farbodft/Recipe-Book/commit/1dcac14826c002e69a926b249701390ba210f68a)
* **Add GitHub Actions workflow for automatic deploy to Pages** (mahsahajirahimi)
  * توضیح: پیاده‌سازی جاب و ورک‌فلوی گیت‌هاب اکشنز جهت انتشار خودکار پروژه روی گیت‌هاب پیجز.
  * لینک کامیت: [مشاهده](https://github.com/farbodft/Recipe-Book/commit/77edf8c5773fa02a5ca635a2bfbdafd1cefb6877)
* **Merge pull request #10 from farbodft/feature** (mahsahajirahimi)
  * توضیح: بررسی و تایید پی‌آر شماره 10 مربوط به قابلیت‌های جدید شاخه ویژگی.
  * لینک کامیت: [مشاهده](https://github.com/farbodft/Recipe-Book/commit/81720f15cfb900e434a57c6e738e607fbd58ad14)
* **Merge branch 'hotfix' into feature** (farbodft)
  * توضیح: ادغام اصلاحات اضطراری انجام شده به درون شاخه در حال توسعه.
  * لینک کامیت: [مشاهده](https://github.com/farbodft/Recipe-Book/commit/fd471569dadece0f755e0a431379fdf32856b69c)
* **Add Navbar to app.jsx** (farbodft)
  * توضیح: اضافه کردن کامپوننت نوار ناوبری به فایل اصلی اپلیکیشن.
  * لینک کامیت: [مشاهده](https://github.com/farbodft/Recipe-Book/commit/a85cc771dc61a42c99b2f35b64c6827aa22c205d)
* **Update App with main wrapper and 404 route** (mahsahajirahimi)
  * توضیح: به‌روزرسانی روت‌ها با افزودن کانتینر اصلی برنامه و روت اختصاصی برای صفحه‌ی خطای 404.
  * لینک کامیت: [مشاهده](https://github.com/farbodft/Recipe-Book/commit/33cdbf8a8fa75259bdda9718e9d0d5209aa550cc)
* **Add simple navbar component** (farbodft)
  * توضیح: ساخت و طراحی کامپوننت ساده‌ی نوار ناوبری.
  * لینک کامیت: [مشاهده](https://github.com/farbodft/Recipe-Book/commit/e3c32b81549ad962ce23510fb6afc298414e2954)
* **Merge branch 'feature' of github.com:farbodft/Recipe-Book into feature** (mahsahajirahimi)
  * توضیح: حل تعارضات و همگام‌سازی کدهای محلی شاخه ویژگی با مخزن ریموت.
  * لینک کامیت: [مشاهده](https://github.com/farbodft/Recipe-Book/commit/d8dc86b078e977668ec22957a0d87a095764d73e)
* **Persist user recipes in localStorage** (mahsahajirahimi)
  * توضیح: ذخیره‌سازی ماندگار دستورهای غذایی کاربر در مرورگر با استفاده از لوکال استوریج.
  * لینک کامیت: [مشاهده](https://github.com/farbodft/Recipe-Book/commit/367b8ca1024ab90f1e7fb9813ccd9dbc93e93787)
* **Debug adding recipes to favorites** (farbodft)
  * توضیح: اشکال‌زدایی و برطرف کردن اختلال در سیستم افزودن دستورهای غذایی به بخش علاقه‌مندی‌ها.
  * لینک کامیت: [مشاهده](https://github.com/farbodft/Recipe-Book/commit/11b8068c6f2273b5f5b63d1a0b2ab2714b22d38a)
* **Merge branch 'feature' of https://github.com/farbodft/Recipe-Book into feature** (farbodft)
  * توضیح: سینک کردن و ادغام کامیت‌های دریافتی جدید شاخه ویژگی از ریموت.
  * لینک کامیت: [مشاهده](https://github.com/farbodft/Recipe-Book/commit/6cd3b55acb4753aaffc6d22a63f08806e27719d1)
* **Integrate add-recipe card and modal into HomePage** (mahsahajirahimi)
  * توضیح: یکپارچه‌سازی و قرار دادن کارتِ افزودن دستور غذایی جدید و مودال مربوطه در صفحه اصلی.
  * لینک کامیت: [مشاهده](https://github.com/farbodft/Recipe-Book/commit/61db35642d37ceeb4420a2f32d994512fac6bb39)
* **Merge branch 'feature' of github.com:farbodft/Recipe-Book into feature** (mahsahajirahimi)
  * توضیح: دریافت تغییرات موازی روی شاخه ویژگی از گیت‌هاب.
  * لینک کامیت: [مشاهده](https://github.com/farbodft/Recipe-Book/commit/f66559c0a614a9c0be3e29046b234e326e31c4b7)
* **Add FavoritesPage and route in App** (farbodft)
  * توضیح: ساخت صفحه‌ی اختصاصی برای دستورهای غذایی محبوب و ایجاد روت اختصاصی آن در برنامه.
  * لینک کامیت: [مشاهده](https://github.com/farbodft/Recipe-Book/commit/e5648511bb157010d21f118aec4c2d8ed3f5f16b)
* **Add recipe creation hook and modal components and default placeholder image** (mahsahajirahimi)
  * توضیح: ساخت هوک اختصاصی برای ایجاد دستور غذایی، ایجاد کامپوننت‌های مودال و افزودن تصویر پیش‌فرض.
  * لینک کامیت: [مشاهده](https://github.com/farbodft/Recipe-Book/commit/53266eaec402a29063ac08f85c1f89fa5ac5f9f5)
* **Add favorite button** (farbodft)
  * توضیح: طراحی و افزودن دکمه علاقه‌مندی به کارت‌ها.
  * لینک کامیت: [مشاهده](https://github.com/farbodft/Recipe-Book/commit/56ae3fd293c4e70383a7b9be12539f970702471b)
* **Merge pull request #7 from farbodft/feature** (farbodft)
  * توضیح: تایید پی‌آر شماره 7 و ورود ویژگی‌های جدید به برنچ مقصد.
  * لینک کامیت: [مشاهده](https://github.com/farbodft/Recipe-Book/commit/bbcd3d12a69fe6f703d36c5d6d2d3ceccf8ccce3)
* **Merge pull request #8 from farbodft/architecture** (farbodft)
  * توضیح: ادغام تغییرات ساختاری برنچ معماری با برنچ اصلی.
  * لینک کامیت: [مشاهده](https://github.com/farbodft/Recipe-Book/commit/8869e342c10967d089e47cc07bf08ce89b99233b)
* **Add Tailwind CSS configuration and update dependencies** (mahsahajirahimi)
  * توضیح: کانفیگ و نصب فریم‌ورک Tailwind CSS جهت استایل‌دهی پروژه و به‌روزرسانی پکیج‌ها.
  * لینک کامیت: [مشاهده](https://github.com/farbodft/Recipe-Book/commit/b11aeb7e21eecd9a1df8a43ce80f53613190a6cd)
* **Add HomePage and App with routing and recipe grid** (mahsahajirahimi)
  * توضیح: ایجاد قالب صفحه‌ اصلی، راه‌اندازی گرید نمایش دستورهای غذایی و پایه‌ریزی روتینگ.
  * لینک کامیت: [مشاهده](https://github.com/farbodft/Recipe-Book/commit/c7f24a121160afbe82e802f78c61aed27df6c590)
* **Add RecipeModal component** (mahsahajirahimi)
  * توضیح: طراحی کامپوننت مودال برای نمایش جزئیات کامل هر دستور غذایی.
  * لینک کامیت: [مشاهده](https://github.com/farbodft/Recipe-Book/commit/d77715f084b896df2fc7592e72532176974a8ffe)
* **Add RecipeCard component with glassmorphism design** (mahsahajirahimi)
  * توضیح: پیاده‌سازی کامپوننت کارت معرفی غذا با استایل شیشه‌ای.
  * لینک کامیت: [مشاهده](https://github.com/farbodft/Recipe-Book/commit/d449f3d853178a6cf0ceeecad3469f8697be983d)
* **Add recipe dataset and images** (mahsahajirahimi)
  * توضیح: افزودن ساختار داده‌ای اولیه شامل اطلاعات غذاها و پوشه تصاویر مرتبط.
  * لینک کامیت: [مشاهده](https://github.com/farbodft/Recipe-Book/commit/0fb9c9f3635e2d45be9af4c9d7d97727dad84ac2)
* **Merge pull request #6 from farbodft/architecture** (mahsahajirahimi)
  * توضیح: تایید اولین پول‌ریکوئست مربوط به ساختار کلی پروژه.
  * لینک کامیت: [مشاهده](https://github.com/farbodft/Recipe-Book/commit/5c57f0a7c24a354335d013ba9ea82bffb92ad0a8)
* **Add Initial Architecture** (farbodft)
  * توضیح: ایجاد ساختار پوشه‌ها، معماری پایه‌ای و تنظیمات اولیه پروژه فرانت‌اند.
  * لینک کامیت: [مشاهده](https://github.com/farbodft/Recipe-Book/commit/27b12566660afc75c52e5e1ef5d728c916bc33a8)
* **Initial commit** (farbodft)
  * توضیح: اولین کامیت پروژه شامل فایل‌های اولیه ساخت پروژه مانند فایل gitignore.
  * لینک کامیت: [مشاهده](https://github.com/farbodft/Recipe-Book/commit/11a0987ee27e92a8d5a70afd38c5ee0711de2047)

## پاسخ به سوالات آزمایش

در این بخش به سوالات مطرح شده در آزمایش پاسخ داده شده است.

---

### ۱. پوشه‌ی `.git` چیست؟ چه اطلاعاتی در آن ذخیره می‌شود؟ با چه دستوری ساخته می‌شود؟
پوشه `.git` قسمت اصلی یک مخزن (Repository) در گیت است. این پوشه به صورت مخفی در root پروژه قرار دارد و تمام تاریخچه تغییرات، تنظیمات و متا‌دیتاهای مربوط به مدیریت نسخه پروژه را در خود نگه می‌دارد.
* **چه اطلاعاتی در آن ذخیره می‌شود؟** تاریخچه کامل کامیت‌ها (Commits)، اطلاعات مربوط به برنچ‌ها (Branches)، تگ‌ها (Tags)، پوینتر `HEAD` (که نشان می‌دهد الان روی کدام برنچ یا کامیت هستیم)، تنظیمات محلی مخزن (Config) و فایل‌های موقت مربوط به Stage.
* **با چه دستوری ساخته می‌شود؟** این پوشه با اجرای دستور زیر در مسیر پروژه ساخته (مقداردهی اولیه) می‌شود:
    ```bash
    git init
    ```

---

### ۲. منظور از atomic بودن در atomic commit و atomic pull-request چیست؟
مفهوم **Atomic** به معنای تفکیک‌ناپذیر بودن است. به بیان دیگر یعنی یک کار یا به طور کامل انجام می‌شود یا اصلاً انجام نمی‌شود و نمی‌توان آن را به بخش‌های کوچک‌ترِ مستقل تقسیم کرد.
*  مفهوم **Atomic Commit:** یعنی هر کامیت باید فقط و فقط شامل **یک تغییر مشخص، منطقی و مستقل** باشد (مثلاً رفع یک باگ خاص یا اضافه کردن یک ویژگی مشخص). اگر کامیت شما همزمان یک باگ را رفع کند و ظاهر سایت را هم تغییر دهد، اتمی نیست. کامیت‌های اتمی خوانایی تاریخچه را بالا برده و در صورت بروز مشکل، بازگردانی (Revert) آن‌ها را بسیار آسان می‌کنند.
* مفهوم **Atomic Pull-Request:** یعنی یک PR باید دقیقاً یک هدف یا ویژگی مشخص را پیاده‌سازی کند.  Review کردن یک PR کوچک و اتمی برای اعضای تیم بسیار سریع‌تر و کم‌خطاتر از یک PR غول‌آسا با چندین تغییر بی‌ربط است.

---

### ۳. تفاوت دستورهای fetch ،pull ،merge ،rebase و cherry-pick
این دستورها همگی برای مدیریت و ادغام تغییرات در گیت استفاده می‌شوند اما رفتارهای متفاوتی دارند:
* دستور **`git fetch`:** آخرین تغییرات را از مخزن آنلاین (Remote) دریافت می‌کند و در سیستم شما قرار می‌دهد، اما آن‌ها را با کد فعلی شما ادغام (Merge) **نمی‌کند**. فقط لیست تغییرات را به‌روز می‌کند.
* دستور **`git pull`:** ترکیبی از دو دستور `fetch` و `merge` است. یعنی ابتدا تغییرات را از ریموت می‌گیرد و بلافاصله آن‌ها را با برنچ فعلی شما ادغام می‌کند.
* دستور **`git merge`:** دو برنچ را با هم ادغام می‌کند. این دستور یک کامیت جدید به نام **Merge Commit** ایجاد می‌کند که تاریخچه هر دو برنچ را حفظ می‌کند. تاریخچه در این حالت به صورت شاخه‌شاخه (غیرخطی) دیده می‌شود.
* دستور **`git rebase`:** بیس یا پایه برنچ فعلی شما را به آخرین کامیت برنچ دیگر منتقل می‌کند. این کار باعث می‌شود تمام کامیت‌های شما بازنویسی شده و پشت سر کامیت‌های برنچ جدید قرار بگیرند. نتیجه این دستور یک تاریخچه کاملاً **خطی و تمیز** است.
* دستور **`git cherry-pick`:** به شما اجازه می‌دهد **فقط یک کامیت خاص** را از یک برنچ دیگر انتخاب کنید و تغییرات همان یک کامیت را روی برنچ فعلی خود اعمال کنید (بدون نیاز به ادغام کل برنچ).

---

### ۴. تفاوت دستورهای reset ،revert ،restore ،switch و checkout
این دستورها برای جابجایی در تاریخچه یا مدیریت فایل‌ها استفاده می‌شوند:
* دستور **`git reset`:** برای به عقب بردن وضعیت برنچ به یک کامیت خاص استفاده می‌شود. این دستور تاریخچه را دستکاری می‌کند و بسته به flag ها (`--soft`, `--mixed`, `--hard`) می‌تواند تغییرات کامیت‌های بعدی را نگه دارد یا کاملاً پاک کند.
* دستور **`git revert`:** یک کامیت جدید ایجاد می‌کند که دقیقاً عکس تغییرات یک کامیت قدیمی را اعمال می‌کند. این دستور تاریخچه گذشته را پاک نمی‌کند، بنابراین برای مخازن آنلاین و اشتراکی بسیار امن‌تر از `reset` است.
* دستور **`git restore`:** برای بازگرداندن فایل‌های موجود در Working Directory یا Staging Area به آخرین وضعیت ذخیره شده (بدون دستکاری کامیت‌ها) استفاده می‌شود.
* دستور **`git switch`:** یک دستور اختصاصی است که صرفاً برای جابجا شدن بین برنچ‌هااستفاده می‌شود تا ابهامات دستور قدیمی checkout برطرف شود.
* دستور **`git checkout`:** یک دستور چندکاره و قدیمی است. هم برای switch کردن بین برنچ‌ها، هم برای رفتن به یک کامیت خاص و هم برای بازگرداندن فایل‌ها به وضعیت گذشته استفاده می‌شود.

---

### ۵. منظور از stage یا همان index چیست؟ دستور stash چه کاری انجام می‌دهد؟
* منظور **Stage (Index):** یک فضای آماده‌سازی یا پیش‌نویس بین پوشه کاری شما (Working Directory) و تاریخچه گیت (Repository) است. وقتی فایلی را تغییر می‌دهید و دستور `git add` را می‌زنید، فایل به محیط Stage می‌رود. گیت فقط تغییراتی را کامیت می‌کند که ابتدا به این محیط اضافه شده باشند.
* دستور **`git stash`:** زمانی کاربرد دارد که شما تغییراتی در کد داده‌اید اما کارتان هنوز تمام نشده و می‌خواهید موقتاً برنچ خود را عوض کنید یا یک کار فوری انجام دهید. دستور `stash` تغییرات کامیت‌نشده شما را در یک فضای امن و موقت ذخیره (پنهان) کرده و پوشه کاری شما را تمیز می‌کند. بعداً می‌توانید با دستور `git stash pop` آن تغییرات را دوباره برگردانید.

---

### ۶. مفهوم snapshot به چه معناست؟ ارتباط آن با commit چیست؟
* **مفهوم Snapshot:** یعنی گیت در هر لحظه، نمایی کلی از تمام فایل‌های پروژه و محتوای آن‌ها را ثبت می‌کند. اگر فایلی تغییر نکرده باشد، گیت دوباره آن را ذخیره نمی‌کند، بلکه فقط یک لینک به فایل قبلی ایجاد می‌کند.
* **ارتباط با Commit:** هر کامیت در گیت، در واقع یک **Snapshot** از کل پروژه در همان لحظه زمانی مشخص است که با متادیتاهایی مثل نام نویسنده، پیام کامیت، زمان ثبت و هَش (Hash) اختصاصی باندل و ذخیره شده است.

---

### ۷. تفاوت‌های local repository و remote repository
گیت یک سیستم کنترل نسخه **توزیع‌شده (Distributed)** است، به این معنی که مخزن در چندین مکان وجود دارد:
* مخزن محلی **Local Repository:** مخزنی است که روی کامپیوتر شخص شما قرار دارد (همان پوشه `.git`). شما بدون نیاز به اینترنت می‌توانید در آن کامیت کنید، برنچ بسازید و تاریخچه را بررسی کنید. تغییرات این مخزن تا زمانی که Push نشوند، برای دیگران قابل مشاهده نیستند.
* مخزن آنلاین**Remote Repository:** مخزنی است که روی یک سرور میزبانی می‌شود (مثل GitHub یا GitLab). این مخزن به عنوان منبع اصلی و مشترک بین اعضای تیم عمل می‌کند. اعضای تیم تغییرات محلی خود را به این مخزن `push` می‌کنند و تغییرات دیگران را از آن `pull` یا `fetch` می‌کنند.