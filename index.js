// 1. nav elementini yaratish
const nav = document.createElement('nav');
nav.style.backgroundColor = '#333';
nav.style.overflow = 'hidden';
nav.style.display = 'flex';
nav.style.justifyContent = 'space-around';

// 2. ul elementini yaratish
const ul = document.createElement('ul');
ul.style.listStyleType = 'none';
ul.style.margin = '0';
ul.style.padding = '0';
ul.style.display = 'flex';

// 3. Navbar menyu elementlarini yaratish
const menuItems = ['Home', 'Shop', 'Pages','Blog','About Us','Contact Us','','','','','(219) 555-0114'];

menuItems.forEach(item => {
    const li = document.createElement('li');
    li.style.display = 'inline';
    li.style.marginRight = '10px';

    const a = document.createElement('a');
    a.textContent = item;
    a.href = '#' + item.toLowerCase();
    a.style.display = 'block';
    a.style.color = 'white';
    a.style.textAlign = 'center';
    a.style.padding = '14px 16px';
    a.style.textDecoration = 'none';

    // Qo'shimcha hover effekti
    a.onmouseover = function() {
        a.style.backgroundColor = '#111';
    };
    a.onmouseout = function() {
        a.style.backgroundColor = '';
    };

    li.appendChild(a);
    ul.appendChild(li);
});

// 4. ul elementini nav ichiga qo'shish
nav.appendChild(ul);

// 5. nav elementini sahifadagi container elementiga qo'shish
const container = document.getElementById('container');
container.appendChild(nav);

//1
// 1. card div elementini yaratish
const card = document.createElement('main');
card.style.border = 'none';
card.style.borderRadius = '5px';
card.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
card.style.padding = '20px';
card.style.margin = '10px';
card.style.maxWidth = '600px';
card.style.display = 'inline-block';

// 2. img elementini yaratish va src atributini qo'shish
const img = document.createElement('img');
img.src = 'https://s3-alpha-sig.figma.com/img/0c99/3fa1/e3446b7d29575d3d991b00a479103bab?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZeN33TZWuoynIS-ONwI2DeLYU5dfvMsIo~0mS1WGUpuPQD2Gydsq7sLLqVEhRh8mSZITnM5670ArNu9u~PKGRiTYyJJCD9zE3djwaCiGj9dxYRNdMQYCWvuQbqZob1lJXmClHkI3ZfWfbWa0qcDAZ9dmSxs5Sx~zJIijHcfGV7UTJowgbcS~cI920wN98~E3On~IOc6kIOGVAisxtsQWV2gPShzZ5lTarho-XOAU98VcLVYwzeiqctk3Rt9mNkK6ZtqFXjiZHKDehy5AlRejF8EFSTMzvm9a5CPkxZRiL1r4qhxMdIul31u-kHq9SfGdAg3QFrUgy7hSUaicdptheA__';
img.alt = 'Card Image';
img.style.width = '100%';
img.style.borderRadius = '5px 5px 0 0';

// 3. h3 elementini yaratish va matn qo'shish
const h3 = document.createElement('h3');
h3.textContent = 'Fresh & Healthy Organic Food';
h3.style.color = '#333';

// 4. p elementini yaratish va matn qo'shish
const p = document.createElement('p');
p.textContent = 'Sale up to 30% OFF Free shipping on all your order.';
p.style.color = '#666';

// 5. button elementini yaratish va matn qo'shish
const button = document.createElement('button');
button.textContent = 'Shop now ->';
button.style.backgroundColor = '#fff';
button.style.color = 'green';
button.style.border = '1px solid';
button.style.padding = '10px 20px';
button.style.borderRadius = '20px';
button.style.cursor = 'pointer';
button.onmouseover = function() {
    button.style.backgroundColor = '#fff';
};
button.onmouseout = function() {
    button.style.backgroundColor = '#007BFF';
    button.style.color = 'black';
};

// 6. Elementlarni card ichiga qo'shish
card.appendChild(img);
card.appendChild(h3);
card.appendChild(p);
card.appendChild(button);

// 7. card elementini sahifadagi container elementiga qo'shish
const main = document.getElementById('main');
container.appendChild(card);


//


// 1. Kategoriyalar massivini yaratish
const categories = [
   { name: 'Fresh Fruit', img: 'https://s3-alpha-sig.figma.com/img/5588/5282/b88b0bbd35c42aace99ece1952e250fc?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YHA2en-JOXkT9vJhguhFUH8olZU5t2QtLVxMkcXvhvv6eceYRbKaZy27fvIoXBsc1iFoQX8m~kydg8BUVhSHp1S3i7rGMtGtEyHAjtDR4z7a163dmFegU-WRDQ3lXFXTcuPzHFmXKo-pxNNvcC97b2kOWu19HCIdfNX4xohvsbC0CfzYBzrO~0M11emkSl1BGwsngOupSxOA1lOH6XrpdCSdPo2~BREzWRsbBLmPjYxolYLXHjcZY8w3vKu8tfoG93USVaFS4UCm3zn3f~XmbgwQ4PEMU6Aae8AGZAWoF9~pJCaYNb1Bfl52OTfAryKRnUxB1nm-CH~Cx0c7~CYjdA__' },
   { name: 'Fresh Vegetables', img: 'https://s3-alpha-sig.figma.com/img/9246/5620/da266325ec1257b3509c9dd5e05b8c28?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=na4maH~4Ioo54NtJSfbiI6WwDYXkMEiZ5a9drtg2jZ9QC03HFpYBuJiPE8rA8EtSKZzTDvzhu2zAnO~Vp7DxW5NgWjWjx-5Swxgtkbk-7stcuCzU16qKrwG9AIe-snrQRIy-1KNl3JkSDKiRCzWyYsaKpOfbu0EOJAp1omwPl3~06f8CnIoWaw0PW87B1GdcQjLxpuFzVn7rwgZQUvWkfw~yeh6drEA5agXSlFtW~N-xI9hGVren8BRlSny1KwfyAwRjxPBjl~Q1uCaj-3Zm8EciE46sLYkPvvah9XTE9EBkguXH-vWtOVu~xmtNuHTxONQu~fmqZ4RRt52sk7MUYQ__' },
   { name: 'Meat & Fish', img: 'https://s3-alpha-sig.figma.com/img/ae82/6842/882032bed767b3058568383972a6c692?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LNv2JC-onSCw8JimmFOrdbQ2vYC60ym871CGqjGDM0oEqeSk3WO~KJEhvysHFTe570lzPkIio4mgaw2Un2ceNdg9HXnRkCMQwOz~A-2VzIpkgbyc92SalhKMcuJQNpKfg6doe30oGTDmtrTmUwvHSCWt67W3yIRAPxtnwWygufJfGvHIQigsIfV9IWFB07QFdkx9Jsq-bx1m1KEuXmgox4kaGO-snJgZoMC3ciWHXAlQqvQmuPTjCKM~KZor7jhzs7PXSqf7oPDPjcu0tnzJ5b81WHZsm0fzcCWSnxlrWAn~yITze9oyOgdFZvPp~YfYwPOxvuJJUUYwHtuG0IZDXQ__' },
   { name: 'Snacks', img: 'https://s3-alpha-sig.figma.com/img/cff1/1c4e/50f5c4e80dcae448da3e590d213c2096?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pDgpheZERXknczKMN3JArI4y8DRpekGG-HRVq97~WMYB49O6O0i23VKumIfnK9Cv1oDI9R~-9pqroCveetc0~rwODXf3TlUfsH34cWtb5S-9TxJsmp89~UvFfnJcctFuF8RwcGgMC6M0JkWXRN2GuY5bnMYfeNM7wRq04RCf0WcNLYUhrDclBVbT24Qiiz6saXyoQh2bZ4rOpVAi6bsDdivjcG89qLpWW8Dd65Xoie1xtu3XopOC8fTTEozsOl5dHa807sejWpJrb91LWivLZPOU2NduHg9b8QeeVpyknShiOWPY2cK5IBh4BOEhZHT1ikVF-p0Xxn8QuyN9gbX8Xg__' },
   { name: 'Beverages', img: 'https://s3-alpha-sig.figma.com/img/355d/1d5d/2f9d11c434de66cc7e31af9fba2bf3ac?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T2jArLy8ult9qwEI4uHRQFHqQuztUq876nh6dY~AInOHafS~X0tC85MNDDJFe6ZJ8UTr64szuDAlx5wrGbi~ZegZd4Tvvu~LW9rXlVuRiASZLcGnhl-5agrP~ZxF~1kcOtIwyvRZqDyjcgP5EgXEb6suFyEui1v1salT780xNMQOvolu1awgX9uv2dXN~rP0DHi2np2apiF6AtLmLXsp7W8RnGcr922kZftnZpkeO-1pDXO-AdAX6ucga-6g1EAQW88yDwjxpjOS5qXnS4IkygSVZ2wR1drciaH-OuYJNQB7wK6c4zxqiI-0Y6A~3uDrX2daBw76XdVYQkGdoyyeCw__' },
   { name: 'Beauty & Health', img:'https://s3-alpha-sig.figma.com/img/70fe/a006/3d5cd12b84553996e1fd6e05a52fda92?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FbGaoeNrqD0J8yLcgLFr~miob6QqCf-5qhYic-AsCdHdy7HGf7dLQI33lIXaV2~g8mzu3oD1NwJcr8uR7adzFm1eaMbvBIHLhDzLln3His00kiHmXwSD8e9E5KlQLliRcEDU2Wa-6FIMwDOoePE6DGF2G88trLWBomwwxKwBpD5mPhHnpOTBhMxxeWdnuaB9AJMSBIrqP8-hO3afrDRVolhUJ-XnFdBO0zuomqZIHBrIIz-7R~udrP~OVBYdbyBGhloSUmd1wkOOLb54IggE6Uh1SycqEc~559zkAarDLLcUxziOKnCH2a7HpObRz4s0xONAoXznBZ302hob9M1QYA__'}
];

// 2. container uchun div elementini yaratish
const section = document.getElementById('section');
section.style.display = 'flex';
section.style.flexWrap = 'wrap';
section.style.gap = '10px';

// 3. Kategoriyalarni yaratish va qo'shish
categories.forEach(category => {
   // Kategoriya uchun div elementini yaratish
   const categoryDiv = document.createElement('section');
   categoryDiv.style.padding = '30px';
   categoryDiv.style.margin = '10px';
   categoryDiv.style.border = '1px solid #333';
   categoryDiv.style.borderRadius = '5px';
   categoryDiv.style.backgroundColor = '#f0f0f0';
   categoryDiv.style.color = '#333';
   categoryDiv.style.cursor = 'pointer';
   categoryDiv.style.textAlign = 'center';
   categoryDiv.style.width = '150px';

   // Rasm elementini yaratish
   const img = document.createElement('img');
   img.src = category.img;
   img.alt = category.name;
   img.style.width = '100%';
   img.style.borderRadius = '5px 5px 0 0';

   // Kategoriya nomi uchun elementni yaratish
   const name = document.createElement('section');
   name.textContent = category.name;
   name.style.padding = '10px 0';

   // Rasm va kategoriya nomini kategoriya diviga qo'shish
   categoryDiv.appendChild(img);
   categoryDiv.appendChild(name);

   // Kategoriya div elementini containerga qo'shish
   section.appendChild(categoryDiv);

   // Hover effekti
   categoryDiv.onmouseover = function() {
       categoryDiv.style.backgroundColor = '#ccc';
   };
   categoryDiv.onmouseout = function() {
       categoryDiv.style.backgroundColor = '#f0f0f0';
   };
});



// 1. Kategoriyalar massivini yaratish
const products = [
   { name: 'Fresh Fruit', img: 'https://s3-alpha-sig.figma.com/img/5588/5282/b88b0bbd35c42aace99ece1952e250fc?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YHA2en-JOXkT9vJhguhFUH8olZU5t2QtLVxMkcXvhvv6eceYRbKaZy27fvIoXBsc1iFoQX8m~kydg8BUVhSHp1S3i7rGMtGtEyHAjtDR4z7a163dmFegU-WRDQ3lXFXTcuPzHFmXKo-pxNNvcC97b2kOWu19HCIdfNX4xohvsbC0CfzYBzrO~0M11emkSl1BGwsngOupSxOA1lOH6XrpdCSdPo2~BREzWRsbBLmPjYxolYLXHjcZY8w3vKu8tfoG93USVaFS4UCm3zn3f~XmbgwQ4PEMU6Aae8AGZAWoF9~pJCaYNb1Bfl52OTfAryKRnUxB1nm-CH~Cx0c7~CYjdA__' },
   { name: 'Fresh Vegetables', img: 'https://s3-alpha-sig.figma.com/img/9246/5620/da266325ec1257b3509c9dd5e05b8c28?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=na4maH~4Ioo54NtJSfbiI6WwDYXkMEiZ5a9drtg2jZ9QC03HFpYBuJiPE8rA8EtSKZzTDvzhu2zAnO~Vp7DxW5NgWjWjx-5Swxgtkbk-7stcuCzU16qKrwG9AIe-snrQRIy-1KNl3JkSDKiRCzWyYsaKpOfbu0EOJAp1omwPl3~06f8CnIoWaw0PW87B1GdcQjLxpuFzVn7rwgZQUvWkfw~yeh6drEA5agXSlFtW~N-xI9hGVren8BRlSny1KwfyAwRjxPBjl~Q1uCaj-3Zm8EciE46sLYkPvvah9XTE9EBkguXH-vWtOVu~xmtNuHTxONQu~fmqZ4RRt52sk7MUYQ__' },
   { name: 'Meat & Fish', img: 'https://s3-alpha-sig.figma.com/img/ae82/6842/882032bed767b3058568383972a6c692?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LNv2JC-onSCw8JimmFOrdbQ2vYC60ym871CGqjGDM0oEqeSk3WO~KJEhvysHFTe570lzPkIio4mgaw2Un2ceNdg9HXnRkCMQwOz~A-2VzIpkgbyc92SalhKMcuJQNpKfg6doe30oGTDmtrTmUwvHSCWt67W3yIRAPxtnwWygufJfGvHIQigsIfV9IWFB07QFdkx9Jsq-bx1m1KEuXmgox4kaGO-snJgZoMC3ciWHXAlQqvQmuPTjCKM~KZor7jhzs7PXSqf7oPDPjcu0tnzJ5b81WHZsm0fzcCWSnxlrWAn~yITze9oyOgdFZvPp~YfYwPOxvuJJUUYwHtuG0IZDXQ__' },
   { name: 'Snacks', img: 'https://s3-alpha-sig.figma.com/img/cff1/1c4e/50f5c4e80dcae448da3e590d213c2096?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pDgpheZERXknczKMN3JArI4y8DRpekGG-HRVq97~WMYB49O6O0i23VKumIfnK9Cv1oDI9R~-9pqroCveetc0~rwODXf3TlUfsH34cWtb5S-9TxJsmp89~UvFfnJcctFuF8RwcGgMC6M0JkWXRN2GuY5bnMYfeNM7wRq04RCf0WcNLYUhrDclBVbT24Qiiz6saXyoQh2bZ4rOpVAi6bsDdivjcG89qLpWW8Dd65Xoie1xtu3XopOC8fTTEozsOl5dHa807sejWpJrb91LWivLZPOU2NduHg9b8QeeVpyknShiOWPY2cK5IBh4BOEhZHT1ikVF-p0Xxn8QuyN9gbX8Xg__' },
   { name: 'Beverages', img: 'https://s3-alpha-sig.figma.com/img/355d/1d5d/2f9d11c434de66cc7e31af9fba2bf3ac?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T2jArLy8ult9qwEI4uHRQFHqQuztUq876nh6dY~AInOHafS~X0tC85MNDDJFe6ZJ8UTr64szuDAlx5wrGbi~ZegZd4Tvvu~LW9rXlVuRiASZLcGnhl-5agrP~ZxF~1kcOtIwyvRZqDyjcgP5EgXEb6suFyEui1v1salT780xNMQOvolu1awgX9uv2dXN~rP0DHi2np2apiF6AtLmLXsp7W8RnGcr922kZftnZpkeO-1pDXO-AdAX6ucga-6g1EAQW88yDwjxpjOS5qXnS4IkygSVZ2wR1drciaH-OuYJNQB7wK6c4zxqiI-0Y6A~3uDrX2daBw76XdVYQkGdoyyeCw__' },
   { name: 'Beauty & Health', img:'https://s3-alpha-sig.figma.com/img/70fe/a006/3d5cd12b84553996e1fd6e05a52fda92?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FbGaoeNrqD0J8yLcgLFr~miob6QqCf-5qhYic-AsCdHdy7HGf7dLQI33lIXaV2~g8mzu3oD1NwJcr8uR7adzFm1eaMbvBIHLhDzLln3His00kiHmXwSD8e9E5KlQLliRcEDU2Wa-6FIMwDOoePE6DGF2G88trLWBomwwxKwBpD5mPhHnpOTBhMxxeWdnuaB9AJMSBIrqP8-hO3afrDRVolhUJ-XnFdBO0zuomqZIHBrIIz-7R~udrP~OVBYdbyBGhloSUmd1wkOOLb54IggE6Uh1SycqEc~559zkAarDLLcUxziOKnCH2a7HpObRz4s0xONAoXznBZ302hob9M1QYA__'}
];

// 2. container uchun div elementini yaratish
const article = document.getElementById('article');
article.style.display = 'flex';
article.style.flexWrap = 'wrap';
article.style.gap = '10px';

// 3. Kategoriyalarni yaratish va qo'shish
products.forEach(category => {
   // Kategoriya uchun div elementini yaratish
   const productDiv = document.createElement('article');
   productDiv.style.padding = '30px';
   productDiv.style.margin = '10px';
   productDiv.style.border = '1px solid #333';
   productDiv.style.borderRadius = '5px';
   productDiv.style.backgroundColor = '#f0f0f0';
   productDiv.style.color = '#333';
   productDiv.style.cursor = 'pointer';
   productDiv.style.textAlign = 'center';
   productDiv.style.width = '150px';

   // Rasm elementini yaratish
   const img = document.createElement('img');
   img.src = category.img;
   img.alt = category.name;
   img.style.width = '100%';
   img.style.borderRadius = '5px 5px 0 0';

   // Kategoriya nomi uchun elementni yaratish
   const name = document.createElement('section');
   name.textContent = category.name;
   name.style.padding = '10px 0';

   // Rasm va kategoriya nomini kategoriya diviga qo'shish
   productDiv.appendChild(img);
   productDiv.appendChild(name);

   // Kategoriya div elementini containerga qo'shish
   article.appendChild(productDiv);

   // Hover effekti
   productDiv.onmouseover = function() {
       productDiv.style.backgroundColor = '#ccc';
   };
   productDiv.onmouseout = function() {
       productDiv.style.backgroundColor = '#f0f0f0';
   };
});