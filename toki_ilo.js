// ==UserScript==
// @name         o ante e lipu tawa sitelen pona
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://liputenpo.org/*
// @match        https://wikipesija.org/*
// @match        https://lipukule.org/*
// @match        https://lipumonsuta.neocities.org/*
// @match        http://utala.pona.la/*
// @match        https://toki.social/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';
    // Your code here...
    var TokiPonaLatin=["a","akesi","ala","alasa","ali","ale","anpa","ante","anu","awen","e","en","esun","ijo","ike","ilo","insa","jaki","jan","jelo","jo","kala","kalama","kama","kasi","ken","kepeken","kili","kiwen","ko","kon","kule","kulupu","kute","la","lape","laso","lawa","len","lete","li","lili","linja","lipu","loje","lon","luka","lukin","lupa","ma","mama","mani","meli","mi","mije","moku","moli","monsi","mu","mun","musi","mute","nanpa","nasa","nasin","nena","ni","nimi","noka","o","olin","ona","open","pakala","pali","palisa","pan","pana","pi","pilin","pimeja","pini","pipi","poka","poki","pona","pu","sama","seli","selo","seme","sewi","sijelo","sike","sin","sina","sinpin","sitelen","sona","soweli","suli","suno","supa","suwi","tan","taso","tawa","telo","tenpo","toki","tomo","tu","unpa","uta","utala","walo","wan","waso","wawa","weka","wile","namako","kin","oko","kipisi","leko","monsuta","tonsi","jasima","kijetesantakalu","soko","meso", "epiku", "kokosila", "lanpan", "n", "misikeke", "ku"];
    var TokiPonaSitelen = ['󱤀', '󱤁', '󱤂', '󱤃', '󱤄', '󱤄', '󱤅', '󱤆', '󱤇', '󱤈', '󱤉', '󱤊', '󱤋', '󱤌', '󱤍', '󱤎', '󱤏', '󱤐', '󱤑', '󱤒', '󱤓', '󱤔', '󱤕', '󱤖', '󱤗', '󱤘', '󱤙', '󱤚', '󱤛', '󱤜', '󱤝', '󱤞', '󱤟', '󱤠', '󱤡', '󱤢', '󱤣', '󱤤', '󱤥', '󱤦', '󱤧', '󱤨', '󱤩', '󱤪', '󱤫', '󱤬', '󱤭', '󱤮', '󱤯', '󱤰', '󱤱', '󱤲', '󱤳', '󱤴', '󱤵', '󱤶', '󱤷', '󱤸', '󱤹', '󱤺', '󱤻', '󱤼', '󱤽', '󱤾', '󱤿', '󱥀', '󱥁', '󱥂', '󱥃', '󱥄', '󱥅', '󱥆', '󱥇', '󱥈', '󱥉', '󱥊', '󱥋', '󱥌', '󱥍', '󱥎', '󱥏', '󱥐', '󱥑', '󱥒', '󱥓', '󱥔', '󱥕', '󱥖', '󱥗', '󱥘', '󱥙', '󱥚', '󱥛', '󱥜', '󱥝', '󱥞', '󱥟', '󱥠', '󱥡', '󱥢', '󱥣', '󱥤', '󱥥', '󱥦', '󱥧', '󱥨', '󱥩', '󱥪', '󱥫', '󱥬', '󱥭', '󱥮', '󱥯', '󱥰', '󱥱', '󱥲', '󱥳', '󱥴', '󱥵', '󱥶', '󱥷', '󱥸', '󱥹', '󱥺', '󱥻', '󱥼', '󱥽', '󱥾', '󱥿', '󱦀', '󱦁', '󱦂', '󱦃', '󱦄', '󱦅', '󱦆', '󱦇', '󱦈']
    var TokiPonaPunctuation={
        openBracket: "󱦐",
        closeBracket: "󱦑",
        cartuche: "󱦒",
        stop: "󱦜",
        colon: "󱦝",
        openQuote: "🭽",
        closeQoute: "🭿"
    }
    function splitMora(word) {
        let splitword = Array.from(word);
        for (let letter = 0; letter < splitword.length; letter++) {
          if (letter >= splitword.length - 1) {
            break;
          }
          if (
            "ptksmnljw".includes(splitword[letter]) &&
            "aeiou".includes(splitword[letter + 1])
          ) {
            splitword[letter] = splitword[letter] + splitword.splice(letter + 1, 1)[0];
          }
        }
        return splitword;
    }
    function IsTPWord(word){
        for(var letter = 0; letter < word.length; letter++){
            if("ptksmnljwaeiou".indexOf(word[letter])==-1){
                return(false)
            }
        }
        if(word.indexOf("-") == -1){
            for(var morph = 0; morph < splitMora(word).length; morph++){
                if(splitMora(word)[morph].length == 1 && "aeioun".indexOf(splitMora(word)[morph])==-1){
                    return(false)
                    break
                }
            }
        }
        return(true)
    }
    var compoundGlyfs = ["anpa-lawa", "ijo-akesi", "ijo-ala", "ijo-alasa", "ijo-ale", "ijo-ali", "ijo-anpa", "ijo-ante", "ijo-anu", "ijo-apeja", "ijo-awen", "ijo-en", "ijo-esun", "ijo-ike", "ijo-ilo", "ijo-insa", "ijo-jaki", "ijo-jan", "ijo-jelo", "ijo-jo", "ijo-kala", "ijo-kalama", "ijo-kama", "ijo-kasi", "ijo-ken", "ijo-kepeken", "ijo-kijetesantakalu", "ijo-kili", "ijo-kin", "ijo-kipisi", "ijo-kiwen", "ijo-ko", "ijo-kon", "ijo-kule", "ijo-kulupu", "ijo-kute", "ijo-lape", "ijo-laso", "ijo-lawa", "ijo-leko", "ijo-len", "ijo-lete", "ijo-lili", "ijo-linja", "ijo-lipu", "ijo-loje", "ijo-lon", "ijo-luka", "ijo-lukin", "ijo-lupa", "ijo-ma", "ijo-mama", "ijo-mani", "ijo-meli", "ijo-meli2", "ijo-mi", "ijo-mije", "ijo-mije2", "ijo-moku", "ijo-moli", "ijo-monsi", "ijo-monsuta", "ijo-mu", "ijo-mun", "ijo-musi", "ijo-mute", "ijo-namako", "ijo-namako2", "ijo-nanpa", "ijo-nasa", "ijo-nasin", "ijo-nena", "ijo-ni", "ijo^ni", "ijo-ni-li-seme", "ijo-nimi", "ijo-noka", "ijo-oko", "ijo-olin", "ijo-olin2", "ijo-ona", "ijo-open", "ijo-pakala", "ijo-pake", "ijo-pali", "ijo-palisa", "ijo-pan", "ijo-pana", "ijo-pilin", "ijo-pimeja", "ijo-pini", "ijo-pipi", "ijo-poka", "ijo-poki", "ijo-pona", "ijo-pu", "ijo-sama", "ijo-seli", "ijo-selo", "ijo-seme", "ijo-sewi", "ijo-sewi2", "ijo-sijelo", "ijo-sike", "ijo-sin", "ijo-sina", "ijo-sinpin", "ijo-sitelen", "ijo-sona", "ijo-soweli", "ijo-suli", "ijo-suno", "ijo-supa", "ijo-suwi", "ijo-tan", "ijo-taso", "ijo-tawa", "ijo-telo", "ijo-tenpo", "ijo-toki", "ijo-tomo", "ijo-tonsi", "ijo-tu", "ijo-unpa", "ijo-uta", "ijo-uta2", "ijo-utala", "ijo-walo", "ijo-wan", "ijo-waso", "ijo-wawa", "ijo-weka", "ijo-wile", "ijo-wile2", "ike-ala", "ike-lili", "ike-lukin", "ilo-kipisi", "ilo-lape", "ilo-lukin", "ilo-moli", "ilo-musi", "ilo-nanpa", "ilo-oko", "ilo-open", "ilo-suno", "ilo-toki", "jan-ala", "jan-alasa", "jan-ale", "jan-ali", "jan-ante", "jan-ike", "jan-kala", "jan-kalama", "jan-kasi", "jan-kulupu", "jan-lawa", "jan-lili", "jan-monsuta", "jan-mute", "jan-nasa", "jan-ni", "jan-olin", "jan-olin2", "jan-pakala", "jan-pali", "jan-poka", "jan-pona", "jan-sama", "jan-seme", "jan-sewi", "jan-sewi2", "jan-sin", "jan-sona", "jan-suli", "jan-suwi", "jan-toki", "jan-unpa", "jan-utala", "jan-wawa", "kala-lete", "kala^lete", "kala2^lete", "kala-lili", "kala^lili", "kala2^lili", "kalama-musi", "kasi-jelo", "kasi-kule", "kasi-laso", "kasi-lili", "kasi-loje", "kasi-pimeja", "kasi-walo", "kili-jelo", "kili-laso", "kili-lili", "kili-loje", "kili-palisa", "kili-pimeja", "kili-suwi", "kili-walo", "kiwen-jelo", "kiwen-kasi", "kiwen-laso", "kiwen-lete", "kiwen-lili", "kiwen-loje", "kiwen-mun", "kiwen-pimeja", "kiwen-seli", "kiwen-suno", "kiwen-walo", "ko-jaki", "ko-jelo", "ko-kasi", "ko-kule", "ko-laso", "ko-lete", "ko-lili", "ko-loje", "ko-nasa", "ko-pimeja", "ko-seli", "ko-walo", "kon-lete", "laso-kasi", "laso-mun", "laso-sewi", "laso-sewi2", "laso-telo", "len-jan", "len-jelo", "len-laso", "len-lawa", "len-lili", "len-loje", "len-luka", "len-noka", "len-pimeja", "len-sin", "len-walo", "linja-lili", "linja-pona", "linja-sike", "linja-suwi", "lipu-kasi", "lipu-nanpa", "lipu-nimi", "lipu-sewi", "lipu-sewi2", "lipu-sona", "lipu-tenpo", "lipu-toki", "loje-jelo", "loje-walo", "luka-luka", "luka^luka", "luka*luka", "luka-luka-luka", "luka-luka-luka-tu", "luka-luka-luka-tu-tu", "luka-luka-luka-tu-wan", "luka-luka-luka-wan", "luka-luka-luka-wan-tu", "luka-luka-tu", "luka-luka-tu-tu", "luka-luka-tu-wan", "luka-luka-wan", "luka-luka-wan-tu", "luka-tu", "luka^tu", "luka-tu-tu", "luka-tu-wan", "luka-wan", "luka^wan", "luka-wan-tu", "lupa-jaki", "lupa-kiwen", "lupa-kute", "lupa-lili", "lupa-meli", "lupa-meli2", "lupa-monsi", "lupa-nena", "lupa-tomo", "ma-ale", "ma-ali", "ma-ike", "ma-kasi", "ma-ni", "ma-pona", "ma-tomo", "mama-mama", "mama-meli", "mama-meli2", "mama-mije", "mama-mije2", "mama-tonsi", "meli-ike", "meli2-ike", "meli-lili", "meli2-lili", "meli-pona", "meli2-pona", "meli-sama", "meli2-sama", "meli-tonsi", "meli2-tonsi", "meli-unpa", "meli2-unpa", "meli-wawa", "meli2-wawa", "mije-ike", "mije2-ike", "mije-lili", "mije2-lili", "mije-pona", "mije2-pona", "mije-sama", "mije2-sama", "mije-tonsi", "mije2-tonsi", "mije-unpa", "mije2-unpa", "mije-wawa", "mije2-wawa", "musi-lili", "nasin-nanpa", "nasin^nanpa", "nena-kon", "nena-kute", "nena-lili", "nena-mama", "nena-meli", "nena-meli2", "nimi-sin", "nimi^sin", "nimi*sin", "palisa-lili", "pilin-ala", "pilin-ike", "pilin-nasa", "pilin-pakala", "pilin-pona", "pilin-sama", "poki-kon", "poki-len", "poki-lete", "poki-lili", "poki-seli", "poki-telo", "poki-tona", "pona-ala", "pona-lili", "pona-lukin", "selo-len", "selo-soweli", "sike-lili", "sitelen-ike", "sitelen-ma", "sitelen-monsuta", "sitelen-pona", "sitelen-sitelen", "sitelen-tawa", "sitelen-toki", "sona-ala", "sona-ike", "sona-lili", "sona-ma", "sona-nanpa", "sona-pona", "sona-sijelo", "sona-tenpo", "sona-toki", "sona-utala", "supa-lape", "supa-lawa", "supa-lupa", "supa-moku", "supa-monsi", "supa-pali", "telo-lete", "telo-lili", "toki-ala", "toki-ike", "toki-pona", "toki-sin", "toki-sona", "toki-utala", "tomo-lape", "tomo-mani", "tomo-moku", "tomo-monsuta", "tomo-nasin", "tomo-ni", "tomo-pali", "tomo-sona", "tomo-tawa", "tomo-unpa", "tomo-utala", "tonsi-ike", "tonsi-lili", "tonsi-pona", "tonsi-sama", "tonsi-sin", "tonsi-unpa", "tonsi-wawa", "tu-luka", "tu-tu", "tu-wan", "walo-pimeja", "wan-luka", "wan-tu", "wawa-tenpo"]
    containerGlyfs = ["anpa", "ijo", "jan", "kala", "kili", "kiwen", "ko", "lawa", "len", "lipu", "luka", "lupa", "mije", "nena", "pi", "pilin", "poka", "poki", "pona", "sitelen", "sona", "suno", "tomo", "toki", "tonsi", "walo", "wile"];
    nonContainableGlyfs = ["o", "anu", "e", "en", "kama", "kepeken", "la", "li", "lon", "pi", "tan", "tawa", "sama", "te", "to"];
    weirdGlyfs = ["luka"];
    allWords = ["a", "akesi", "ala", "alasa", "ale", "ali", "anpa", "ante", "anu", "awen", "en", "esun", "ijo", "ike", "ilo", "insa", "jaki", "jan", "jelo", "jo", "kala", "kalama", "kama", "kasi", "ken", "kepeken", "kili", "kin", "kiwen", "ko", "kon", "kule", "kulupu", "kute", "la", "lape", "laso", "lawa", "len", "lete", "lili", "linja", "lipu", "loje", "lon", "luka", "lukin", "lupa", "ma", "mama", "mani", "meli", "mi", "mije", "moku", "moli", "monsi", "mu", "mun", "musi", "mute", "nanpa", "nasa", "nasin", "nena", "ni", "nimi", "noka", "namako", "o", "oko", "olin", "ona", "open", "pakala", "pali", "palisa", "pan", "pana", "pi", "pilin", "pimeja", "pini", "pipi", "poka", "poki", "pona", "pu", "sama", "seli", "selo", "seme", "sewi", "sijelo", "sike", "sin", "sina", "sinpin", "sitelen", "sona", "soweli", "suli", "suno", "supa", "suwi", "tan", "taso", "tawa", "telo", "tenpo", "toki", "tomo", "tu", "uta", "utala", "walo", "wan", "waso", "wawa", "weka", "wile"];
    var mastodon_Glyfs = ["a", "n", "mute", "e", "o"]
    function update_str(string, index, new_char) {
        var a_list;
        a_list = string.split("");
        a_list[index] = new_char;
        return a_list.join("");
        }
    var _pj;
    ////console.log("started")
    var allWords, bestFit, containerGlyfs, currentFit, file, fineshedSpWord, nameToSP, nonContainableGlyfs, output, validWord, visualBestFit, weirdGlyfs;
    function _pj_snippets(container) {
    function in_es6(left, right) {
        if (right instanceof Array || typeof right === "string") {
        return right.indexOf(left) > -1;
        } else {
        if (right instanceof Map || right instanceof Set || right instanceof WeakMap || right instanceof WeakSet) {
            return right.has(left);
        } else {
            return left in right;
        }
        }
    }
    container["in_es6"] = in_es6;
    return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    function getSPName(nameToSP){
        nameToSP = nameToSP.toLowerCase()
        nameToSP = splitMora(nameToSP)
        fineshedSpWord = "";
        while (true) {
            bestFit = ["", 0];
            for (var dictanaryWord, _pj_d = 0, _pj_b = allWords, _pj_c = _pj_b.length; _pj_d < _pj_c; _pj_d += 1) {
                dictanaryWord = _pj_b[_pj_d];
                currentFit = 0;
                for (var Mora = 0, _pj_e = nameToSP.length; Mora < _pj_e; Mora += 1) {
                if (splitMora(dictanaryWord)[Mora] === nameToSP[Mora]) {
                    currentFit += 1;
                } else {
                    break;
                }

                if (currentFit === splitMora(dictanaryWord).length) {
                    break;
                }
                }

                if (currentFit === 0) {
                ////console.log(nameToSP)
                if (dictanaryWord[0] === nameToSP[0][0]) {
                    currentFit = 0.5;
                }
                }

                if (currentFit > bestFit[1]) {
                bestFit[1] = currentFit;
                bestFit[0] = dictanaryWord;
                }
            }

            if (bestFit[1] === 0) {
                nameToSP.splice(0,1)
            }
            var displayBestFit = TokiPonaSitelen[TokiPonaLatin.indexOf(bestFit[0])]
            if (bestFit[1] === 0.5) {
                fineshedSpWord += displayBestFit + TokiPonaPunctuation.cartuche
                ////console.log(nameToSP);
                nameToSP[0] = update_str(nameToSP[0], 0, "");
                ////console.log(nameToSP);

                if (nameToSP[0] === "") {
                    nameToSP.splice(0,1)
                }
            }

            if (bestFit[1] > 0.5) {
                visualBestFit = bestFit[1];

                if (nameToSP[0].length === 1) {
                visualBestFit -= 1;
                }

                nameToSP = nameToSP.slice(bestFit[1]);
                //console.log(bestFit[0])
                //console.log(bestFit[1])
                if (bestFit[1] < splitMora(bestFit[0]).length) {
                    fineshedSpWord += displayBestFit + TokiPonaPunctuation.cartuche + (TokiPonaPunctuation.stop + TokiPonaPunctuation.cartuche).repeat(visualBestFit);
                } else {
                    fineshedSpWord += displayBestFit + TokiPonaPunctuation.cartuche + TokiPonaPunctuation.colon + TokiPonaPunctuation.cartuche
                }
            }

            if (nameToSP.length == 0) {
                break;
            }
        }

        ////console.log("[" + fineshedSpWord + "]");
        return(""+TokiPonaPunctuation.openBracket + fineshedSpWord + TokiPonaPunctuation.closeBracket+"")
    }

    function toSP(text){
        console.log(text)
        if(!text.match(/[a-z]/)){
            return(text)
        }
        text = text.replaceAll(/“/g, TokiPonaPunctuation.openQuote)
        text = text.replaceAll(/”/g, TokiPonaPunctuation.closeQoute)

        text = text.replaceAll(/(?<=(\s|\n|^))"/g, TokiPonaPunctuation.openQuote)
        text = text.replaceAll(/"/g, TokiPonaPunctuation.closeQoute)
        for(i = 0; i < TokiPonaLatin.length; i++){
            var word = TokiPonaLatin[i]
            var pattern = new RegExp("\\b"+word+"\\b", "g")
            text = text.replaceAll(pattern, TokiPonaSitelen[i]+"")
        }
        text = text.replaceAll(/\b[P|T|K|S|M|N|L|J|W]?[a|e|i|o|u|A|E|I|O|U]n?([p|t|k|s|m|n|l|j|w][a|e|i|o|u]n?)*\b/g, getSPName)
        text = text.replaceAll(/:/g, TokiPonaPunctuation.colon)
        text = text.replaceAll(/\./g, TokiPonaPunctuation.stop)
        text = text.replaceAll(/\?/g, TokiPonaPunctuation.stop)
        text = text.replaceAll(/!/g, TokiPonaPunctuation.stop)
        text = text.replaceAll(/(?<=\bn*)n(?=n*\b)/g, "󱦆") //replace nnnnnnn
        text = text.replaceAll(/(?<![A-Za-z]) /g, "")
        text = text.replaceAll(/,/g, " ")
        return(text)
    }
    function allDescendants (node) {
        for (var i = 0; i < node.childNodes.length; i++) {
          var child = node.childNodes[i];
          allDescendants(child);
          if (child.nodeType === 3){ // 3 is for text node
            child.nodeValue = toSP(child.nodeValue);
          }
        }
    }
//    function replaceText(context){
//        var childNodes = context.childNodes;
//        for (var i = 0; i<childNodes.length; i++) {
//            var childNode = childNodes[i];
//            if (childNode.nodeType === 3){ // 3 is for text node
//                childNode.nodeValue = toSP(childNode.nodeValue);
//            }
//            else if (childNode.nodeType === 1 && childNode.nodeName != "HEAD"){
//                childNode = toSP(childNode);
//            }
//        }
//    }
    allDescendants(document.body)
    GM_addStyle(`
        @font-face {
            font-family: 'Sitelen Pona';
            src: url('https://greybeetle213.github.io/font-test/FairfaxHD.ttf') format('truetype');
        }
        body{
            font-family: 'Sitelen Pona' !important;
        }
    `);
    //document.head.appendChild(style);
    var elems = document.body.getElementsByTagName("*");
    for(var i = 0; i < elems.length; i++){
        elems[i].style.fontFamily = "Sitelen Pona"
        //elems[i].style.fontSize = "20px"
    }
    var observer = new MutationObserver(function(mutationsList, observer) {
        allDescendants(document.body)
    });
    observer.observe(document.body, { attributes: true, childList: true, subtree: true });
})();