# Egyetemi Portálok Productivity Power Tools
Egy páran már egy ideje mindenféle vicces kiegészítéseket írogattunk a tanszéki portálhoz és a diplomaterv portálhoz. Olyan dolgok ezek, amik egyszer jól jöttek volna, de nem akartuk vele zavarni a webmestert úgyhogy gyorsan megírtuk userscriptbe ezeket. Elsősorban oktatói oldalról lehetnek érdekesek ezek a funkciók, de nem kizárt, hogy majd a hallgatók számára is néhány script hasznos lehet.

# Használat
A használathoz Userscript-eket kezelő böngésző bővítményre van szükség, ilyen például chrome-hoz a [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=hu). 
Telepítés után hozzá lehet adni új scriptet a kezelőfelületen, ahova a \*.js fájl forrását kell bemásolni. Ha szeretnénk verziószám alapú automatikus frissítést is, akkor megadhatjuk a \*.js fájt RAW github elérési útvonalát a `Frissítési URL` mezőben.

# Diplomaterv portál https://diplomaterv.vik.bme.hu
## Dipterv portál témalista áttekinthetőségének javítása

Konzulensként a diplomaterv portál meglátogatásakor az esetek 99%-ában egyetlen céllal érkezel: hogy lásd, milyen adminisztratív akadályok állnak még a hallgatóid előtt, és hogy miket tehetsz azok elhárítására.

Persze bele lehet tanulni, hiszen minden hallgatódra ugyanazok a feladatok várnak, ugyanazokkal a határidőkkel – legalábbis attól függően, hogy hol tartanak: Szakdolgozat, Diplomaterv 1 vagy Diplomaterv 2.

A baj csak az, hogy a diplomaterv portál nem aknázza ki ezeket a hasonlóságokat, semmilyen csoportosítást nem alkalmaz, egyszerűen téma címe szerinti ABC rendezést prezentál – ami teljesen használhatatlan a fenti feladat ellátására. További probléma, hogy a feladatok besorolását ("színezését") is megkérdőjelezhető logika szerint teszi.

A szkript elsődleges feladata, hogy kategorizálja a témákat az egyetlen releváns szempont, a tantárgy szerint:

![image](https://cloud.githubusercontent.com/assets/1123672/14278183/a85ae086-fb26-11e5-939e-6bf3dbd40ec1.png)

Így egyből kirajzolódnak a hasonlóságok az elvégzendő feladatok között, könnyebbé válik a közös ügyintézés. (Tervezett jövőbeli funkció, hogy a csoportos e-mail küldés is a fenti kategóriákat használja – olyan sosincs, hogy *tényleg mindenkinek* kell írni valamit, olyan viszont rengetegszer volna, hogy pl. *az összes diplomaterv 1-esnek kellene*.)

Ami a másik problémát, a feladatok besorolását illeti, jelenleg egy módosítást tesz a szkript: ha valami a tanszékvezetőre vár, az zöld pipát kap, hiszen részedről (mint konzulens részéről) a feladat el van végezve. (Ha esetleg a tanszékvezető elutasítja, akkor úgyis "Konzulensre vár" lesz az új állapot.) Tervezett jövőbeli funkció a *még úgysem elvégezhető* feladatok elrejtése (pl. bírálat feltöltése, amíg a hallgató nem is töltött fel semmit).

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
