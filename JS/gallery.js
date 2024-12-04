//import * as basicLightbox from "../node_modules/basiclightbox/src/scripts/main.js"

const images = [
    {
        preview:
            'https://nauua.org/media/k2/items/cache/24ca0a85fc075dc4babe60ca9c74b464_XL.jpg',
        original:
            'https://nauua.org/media/k2/items/cache/24ca0a85fc075dc4babe60ca9c74b464_XL.jpg',
        description: ' Замок Любарта ',
    },
    {
        preview:
            'https://www.worldhistory.org/img/c/p/1600x900/14901.jpg',
        original:
            'https://www.worldhistory.org/img/c/p/1600x900/14901.jpg',
        description: ' Хотинська фортеця ',
    },
    {
        preview:
            'https://lavra.ua/wp-content/uploads/2024/03/photo_2024-03-16_09-59-10-e1710586736540.jpg',
        original:
            'https://lavra.ua/wp-content/uploads/2024/03/photo_2024-03-16_09-59-10-e1710586736540.jpg',
        description: ' Києво-Печерська лавра ',
    },
    {
        preview:
            'https://18fc33b6ca.cbaul-cdnwnd.com/9c7578031084e7f79abd67a468c3faf9/200000021-8c67f8d5e6/207797_15.jpg',
        original:
            'https://18fc33b6ca.cbaul-cdnwnd.com/9c7578031084e7f79abd67a468c3faf9/200000021-8c67f8d5e6/207797_15.jpg',
        description: ' «Ластівчине гніздо» ',
    },
    {
        preview:
            'https://travels.in.ua/api/Photo/PhotoStreamCPOI/36880',
        original:
            'https://travels.in.ua/api/Photo/PhotoStreamCPOI/36880',
        description: ' Будинок з химерами ',
    },
    {
        preview:
            'https://upload.wikimedia.org/wikipedia/commons/6/67/%D0%9B%D1%8C%D0%B2%D1%96%D0%B2%D1%81%D1%8C%D0%BA%D0%B8%D0%B9_%D0%BD%D0%B0%D1%86%D1%96%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D0%B8%D0%B9_%D0%B0%D0%BA%D0%B0%D0%B4%D0%B5%D0%BC%D1%96%D1%87%D0%BD%D0%B8%D0%B9_%D1%82%D0%B5%D0%B0%D1%82%D1%80_%D0%BE%D0%BF%D0%B5%D1%80%D0%B8_%D1%82%D0%B0_%D0%B1%D0%B0%D0%BB%D0%B5%D1%82%D1%83_%D1%96%D0%BC%D0%B5%D0%BD%D1%96_%D0%A1%D0%BE%D0%BB%D0%BE%D0%BC%D1%96%D1%97_%D0%9A%D1%80%D1%83%D1%88%D0%B5%D0%BB%D1%8C%D0%BD%D0%B8%D1%86%D1%8C%D0%BA%D0%BE%D1%97_13.jpg',
        original:
            'https://upload.wikimedia.org/wikipedia/commons/6/67/%D0%9B%D1%8C%D0%B2%D1%96%D0%B2%D1%81%D1%8C%D0%BA%D0%B8%D0%B9_%D0%BD%D0%B0%D1%86%D1%96%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D0%B8%D0%B9_%D0%B0%D0%BA%D0%B0%D0%B4%D0%B5%D0%BC%D1%96%D1%87%D0%BD%D0%B8%D0%B9_%D1%82%D0%B5%D0%B0%D1%82%D1%80_%D0%BE%D0%BF%D0%B5%D1%80%D0%B8_%D1%82%D0%B0_%D0%B1%D0%B0%D0%BB%D0%B5%D1%82%D1%83_%D1%96%D0%BC%D0%B5%D0%BD%D1%96_%D0%A1%D0%BE%D0%BB%D0%BE%D0%BC%D1%96%D1%97_%D0%9A%D1%80%D1%83%D1%88%D0%B5%D0%BB%D1%8C%D0%BD%D0%B8%D1%86%D1%8C%D0%BA%D0%BE%D1%97_13.jpg',
        description: ' Львівська національна опера ',
    },
    {
        preview:
            'https://www.zoda.gov.ua/images/article/1/000141/141134/picture.jpg',
        original:
            'https://www.zoda.gov.ua/images/article/1/000141/141134/picture.jpg',
        description: ' Національний заповідник «Хортиця» ',
    },
    {
        preview:
            'https://vidviday.ua/blog/wp-content/uploads/2016/01/chernovtsy-tam-ua1.jpg',
        original:
            'https://vidviday.ua/blog/wp-content/uploads/2016/01/chernovtsy-tam-ua1.jpg',
        description: ' Чернівецький національний університет ',
    },
    {
        preview:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/%D0%9F%27%D1%8F%D1%82%D0%BD%D0%B8%D1%86%D1%8C%D0%BA%D0%B0_%D1%86%D0%B5%D1%80%D0%BA%D0%B2%D0%B0_%D0%B2%D0%BD%D0%BE%D1%87%D1%96.jpg/2560px-%D0%9F%27%D1%8F%D1%82%D0%BD%D0%B8%D1%86%D1%8C%D0%BA%D0%B0_%D1%86%D0%B5%D1%80%D0%BA%D0%B2%D0%B0_%D0%B2%D0%BD%D0%BE%D1%87%D1%96.jpg',
        original:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/%D0%9F%27%D1%8F%D1%82%D0%BD%D0%B8%D1%86%D1%8C%D0%BA%D0%B0_%D1%86%D0%B5%D1%80%D0%BA%D0%B2%D0%B0_%D0%B2%D0%BD%D0%BE%D1%87%D1%96.jpg/2560px-%D0%9F%27%D1%8F%D1%82%D0%BD%D0%B8%D1%86%D1%8C%D0%BA%D0%B0_%D1%86%D0%B5%D1%80%D0%BA%D0%B2%D0%B0_%D0%B2%D0%BD%D0%BE%D1%87%D1%96.jpg',
        description: ' П`ятницька церква ',
    }
];

let gallery = document.querySelector('ul.gallery');
images.forEach((image) => {
    imageAdd(image);
});
function imageAdd(imgObj) {
    let imgElem = document.createElement("img");
    imgElem.src = imgObj.preview;
    imgElem.alt = imgObj.description;

    let listItem = document.createElement("li");
    listItem.append(imgElem);
    gallery.append(listItem);
};

gallery.addEventListener('click', function (event) {
    let clickedImage = images.find((img) => img.preview === event.target.src);
    console.log(clickedImage.original);

    const instance = basicLightbox.create(`
        <div class="modalWindow">
                 <img src="${clickedImage.original}" alt="${clickedImage.description}">
                <p>${clickedImage.description}</p>
        </div>
    `, {closable: true});

    instance.show();
});
