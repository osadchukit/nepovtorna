!function(){console.log(galleryItems);var e=galleryItems.reduce((function(e,a){var l=a.original,o=a.preview,r=a.description;return e+'<a class="gallery__item" href="'.concat(l,'">\n  <img class="gallery__image" src="').concat(o,'" alt="').concat(r,'"/>\n</a>')}),"");document.querySelector(".gallery").insertAdjacentHTML("beforeend",e);new SimpleLightbox(".gallery__item",{captionsData:"alt",captionDelay:250,scrollZoom:!0,scrollZoomFactor:.5})}();
//# sourceMappingURL=01-gallery.03a54466.js.map