
##  Module view

* * *

![accordion](/www/shop/atoms/templates/_modules/accordion/screen.jpg)
<br><br>
##  Description

* * *

Może występować w dowolnym miejscy w aplikacji oraz dowolną iloś razy na stronie.   
Ponieżej przykład wywołania 2 akordeonów na stronie. Wywołanie powinno być umieszczone w app.js.    
Jeśli moduł jest zdefiniowany, przypisujemy do zmiennych jego instancje, parametryzując moduł przy wywołaniu.
W module występuje funkcja callback.

```javascript

if (typeof enp.APP.modules.accordion !== 'undefined') {
    var acc1,
        acc2;

    acc1 = new enp.APP.modules.accordion();
    acc2 = new enp.APP.modules.accordion();

    acc1.init({
    	'container': '#js-m-accordion',
    	'parentElement': '.js-m-accordion_item',
    	'element': '.js-m-accordion_title',
    	'active': 'is-active',
    	'callback': acc1Call
    });

    acc2.init({
    	'container': '#js-offerTabs_acc',
    	'parentElement': '.js-offerTabs_item',
    	'element': '.js-offerTabs_title',
    	'active': 'is-active',
    	'tabsTrigger': true
    });
    var acc1Call = function() {
        console.log('callback function');
    }
    var acc2Call= function() {
        console.log('callback function 2');
    };
}
```

##Loader options

* * *

* _accordionData_ - dane dla modułu
* _accordionId_ - id modułu
* _accordionItem_ - class dla itema w module
* _accordionTitle_ - class dla nagłowka w itemie
* _icon_ - opcjonalna ikona w nagłowku, domyślnie brak
* _tabs_ - domyślnie false, ustawiamy na true w szablonie oraz w wywołaniu ```'tabsTrigger': true```
zakładki działają jako trigger dla akordeona, ukrywane i pokazywane za pomoca css, tak samo nagłówki akordeona. Rozwiązuje to problem zakładek na rwd, bez przeliczania js`em wysokości tabów

##Spełnia kryteria:

* * *

* kryterium A - funkcjonalne - moduł, niezależnie od innych elementow serwisu, pełni określoną funkcję. Funkcję tą da się zaprezentować umieszczając dany moduł np. w styleguide - bezpośrednio lub za pomocą loadera. Niezależnie od innych modułów - funkcjonalność jest zrozumiała i klarowna
* kryterium C - pomocnicze - css - moduł posiada własne style
* kryterium D - pomocnicze - moduł nie jest wersją jednego z generycznych modułów css (typo, alert, btn, form, label, table)
