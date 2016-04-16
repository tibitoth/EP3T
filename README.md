# Egyetemi Portálok Productivity Power Tools
Egy páran már egy ideje mindenféle vicces kiegészítéseket írogattunk a tanszéki portálhoz és a diplomaterv portálhoz. Olyan dolgok ezek, amik egyszer jól jöttek volna, de nem akartuk vele zavarni a webmestert úgyhogy gyorsan megírtuk userscriptbe ezeket. Elsősorban oktatói oldalról lehetnek érdekesek ezek a funkciók, de nem kizárt, hogy majd a hallgatók számára is néhány script hasznos lehet.

# Használat
A használathoz Userscript-eket kezelő böngésző bővítményre van szükség, ilyen például chrome-hoz a [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=hu). 
Ha a Tampermonkey fent van, akkor az alábbi táblázatban szereplő scriptek Telepítés linkjére kattintva lehet felvenni azokat.

# Tartalom

Diplomaterv portál | |
--------------------|---
[Témalista áttekinthetőségének javítása](https://github.com/conwid/EP3T#dipterv-portál-témalista-áttekinthetőségének-javítása)|[Telepítés](https://raw.githubusercontent.com/conwid/EP3T/master/diptervportal/temalista-attekintes.user.js) |

Aut tanszéki portál | |
|---------------------|---
[Kiválasztott jegyzetek letöltése](https://github.com/conwid/EP3T#kiválasztott-jegyzetek-letöltése)  | [Telepítés](https://raw.githubusercontent.com/conwid/EP3T/master/tanszekiportal/downloadSelected.user.js)
[Csoportnévsorok exportálása excel formátumban](https://github.com/conwid/EP3T#csoportnévsorok-exportálása-excel-formátumban) | [Telepítés](https://raw.githubusercontent.com/conwid/EP3T/master/tanszekiportal/nevsor.user.js)
[Titkos másolat](https://github.com/conwid/EP3T#titkos-másolat) | [Telepítés](https://raw.githubusercontent.com/conwid/EP3T/master/tanszekiportal/bcc.user.js)
[Csoportok számonkérései táblázatának formázása](https://github.com/conwid/EP3T#csoportok-számonkérései-táblázatának-formázása) | [Telepítés](https://raw.githubusercontent.com/conwid/EP3T/master/tanszekiportal/csoport_tablazat_style.user.js)
[Értékelések színezése](https://github.com/conwid/EP3T#Értékelések-színezése) | [Telepítés](https://raw.githubusercontent.com/conwid/EP3T/master/tanszekiportal/ertekeles_szinezes.user.js)
[Összes beadott fájl letöltése](https://github.com/conwid/EP3T#Összes-beadott-fájl-letöltése) | [Telepítés](https://raw.githubusercontent.com/conwid/EP3T/master/tanszekiportal/downloadAll.user.js)
[Új jegyzet alapértelmezett kategóriája](https://github.com/conwid/EP3T#Új-jegyzet-alapértelmezett-kategóriája) | [Telepítés](https://raw.githubusercontent.com/conwid/EP3T/master/tanszekiportal/jegyzet_kategoria.user.js)

# Diplomaterv portál https://diplomaterv.vik.bme.hu
## Dipterv portál témalista áttekinthetőségének javítása

Konzulensként a diplomaterv portál meglátogatásakor az esetek 99%-ában egyetlen céllal érkezel: hogy lásd, milyen adminisztratív akadályok állnak még a hallgatóid előtt, és hogy miket tehetsz azok elhárítására.

Persze bele lehet tanulni, hiszen minden hallgatódra ugyanazok a feladatok várnak, ugyanazokkal a határidőkkel – legalábbis attól függően, hogy hol tartanak: Szakdolgozat, Diplomaterv 1 vagy Diplomaterv 2.

A baj csak az, hogy a diplomaterv portál nem aknázza ki ezeket a hasonlóságokat, semmilyen csoportosítást nem alkalmaz, egyszerűen téma címe szerinti ABC rendezést prezentál – ami teljesen használhatatlan a fenti feladat ellátására. További probléma, hogy a feladatok besorolását ("színezését") is megkérdőjelezhető logika szerint teszi. A csoportosítás mellett az is nehezíti a konzulens dolgát, hogy - a sokszor körültekintően szakdolgozatosra/diplomásra megválasztott - témacím szerint történik a rendezés, nem pedig a hallgató neve szerint.

A szkript elsődleges feladata, hogy kategorizálja a témákat az egyetlen releváns szempont, a tantárgy szerint:

![image](https://cloud.githubusercontent.com/assets/1123672/14344110/f48c9afa-fca5-11e5-8521-10d508414404.png)

Így egyből kirajzolódnak a hasonlóságok az elvégzendő feladatok között, könnyebbé válik a közös ügyintézés. Ezt tovább könnyítendő, minden tantárgy szerinti csoporthoz elérhető a "Körlevél küldése" funkció, amellyel azoknak a hallgatóknak küldhetünk e-mailt, akik az adott tárgyhoz vannak hozzárendelve. 

Ami a másik problémát, a feladatok besorolását illeti, jelenleg egy módosítást tesz a szkript: ha valami a tanszékvezetőre vár, az zöld pipát kap, hiszen részedről (mint konzulens részéről) a feladat el van végezve. (Ha esetleg a tanszékvezető elutasítja, akkor úgyis "Konzulensre vár" lesz az új állapot.) Tervezett jövőbeli funkció a *még úgysem elvégezhető* feladatok elrejtése (pl. bírálat feltöltése, amíg a hallgató nem is töltött fel semmit).

Végül, de nem utolsó sorban pedig a csoporton belül a témák a hallgatók neve szerint vannak rendezve.

# Aut tanszéki portál https://www.aut.bme.hu

## Kiválasztott jegyzetek letöltése
A tantárgyak publikus oldalairól lehetőséget nyújt kiválasztani jegyzeteket, melyeket egyszerre, egy zip-be csomagolva le is lehet tölteni. 

![downloadselected](https://cloud.githubusercontent.com/assets/4943046/14346767/ee22e058-fcb3-11e5-94d8-d2b7251483a2.PNG)

## Csoportnévsorok exportálása excel formátumban
Hasznos jelenléti névsorok nyomtatásához.

![nevsor](https://cloud.githubusercontent.com/assets/8333960/14266277/5aa17df0-fac7-11e5-8890-cbec4c0d9e45.PNG)

Elérhető egy konkrét számonkérés részletes oldalán. Kimeneti formátum .xlsx

![nevsor2](https://cloud.githubusercontent.com/assets/8333960/14266508/0fb52eac-fac9-11e5-9a0c-2fb938b9ec67.PNG)

## Titkos másolat
Ha nem szeretnénk, hogy a csoportos emailek esetében a hallgatók láthassák egymás címeit, lehetőség van e-mail küldésére minden hallgatónak BCC mezőben, a tárgy neve a subject mezőbe kerül.

Ez a script a csoport eredményei oldalon a már meglévő `E-mail küldése a csoport hallgatóinak` link működését írja felül.

![bcc](https://cloud.githubusercontent.com/assets/8333960/14266240/2496ea1a-fac7-11e5-8614-2df410316b14.PNG)

## Csoportok számonkérései táblázatának formázása
Ha túl sok számonkérés van egy csoporthoz rendelve nem túl kényelmes a fix ~1000px széles táblázatot oldalra görgetni, noha már mindenkinek legalább fullhd monitora van.
A táblázat és az oldalfejléc kinyújtásra kerül az oldal szélességének 85%-ában, és a táblázat belső görgetése helyett a teljes oldal görgethető függőlegesen.

![tablewidth](https://cloud.githubusercontent.com/assets/8333960/14470254/bd0a5ef4-00e8-11e6-8a49-276456d5dc7f.png)

## Értékelések színezése
Egy konkrét számonkérés részletes oldalán, az értékelések listájánál a még nem értékelt sorok hátterét kiszínezi.

![szinezes](https://cloud.githubusercontent.com/assets/8333960/14266287/6d9d84bc-fac7-11e5-8447-c167e6fb6e3c.PNG)

## Összes beadott fájl letöltése
Egy dedikált gombbal letölthető egy zip-be csomagolva az összes feltöltött megoldás a számonkérés részletes oldaláról.

![downloadall](https://cloud.githubusercontent.com/assets/8333960/14266268/47e9cea6-fac7-11e5-93e2-3ed4b81fa3d5.PNG)

## Új jegyzet alapértelmezett kategóriája
Ha több jegyzetet töltök fel egymás után, tipikusan mind ugyanolyan kategóriájú, így praktikus lenne, ha a portál mindig az előzőleg használt kategóriát kínálná fel.

Ez a script pont erre szolgál: mindig az utoljára kiválasztott értékre állítja a kategória legördülőt az oldal betöltésekor (némi késleltetéssel, sajnos). Nem tesz különbséget tárgyak között.
