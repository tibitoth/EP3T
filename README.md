# Egyetemi Portálok Productivity Power Tools
Egy páran már egy ideje mindenféle vicces kiegészítéseket írogattunk a tanszéki portálhoz és a diplomaterv portálhoz. Olyan dolgok ezek, amik egyszer jól jöttek volna, de nem akartuk vele zavarni a webmestert úgyhogy gyorsan megírtuk userscriptbe ezeket. Elsősorban oktatói oldalról lehetnek érdekesek ezek a funkciók, de nem kizárt, hogy hallgatók számára is egyszer hasznos lesz.

# Használat
A használathoz Userscript-eket kezelő böngésző bővítményre van szükség, ilyen például chrome-hoz a [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=hu). 
Telepítés után hozzá lehet adni új scriptet a kezelőfelületen, ahova a \*.js fájl forrását kell bemásolni. Ha szeretnénk verziószám alapú automatikus frissítést is, akkor megadhatjuk a \*.js fájt RAW github elérési útvonalát a `Frissítési URL` mezőben.

# Diplomaterv portál https://diplomaterv.vik.bme.hu
## Dipterv portál témalista áttekinthetőségének javítása

*TODO leírás és screenshot*

# Aut tanszéki portál https://www.aut.bme.hu

## Kiválasztott jegyzetek letöltése
A tantárgyak publikus oldalairól lehetőséget nyújt kiválasztani jegyzeteket, melyeket egyszerre, egy zip-be csomagolva le is lehet tölteni. 

![download](https://cloud.githubusercontent.com/assets/8333960/14266257/37ede488-fac7-11e5-9068-ff9956d80833.PNG)

## Csoportnévsorok exportálása excel formátumban
Hasznos jelenléti névsorok nyomtatásához.

![nevsor](https://cloud.githubusercontent.com/assets/8333960/14266277/5aa17df0-fac7-11e5-8890-cbec4c0d9e45.PNG)

Elérhető egy konkrét számonkérés részletes oldalán. Kimeneti formátum .xlsx

![nevsor2](https://cloud.githubusercontent.com/assets/8333960/14266508/0fb52eac-fac9-11e5-9a0c-2fb938b9ec67.PNG)

## Titkos másolat
Ha nem szeretnénk, hogy a csoportos emailek esetében a hallgatók láthassák egymás címeit, lehetőség van e-mail küldésére minden hallgatónak BCC mezőben, a tárgy neve a subject mezőbe kerül.

Ez a script a csoport eredményei oldalon a már meglévő `E-mail küldése a csoport hallgatóinak` link működését írja felül.

![bcc](https://cloud.githubusercontent.com/assets/8333960/14266240/2496ea1a-fac7-11e5-8614-2df410316b14.PNG)


## Értékelések színezése
Egy konkrét számonkérés részletes oldalán, az értékelések listájánál a még nem értékelt sorok hátterét kiszínezi.

![szinezes](https://cloud.githubusercontent.com/assets/8333960/14266287/6d9d84bc-fac7-11e5-8447-c167e6fb6e3c.PNG)

## Összes beadott fájl letöltése
Egy dedikált gombbal letölthető egy zip-be csomagolva az összes feltöltött megoldás a számonkérés részletes oldaláról.

![downloadall](https://cloud.githubusercontent.com/assets/8333960/14266268/47e9cea6-fac7-11e5-93e2-3ed4b81fa3d5.PNG)
