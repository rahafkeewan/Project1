let MyFavBooks = ["Great Expectations","Beloved","The Great Gatsby","Pride and Prejudice","Lolita","The Lord of the Rings"]

// #1
// هذه الطريقة تقوم بإرجاع طول المصفوصة ك رقم صحيح
let Method1 = MyFavBooks.length;
console.log(Method1); // Output: 6


// #2
// هذه الطريقة تقوم بإرجاع العنصر المتوافق مع محتوى رقم الموقع او الفهرس المذكور بالأقواس داخل المصفوصة
let Method2 = MyFavBooks.at(4);
console.log(Method2); // Output: Lolita


// #3
// هذه الطريقة تقوم بدمج واضافة عنصر جديد على شكل نص الى المصفوصة الاصلية
let Method3 = MyFavBooks.concat("1984");
console.log(Method3); // Output: ['Great Expectations', 'Beloved', 'The Great Gatsby', 'Pride and Prejudice', 'Lolita', 'The Lord of the Rings', '1984']


// #4
// هذه الطريقة تقوم بنسخ محتوى الموقع الثاني جميع العناصر واستبدالها بالمحتوى في الموقع الثاني
let Method4 = MyFavBooks.copyWithin(1,4);
console.log(Method4); // Output: ['Great Expectations', 'Lolita', 'The Great Gatsby', 'Pride and Prejudice', 'Lolita', 'The Lord of the Rings', '1984']



// #5
// هذه الطريقة لها عدة استخدامات كإضافة وحذف عناصر الى ومن المصفوفة 
let Method5A = MyFavBooks.splice(0,2); // هنا قمنا بإسنخدامها للحذف بتحديد كل من الموقع الابتدائي للحذف و عدد العناصر التي سوف يتم حذفها وارجاع العناصر المحذوفة من المصفوصة
console.log(Method5A); // Output: ['Great Expectations', 'Lolita']

let Method5B = MyFavBooks.splice(1,3,"Funny Story","James: A Novel","Dune"); // في هذه الحالة يتم اضافة عناصر جديدة للمصفوفة وازالة 3 عناصر حسب الرقم الذي تم تحديده ومن ثم طباعة العناصر التي تم حذفها
console.log(Method5B); // Output: ['Pride and Prejudice', 'Lolita', 'The Lord of the Rings']