(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _monsters_monsters_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./monsters/monsters.component */ "./src/app/monsters/monsters.component.ts");
/* harmony import */ var _monster_detail_monster_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./monster-detail/monster-detail.component */ "./src/app/monster-detail/monster-detail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', redirectTo: '/monsters', pathMatch: 'full' },
    { path: 'detail/:id', component: _monster_detail_monster_detail_component__WEBPACK_IMPORTED_MODULE_3__["MonsterDetailComponent"] },
    { path: 'monsters', component: _monsters_monsters_component__WEBPACK_IMPORTED_MODULE_2__["MonstersComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n  .center-div\n  {\n       margin: 0 auto;\n       max-width: 700px;\n  }\n\n  a{\n     font-family: 'Marcellus SC', serif;\n   }\n\n  input \n   { \n     text-align: center;\n   }\n\n  input[type=text]:focus {\n    \n    text-align: center;\n  }\n\n  #navBarSearchForm input[type=text]\n  {width:300px !important;}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n  <link href=\"https://fonts.googleapis.com/css?family=Marcellus+SC\" rel=\"stylesheet\">\n  <title>Document</title>\n</head>\n\n<body>\n\n  <nav class=\"navbar navbar-dark bg-dark justify-content-between\">\n    <a class=\"navbar-brand\" href=\"#\">D&D Unique Monster Loot App</a>\n    <form class=\"form-inline\" id=\"navBarSearchForm\">\n      <input class=\"form-control mr-sm-2\" type=\"text\" [(ngModel)]=\"name\" placeholder=\"Search Monsters Here...\" aria-label=\"Search\" (input)=\"Search()\" >\n    </form>\n  </nav>\n  <br>\n  <router-outlet></router-outlet>\n\n</body>\n\n</html>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _monster_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./monster.service */ "./src/app/monster.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(monsterService) {
        this.monsterService = monsterService;
        this.title = 'Loot App';
        this.monsters = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        this.getMonsters();
    };
    AppComponent.prototype.getMonsters = function () {
        var _this = this;
        this.monsterService.getMonsters()
            .subscribe(function (monsters) { return _this.monsters = monsters; });
    };
    AppComponent.prototype.Search = function () {
        var _this = this;
        if (this.name != "") {
            this.monsters = this.monsters.filter(function (res) {
                return res.name.toLocaleLowerCase().match(_this.name.toLocaleLowerCase());
            });
        }
        else if (this.name == "") {
            this.ngOnInit();
        }
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_monster_service__WEBPACK_IMPORTED_MODULE_1__["MonsterService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _monsters_monsters_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./monsters/monsters.component */ "./src/app/monsters/monsters.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _monster_detail_monster_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./monster-detail/monster-detail.component */ "./src/app/monster-detail/monster-detail.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _monster_list_monster_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./monster-list/monster-list.component */ "./src/app/monster-list/monster-list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _monsters_monsters_component__WEBPACK_IMPORTED_MODULE_3__["MonstersComponent"],
                _monster_detail_monster_detail_component__WEBPACK_IMPORTED_MODULE_5__["MonsterDetailComponent"],
                _monster_list_monster_list_component__WEBPACK_IMPORTED_MODULE_7__["MonsterListComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/mock-monsters.ts":
/*!**********************************!*\
  !*** ./src/app/mock-monsters.ts ***!
  \**********************************/
/*! exports provided: MONSTERS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MONSTERS", function() { return MONSTERS; });
var MONSTERS = [
    {
        id: 1,
        name: 'Aarakocra',
        loot: [
            {
                id: 1,
                itemName: 'Bag of Mice',
                description: 'A bag full of dead mice, a tasty treat',
                price: '5gp',
                rarity: 'Common'
            },
            {
                id: 2,
                itemName: 'Long Sword',
                description: 'A sword whose hilt is covered with feathers',
                price: '30gp',
                rarity: 'Common'
            },
            {
                id: 3,
                itemName: 'Talon of an Aarakocra',
                description: 'A long aarakocra talon',
                price: '5gp',
                rarity: 'Common'
            },
            {
                id: 4,
                itemName: 'Bag of Assorted Gems',
                description: 'A bag filled with a random assortment of gems ranging from sapphires to rubies',
                price: '100gp',
                rarity: 'Rare'
            },
            {
                id: 5,
                itemName: 'Lizard on a Stick',
                description: 'A tasty lizard on a stick',
                price: '1gp',
                rarity: 'Common'
            },
            {
                id: 6,
                itemName: 'Headdress of Feathers',
                description: 'A ceremonial headdress made of feathers of various sizes and colors',
                price: '10gp',
                rarity: 'Common'
            },
            {
                id: 7,
                itemName: 'Sack of Seeds',
                description: 'A random assortment of seeds for a bird to snack on',
                price: '3gp',
                rarity: 'Common'
            },
            {
                id: 8,
                itemName: 'Bag of Bugs',
                description: 'A bag filled with nasty bugs',
                price: '1gp',
                rarity: 'Common'
            },
            {
                id: 9,
                itemName: 'Bag of Bones',
                description: 'A bag filled with bones of various small animals',
                price: '3gp',
                rarity: 'Common'
            },
            {
                id: 10,
                itemName: 'Elemental Feather',
                description: 'A magically imbued feather that can cast feather fall 3 times a day',
                price: '100gp',
                rarity: 'Uncommon'
            },
            {
                id: 11,
                itemName: '20 Arrows Worth of Feathers',
                description: 'There are enough feathers on this Aarakocra to make 20 arrows',
                price: '10gp',
                rarity: 'Common'
            },
            {
                id: 12,
                itemName: 'Aarakocra Egg',
                description: 'A small egg wrapped in fine cloth',
                price: '50gp',
                rarity: 'Uncommon'
            },
            {
                id: 13,
                itemName: 'Golden Goblet',
                description: 'A finely crafted golden goblet',
                price: '50gp',
                rarity: 'Uncommon'
            },
            {
                id: 14,
                itemName: 'Feather Pen',
                description: 'A feather pen made of the same feather type as the Aarakocra',
                price: '1gp',
                rarity: 'Common'
            },
            {
                id: 15,
                itemName: 'Feather of Swiftness',
                description: 'A pure white feather that grants the user +5 ft of movement speed',
                price: '100gp',
                rarity: 'Uncommon'
            },
            {
                id: 16,
                itemName: 'Leather Armor',
                description: 'Worn and torn leather armor',
                price: '10gp',
                rarity: 'Common'
            },
            {
                id: 17,
                itemName: 'Longbow of Flight',
                description: 'A longbow with carvings of wind rushing up the sides. Grants the user a +2 to hit when flying',
                price: '10gp',
                rarity: 'Common'
            }
        ],
        imageUrl: "https://i.pinimg.com/564x/d5/68/b2/d568b22e34aeaa92216a9e567d01cbbe.jpg",
    },
    {
        id: 2,
        name: 'Aboleth',
        loot: [
            {
                id: 1,
                itemName: 'Aboleth Bits',
                description: 'There are enough bits and parts to make a tasty stew',
                price: '3gp',
                rarity: 'Common'
            },
            {
                id: 2,
                itemName: 'Vacuum Potion',
                description: 'You gather enough parts of the Aboleth to make a potion that allows you to survive in a vaccum for 10min',
                price: '100gp',
                rarity: 'Rare'
            },
            {
                id: 3,
                itemName: 'Aboleth Teeth',
                description: 'You gather 10 Aboleth teeth, about the size of your forearm',
                price: '100gp',
                rarity: 'Rare'
            },
            {
                id: 4,
                itemName: 'Aboleth Mucus',
                description: 'This mucus can be crafted into a terrible posion that causes an effect similar to the Aboleths tentacle attack',
                price: '100gp',
                rarity: 'Rare'
            },
            {
                id: 5,
                itemName: 'Aboleth Tentacles',
                description: 'Extremely felxible and maleable tentacles that could be used to make a +2 magical whip',
                price: '300gp',
                rarity: 'Rare'
            },
            {
                id: 6,
                itemName: 'Ring of Mind Shielding',
                description: 'A ring with a golden brain on the top',
                price: '100gp',
                rarity: 'Uncommon'
            },
            {
                id: 7,
                itemName: 'Aboleth Skin',
                description: 'The skin of an Aboleth that can be used to create an object similar to a cloak of the manta',
                price: '150gp',
                rarity: 'Uncommon'
            },
            {
                id: 8,
                itemName: 'Stone of Golorr',
                description: 'A pale green stone with three eyes',
                price: '5000gp',
                rarity: 'Legendary'
            },
            {
                id: 9,
                itemName: 'Enslaving Eye',
                description: 'The central eye of the Aboleth allows the holder to use the Aboleths enslave ability once per day.',
                price: '1000',
                rarity: 'Very Rare'
            },
            {
                id: 10,
                itemName: 'Probing Eye',
                description: 'The lower eye of the Aboleth, grants the holder telepathy within 1 mile. If the target of telepathy is within eye site then the user knows the targets greatest desire.',
                price: '5000gp',
                rarity: 'Legendary'
            }
        ],
        imageUrl: "https://i.pinimg.com/originals/6d/e6/94/6de6941a2b81a0d2b193d657bb77a7cd.jpg"
    },
    { id: 3,
        name: 'Deva',
        loot: [
            {
                id: 1,
                itemName: 'Angelic Mace',
                description: 'A heavenly weapon that does an additional 4D8 radiant damage. When wielded by a creature of a different alignment, and a natural 1 is rolled, the user takes 4D8 radiant damamge.',
                price: '500gp',
                rarity: 'Very Rare'
            },
            {
                id: 2,
                itemName: 'Blessed Gauntlets',
                description: 'When a creature of similar alignment as the Deva wears the gauntlets they gain +1 to their AC and attacks',
                price: '300gp',
                rarity: 'Rare'
            },
            {
                id: 3,
                itemName: 'Feather of Truth',
                description: 'The Devas feathers compel evil to confess. The holder may use the zone of truth spell once. After the feather is consumed in holy flames.',
                price: '100gp',
                rarity: 'Uncommon'
            },
        ],
        imageUrl: "https://i.pinimg.com/originals/a2/21/79/a2217937d38fe63b7a4740c651ad27c9.jpg"
    },
    { id: 4,
        name: 'Planetar',
        loot: [
            {
                id: 1,
                itemName: 'Holy Greatsword',
                description: 'A heavenly greatsword that does an additional 5D8 radiant damage. When wielded by a creature of a different alignment, and a natural 1 is rolled the user takes 5D8 radiant damamge.',
                price: '700gp',
                rarity: 'Rare'
            },
            {
                id: 2,
                itemName: 'Tongue of the Planetar',
                description: 'This item allows the holder to cast the spell Zone of Truth 3 times a day',
                price: '500gp',
                rarity: 'Rare'
            },
            {
                id: 3,
                itemName: 'Vial of Planetar Blood',
                description: 'This vial of sacred blood heals the drinker 30 (6D8+3) hit points and cures any disease or conditions placed on the drinker',
                price: '300gp',
                rarity: 'Rare'
            },
            {
                id: 3,
                itemName: 'Gauntlets of the Planetar',
                description: 'Allows the user to cast detect good and evil 3 times a day, and invisibility once per day',
                price: '5000gp',
                rarity: 'Legendary'
            },
            {
                id: 4,
                itemName: 'Feather of Truth',
                description: 'The Planetars feathers compel evil to confess. The holder may use the zone of truth spell once. After the feather is consumed in holy flames',
                price: '100gp',
                rarity: 'Uncommon'
            },
            {
                id: 5,
                itemName: 'Sash of the Planetar',
                description: 'If the wearer is the same alignment of the Planetar, wearing this sash grants the user advantage on all saving throws against spells and other magical effects',
                price: '800gp',
                rarity: 'Very Rare'
            },
            {
                id: 6,
                itemName: 'Eyes of the Planetar',
                description: 'Though very difficult to remove these can be used to gain True Sight for a number of rounds equal to the users wisdom modifier',
                price: '1000gp',
                rarity: 'Very Rare'
            },
            {
                id: 7,
                itemName: 'Potion of Truesight',
                description: 'The Planetars feathers can be crafted to create a potion of true sight. This potion can be used by those of celestial heritage or good alignment. Otherwise it deals 3D6 radiant damage on consumption and grants blindness for 1 hour',
                price: '50gp',
                rarity: 'Uncommon'
            },
            {
                id: 8,
                itemName: 'Sun Blade',
                description: 'A longsword burning with radiant energy',
                price: '250gp',
                rarity: 'Rare'
            }
        ],
        imageUrl: "https://i.pinimg.com/originals/a0/50/37/a05037fddd8bdafd8ab768e896cf8bd4.jpg"
    },
    { id: 5,
        name: 'Solar',
        loot: [
            {
                id: 1,
                itemName: 'Holy Greatsword',
                description: 'A heavenly greatsword that does an additional 6D8 radiant damage. When wielded by a creature of a different alignment, and a natural 1 is rolled the user takes 4D8 radiant damamge',
                price: '700gp',
                rarity: 'Rare'
            },
            {
                id: 2,
                itemName: 'Slaying Longbow',
                description: 'A heavenly longbow that does an additional 6D8 radiant damage. If the target of an attack with this weapon is of an evil alignment and is below 100 hitpoints they must pass a DC 15 constitution save or instantly die. When wielded by a creature of a different alignment, and a natural 1 is rolled the user takes 6D8 radiant damamge. If the user is below 100 hitpoints they must make a DC 15 constitution saving throw or instantly die',
                price: '7000gp',
                rarity: 'Legendary'
            },
            {
                id: 3,
                itemName: 'Flying Sword',
                description: 'A celestial sword that can be commanded to fly 50ft, make one attack, then return to the users hand. This can be done as a bonus action. The sword does 4D6 slashing damage and 3D8 radiant damage',
                price: '2000gp',
                rarity: 'Very Rare'
            },
            {
                id: 4,
                itemName: 'Vial of Solar Blood',
                description: 'This vial of sacred blood heals the drinker 30 (8D8+3) hit points and cures any disease or conditions placed on the drinker',
                price: '300gp',
                rarity: 'Rare'
            },
            {
                id: 5,
                itemName: 'Gauntlets of the Solar',
                description: 'Allows the user to cast detect good and evil and invisibilty at will. Also it allows the user to cast the resurrection spell once, consuming the gauntlets',
                price: '1000gp',
                rarity: 'Very Rare'
            },
            {
                id: 6,
                itemName: 'Sash of the Solar',
                description: 'If the wearer is the same alignment of the Solar, wearing this sash grants the user advantage on all saving throws against spells and other magical effects',
                price: '800gp',
                rarity: 'Rare'
            },
            {
                id: 7,
                itemName: 'Feather of Truth',
                description: 'The Solars feathers compel evil to confess. The holder may use the zone of truth spell once. After the feather is consumed in holy flames',
                price: '100gp',
                rarity: 'Uncommon'
            },
            {
                id: 8,
                itemName: 'Tongue of the Solar',
                description: 'This item allows the holder to cast the spell Zone of Truth at will',
                price: '5000gp',
                rarity: 'Very Rare'
            },
            {
                id: 9,
                itemName: 'Amulet of the Solar',
                description: 'This amulet burning with celestial fire allows the user to teleport 120 ft 3 times a day',
                price: '500gp',
                rarity: 'Rare'
            }
        ],
        imageUrl: "https://i.pinimg.com/originals/95/28/e3/9528e3bf2694c5c9d29908afa27efd02.jpg"
    },
    { id: 6,
        name: 'Animated Armor',
        loot: [
            {
                id: 1,
                itemName: 'Scrap Metal',
                description: 'Enough metal bits and pieces to make a new set of heavy armor or repair exsisting armor',
                price: '50gp',
                rarity: 'Common'
            },
            {
                id: 2,
                itemName: 'Battered Plate Armor',
                description: 'A full set of plate armor that is hammered and broken. Could be repaired to make a full set of usuable plate armor',
                price: '100gp',
                rarity: 'Common'
            },
            {
                id: 3,
                itemName: 'Control Rune',
                description: 'Inside the Animated armor is a stone with a magical rune drawn on it. It allows the holder to command the suit of Animated Armor after repairing it',
                price: '500gp',
                rarity: 'Rare'
            },
            {
                id: 4,
                itemName: 'Master Crafted Steel Helmet',
                description: 'A finely crafted steel helmet that grants the user +1 to their AC',
                price: '200gp',
                rarity: 'Uncommon'
            }
        ],
        imageUrl: "https://i.pinimg.com/originals/91/cc/f8/91ccf82f5e4385a40b40bafc2d3be5b4.jpg"
    },
    { id: 7,
        name: 'Flying Sword',
        loot: [
            {
                id: 1,
                itemName: 'Tattered Long Sword',
                description: 'A finely crafted longsword that if repaired may become a +1 longsword',
                price: '100gp',
                rarity: 'Uncommon'
            },
            {
                id: 2,
                itemName: 'Control Rune',
                description: 'A small chunk of the pommel comes off allowing the holder to control the Flying Sword',
                price: '500gp',
                rarity: 'Rare'
            }
        ],
        imageUrl: "https://www.aidedd.org/dnd/images/flyingSword.jpg"
    },
    { id: 8,
        name: 'Rug of Smothering',
        loot: [
            {
                id: 1,
                itemName: 'Ruined Rug',
                description: 'The remains of the rug, filled with holes and tares',
                price: '10gp',
                rarity: 'Common'
            },
            {
                id: 2,
                itemName: 'String of Control',
                description: 'Hidden in the weave of the rug is a magic cord of string that allows the holder to control the rug of smothering',
                price: '100gp',
                rarity: 'Rare'
            },
            {
                id: 3,
                itemName: 'Fringes of Animation',
                description: 'The fringes of the rug have remnants of magic in them. It allows the user to cast the animate object spell once before being consumed',
                price: '50gp',
                rarity: 'Common'
            },
            {
                id: 4,
                itemName: 'Weathered Rug',
                description: 'The rug is in relative good shape, if repaired it can become a carpet of flying',
                price: '300gp',
                rarity: 'Rare'
            }
        ],
        imageUrl: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/213/1000/1000/636252764761726261.jpeg"
    },
    { id: 9,
        name: 'Ankheg',
        loot: [
            {
                id: 1,
                itemName: 'Vial of Ankheg Acid',
                description: 'A potent acid created from the Ankheg. It deals 3D6 acid damage',
                price: '50gp',
                rarity: 'Uncommon'
            },
            {
                id: 2,
                itemName: 'Ankheg Claws',
                description: 'If carefully crafted these claws can become Ankheg digging gauntlets, granting the wearer a burrowing speed of 20ft',
                price: '300gp',
                rarity: 'Rare'
            },
            {
                id: 3,
                itemName: 'Ankheg Antennae',
                description: 'If carefully removed and crafted the Ankheg Antennae can create a helm of tremor sense, granting the user tremor sense within 60ft',
                price: '500gp',
                rarity: 'Rare'
            },
            {
                id: 4,
                itemName: 'Ankheg Eggs',
                description: 'You find 5 Ankheg eggs. If the eggs are nurtured they may hatch baby ankhegs',
                price: '25gp Each',
                rarity: 'Uncommon'
            }
        ],
        imageUrl: "https://i.pinimg.com/originals/d4/5b/4b/d45b4b0726c5843a5d6057a08119fda8.jpg"
    },
    { id: 10,
        name: 'Azer',
        loot: [
            {
                id: 1,
                itemName: 'Weathered Warhammer',
                description: 'A normal sized warhammer weathered by time',
                price: '10gp',
                rarity: 'Uncommon'
            },
            {
                id: 2,
                itemName: 'Azer Heart',
                description: 'A heart in the form of volcanic rock. A creature that touches or melee attacks the holder of the Azers heart takes 1D10 fire damage',
                price: '100gp',
                rarity: 'Rare'
            },
            {
                id: 3,
                itemName: 'Azer Belt',
                description: 'When worn it emits a bright light in a 10ft radius and dim light for an additional 10ft',
                price: '100gp',
                rarity: 'Uncommon'
            },
            {
                id: 4,
                itemName: 'Azers Gauntlets',
                description: 'When in combat the gauntlets super heat all metal weapons brandished by the wearer without burning their hands or arms. The super heated weapon deals an additional 1D6 fire damamge',
                price: '200gp',
                rarity: 'Rare'
            },
            {
                id: 5,
                itemName: 'Azer Skin',
                description: 'If carefully removed the bronze skin of the Azer can be crafted onto exsisting armor to give resistance to fire',
                price: '200gp',
                rarity: 'Rare'
            },
            {
                id: 6,
                itemName: 'Bag of Assorted Gems',
                description: 'A small collection of gems',
                price: '500gp',
                rarity: 'Rare'
            },
            {
                id: 7,
                itemName: 'Inner Flame of the Azer',
                description: 'If contained this magical fire can be placed into a body of bronze to form a new Azer under your control',
                price: '700gp',
                rarity: 'Rare'
            },
            {
                id: 8,
                itemName: 'Volcanic Rocks',
                description: 'Three volcanic rock the size of a human hand. Can be thrown and cause the same affect as a fire ball spell',
                price: '150gp',
                rarity: 'Uncommon'
            },
            {
                id: 9,
                itemName: 'Azer Metal',
                description: 'Fine hunk of metal from the realm of the Azers. It can be used to craft one master crafted weapon giving it a +1 bonus to attack and damage rolls',
                price: '200gp',
                rarity: 'Uncommon'
            }
        ],
        imageUrl: "https://vignette.wikia.nocookie.net/forgottenrealms/images/0/08/Azer-5e.jpg/revision/latest/scale-to-width-down/350?cb=20161119163139"
    },
    { id: 11,
        name: 'Banshee',
        loot: [
            {
                id: 1,
                itemName: 'Vial of Ectoplasm',
                description: 'The ectoplasmic remains of the banshee can be used to create a potion of invisibility or an oil of etherealness',
                price: '300gp',
                rarity: 'Uncommon'
            },
            {
                id: 2,
                itemName: 'Spirit Dust',
                description: 'Acts as Dust of Disappearance',
                price: '150gp',
                rarity: 'Uncommon'
            },
            {
                id: 3,
                itemName: 'Banshee Dust',
                description: 'The dust of the banshee can be used to make a potion that grants the damage resistances and immunities of the Banshee for 1 minute',
                price: '500gp',
                rarity: 'Rare'
            },
            {
                id: 4,
                itemName: 'Spectral Skull',
                description: 'Once a day the holder may channel the power of the Banshees to use its Detect Life ability',
                price: '300gp',
                rarity: 'Rare'
            },
            {
                id: 5,
                itemName: 'Hierloom of the Banshee',
                description: 'A locket, gem encrusted comb, or some item of value held by the Banshee. It grants the user the Incorpreal Movement of the Banshee once per day',
                price: '400gp',
                rarity: 'Rare'
            },
            {
                id: 6,
                itemName: 'Spectral Head',
                description: 'The spectral head of the Banshee remains. When held the holder may use the banshees Wail ability once per day. The holder and his or her allies must make the save also.',
                price: '800gp',
                rarity: 'Rare'
            },
            {
                id: 7,
                itemName: 'Random Assortment of Art',
                description: 'The lair of the Banshee is filled with art, treasure, and valuable objects (Number 2d6)',
                price: '50gp each',
                rarity: 'Uncommon'
            }
        ],
        imageUrl: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/8/446/1000/1000/636306384206418474.jpeg"
    },
    { id: 12,
        name: 'Basilisk',
        loot: [
            {
                id: 1,
                itemName: 'Basilisk Eyes',
                description: 'Allows the holder to cast the spell Flesh to Stone with a save DC of 12. The eye is consumed after its use.',
                price: '500gp',
                rarity: 'Rare'
            },
            {
                id: 2,
                itemName: 'A Basilisk Egg',
                description: 'An egg that appears almost like a extremely weathered stone. If kept safe and warmed may hatch a baby basilisk',
                price: '2000gp',
                rarity: 'Very Rare'
            },
            {
                id: 3,
                itemName: 'Basilisk Tooth',
                description: 'If harvested correctly the tooth can be forged into a +1 dagger that deals an additional 2d6 poison damage.',
                price: '200gp',
                rarity: 'Uncommon'
            },
            {
                id: 4,
                itemName: 'Basilisk Stomach Acid',
                description: '3 vials can be filled with the Basilisk stomach acid. If crafted correctly this acid can create a potion to reverse pertification',
                price: '300gp per vial',
                rarity: 'Rare'
            }
        ],
        imageUrl: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/185/1000/1000/636252762168821795.jpeg"
    },
    { id: 13,
        name: 'Behir',
        loot: [
            {
                id: 1,
                itemName: 'Behir Claws',
                description: 'Can be crafted into a master crafted shortsword that does additional 1d10 damage against dragons',
                price: '300gp',
                rarity: 'Rare'
            },
            {
                id: 2,
                itemName: 'Behir Fangs',
                description: 'This fang can be crafted into a +1 longsword or a +1 greatsword. The sword does an additional 2d6 damage against dragons',
                price: '400gp',
                rarity: 'Rare'
            },
            {
                id: 3,
                itemName: 'Behir Skin',
                description: 'If harvested correctly the Behir skin can create a set of +1 studded leather armor that grants resistane to lightning damage',
                price: '500gp',
                rarity: 'Rare'
            },
            {
                id: 4,
                itemName: 'Behir Tail',
                description: 'If harvested correctly the tail can be used to create a magical +1 whip that deals 1d10 lightning damage.',
                price: '300gp',
                rarity: 'Rare'
            },
            {
                id: 5,
                itemName: 'Dragon Scales',
                description: 'Inside the Behirs stomach is a number of dragon scales from a recent fight. Roll a d10 for the number of scales',
                price: '100gp per scale',
                rarity: 'Rare'
            },
            {
                id: 6,
                itemName: 'Behirs Tongue',
                description: 'The Behirs tongue can be harvested to craft a magical +1 whip. Once per day the whip exhales the lightning breath of the Behir. All enemies in the blast must make a DC 16 dexterity save or take 12d10 lightning damage.',
                price: '1000gp',
                rarity: 'Very Rare'
            }
        ],
        imageUrl: "https://readytorole.files.wordpress.com/2018/01/behir.jpg"
    },
    { id: 14,
        name: 'Beholder',
        loot: [
            {
                id: 1,
                itemName: 'Central Eye',
                description: 'If the central eye is harvested correctly it can be used to create a sentinel shield. While the shield is equiped the user can not be surprised. Also the shields eye emits a cone of anti-magic in a 30 ft distance. A command word opens and closes the eye as a bonus action',
                price: '2000gp',
                rarity: 'Very Rare'
            },
            {
                id: 2,
                itemName: 'Lesser Eye',
                description: 'Roll a d10 to determine how many lesser eyes are left. Roll another d10 a for each eye stalk left to determine the ray type. Each eye can use the eye ray ability once a day',
                price: '500gp per eye',
                rarity: 'Very Rare'
            },
            {
                id: 3,
                itemName: 'Beholder Brain Fluid',
                description: 'A vail of the beholders brain fluid. It can be used as a component to summon a Spectator to aid the summoner',
                price: '700gp',
                rarity: 'Rare'
            },
            {
                id: 4,
                itemName: 'Beholder Guts',
                description: 'The guts of the Beholder can be used to create a potion of scrying. When the user drinks the potion they can use the Scrying spell once',
                price: '500gp',
                rarity: 'Rare'
            }
        ],
        imageUrl: "https://www.pngkey.com/png/detail/141-1413832_pirate-wizard-for-dungeons-and-dragons-dnd-5e.png"
    },
    { id: 15,
        name: 'Death Tyrant',
        loot: [
            {
                id: 1,
                itemName: 'Central Eye',
                description: 'The central eye of the Death Tyrant may be used to create a Sentinel Shield. The shield emits a negative energy cone of 30 ft. Any creature caught in the cone cant regain hitpoints and if killed in the cone becomes a zombified slave of the shields holder. A command word closes and opens the eye as a bonus action',
                price: '2000gp',
                rarity: 'Very Rare'
            },
            {
                id: 2,
                itemName: 'Lesser Eyes',
                description: 'Roll a d10 to determine how many lesser eyes are left. Roll another d10 a for each eye stalk left to determine the ray type. Each eye can use the eye ray ability once a day',
                price: '500gp per Eye',
                rarity: 'Very Rare'
            },
            {
                id: 3,
                itemName: 'Death Tyrant Ectoplasm',
                description: 'Enough to fill 5 vials. One vial allows the user to use the fly spell',
                price: '200gp',
                rarity: 'Rare'
            },
            {
                id: 4,
                itemName: 'Death Tyrant Skull',
                description: 'Can be crafted into an arcane focus. The skull then allows the user to cast the Create Undead spell once a day',
                price: '1000gp',
                rarity: 'Rare'
            }
        ],
        imageUrl: "https://www.aidedd.org/dnd/images/deathTyrant.jpg"
    },
    { id: 16,
        name: 'Spectator',
        loot: [
            {
                id: 1,
                itemName: 'Lesser Eyes',
                description: 'Roll a d4 to determine how many lesser eyes are left. Roll another d4 a for each eye stalk left to determine the ray type. Each eye can use the eye ray ability once a day',
                price: '500gp per Eye',
                rarity: 'Rare'
            },
            {
                id: 2,
                itemName: 'Spectator Hide',
                description: 'The hide can be crafted into +1 studded leather armor. When the wearer avoids a spell or passes a spells DC the spell is reflected back at the caster causing them to make the save themselves or take the spells attack',
                price: '1000gp',
                rarity: 'Very Rare'
            },
            {
                id: 3,
                itemName: 'Spectators Tongue',
                description: 'The tongue can be crafted into a +1 magical whip. Roll a d4 and the whip has the magical ability corresponding to the eye ray.',
                price: '500gp',
                rarity: 'Rare'
            },
            {
                id: 4,
                itemName: 'Spectator Saliva',
                description: 'The spectators saliva can fill 10 vials. Each vial can create three days worth of food and water magically. The food sustains the drinker for 24 hours',
                price: '200gp',
                rarity: 'Uncommon'
            }
        ],
        imageUrl: "https://thelostlighthouse.files.wordpress.com/2015/03/spectator.png"
    },
    { id: 17,
        name: 'Twig Blight',
        loot: [
            {
                id: 1,
                itemName: 'Blight Pollen',
                description: 'You collect three vials of pollen. If the pollen is thrown onto an enemy any blights within 5 miles will attack the target.',
                price: '100gp',
                rarity: 'Uncommon'
            },
            {
                id: 2,
                itemName: 'Blight Liquid',
                description: 'You collect one vial of blight liquid. When you drink the liquid you grow twigs all over your body gaining +2 to AC for 5 minutes',
                price: '100gp',
                rarity: 'Uncommon'
            },
            {
                id: 3,
                itemName: 'Gulthias Seeds',
                description: 'Upon opening the blights body you find three seeds. If planted by a character of evil alignment three blights will arise the next day under your command',
                price: '100gp',
                rarity: 'Uncommon'
            },
            {
                id: 4,
                itemName: 'Blight Bud',
                description: 'Within the skull of the blight is a bud. If thrown the bud causes the Grasping Vine spell on all enemies within 5ft of the thrown bulb',
                price: '200gp',
                rarity: 'Rare'
            },
            {
                id: 5,
                itemName: 'Blight Roots',
                description: 'You gather 3 Blight roots. When you chew one root you gain the blights false appearance granting you a +10 bonus to hiding in forests',
                price: '100gp',
                rarity: 'Uncommon'
            }
        ],
        imageUrl: "https://i.pinimg.com/originals/1d/7d/54/1d7d54175ef6c17951fbba6f5fac143e.jpg"
    },
    { id: 18,
        name: 'Vine Blight',
        loot: [
            {
                id: 1,
                itemName: 'Needle Blight Pollen',
                description: 'You collect three vials of pollen. If the pollen is thrown onto an enemy any needle blights within 5 miles will attack the target.',
                price: '100gp',
                rarity: 'Uncommon'
            },
            {
                id: 2,
                itemName: 'Blight Liquid',
                description: 'You collect one vial of blight liquid. When you drink the liquid your arms become almost vine like in nature granting you +5 to your reach for 5min',
                price: '100gp',
                rarity: 'Uncommon'
            },
            {
                id: 3,
                itemName: 'Gulthias Seeds',
                description: 'Upon opening the blights body you find three seeds. If planted by a character of evil alignment three blights will arise the next day under your command',
                price: '100gp',
                rarity: 'Uncommon'
            },
            {
                id: 4,
                itemName: 'Blight Bud',
                description: 'Within the skull of the blight is a bud. If thrown the bud causes the Grasping Vine spell on all enemies within 5ft of the thrown bulb',
                price: '200gp',
                rarity: 'Rare'
            },
            {
                id: 5,
                itemName: 'Blight Roots',
                description: 'You gather 3 Blight roots. When you chew one root you gain the blights false appearance granting you a +10 bonus to hiding in forests',
                price: '100gp',
                rarity: 'Uncommon'
            }
        ],
        imageUrl: "http://vignette4.wikia.nocookie.net/ravenloft/images/4/46/VineBlights.jpeg/revision/latest?cb=20161120203604"
    },
    { id: 19,
        name: 'Needle Blight',
        loot: [
            {
                id: 1,
                itemName: 'Needle Blight Pollen',
                description: 'You collect three vials of pollen. If the pollen is thrown onto an enemy any needle blights within 5 miles will attack the target.',
                price: '100gp',
                rarity: 'Uncommon'
            },
            {
                id: 2,
                itemName: 'Blight Liquid',
                description: 'You collect one vial of blight liquid. When you drink the liquid you grow needles all over your body gaining +1 to AC and any enemy who touches or melee attacks you takes 1d6 piercing damage for 5 minutes',
                price: '100gp',
                rarity: 'Uncommon'
            },
            {
                id: 3,
                itemName: 'Gulthias Seeds',
                description: 'Upon opening the blights body you find three seeds. If planted by a character of evil alignment three blights will arise the next day under your command',
                price: '100gp',
                rarity: 'Uncommon'
            },
            {
                id: 4,
                itemName: 'Blight Bud',
                description: 'Within the skull of the blight is a bud. If thrown the bud causes the Grasping Vine spell on all enemies within 5ft of the thrown bulb',
                price: '200gp',
                rarity: 'Rare'
            },
            {
                id: 5,
                itemName: 'Blight Roots',
                description: 'You gather 3 Blight roots. When you chew one root you gain the blights false appearance granting you a +10 bonus to hiding in forests',
                price: '100gp',
                rarity: 'Uncommon'
            }
        ],
        imageUrl: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/16/462/1000/1000/636376286057911052.png"
    },
    { id: 20,
        name: 'Bugbear',
        loot: [
            {
                id: 1,
                itemName: 'Weathered Morning Star',
                description: 'A normal morning star',
                price: '10gp',
                rarity: 'Common'
            },
            {
                id: 2,
                itemName: 'Torn Hide Armor',
                description: 'A set of normal hide armor',
                price: '15gp',
                rarity: 'Common'
            },
            {
                id: 3,
                itemName: 'Bugbear Tusks',
                description: 'Can be used to craft a necklace that grants the wearer +2 to intimidation checks against goblins',
                price: '50gp',
                rarity: 'Uncommon'
            },
            {
                id: 4,
                itemName: 'Amulet of Hruggek',
                description: 'An amulet that shows devotion to Hruggek. Gain a +2 to persuasion checks against other bugbears',
                price: '50gp',
                rarity: 'Uncommon'
            },
            {
                id: 5,
                itemName: 'Javelins',
                description: 'You find 5 Javelins',
                price: '15gp',
                rarity: 'Common'
            },
            {
                id: 6,
                itemName: 'Rations',
                description: 'You find rations for 5 days',
                price: '5gp',
                rarity: 'Common'
            }
        ],
        imageUrl: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/221/1000/1000/636252765234633232.jpeg"
    },
    { id: 21,
        name: 'Bugbear Chief',
        loot: [
            {
                id: 1,
                itemName: 'Weathered Morning Star',
                description: 'A normal morning star',
                price: '10gp',
                rarity: 'Common'
            },
            {
                id: 2,
                itemName: 'Weathered Chain Mail Shirt',
                description: 'A set of normal chain mail armor',
                price: '20gp',
                rarity: 'Common'
            },
            {
                id: 3,
                itemName: 'Bugbear Tusks',
                description: 'Can be used to craft a necklace that grants the wearer +2 to intimidation checks against goblins',
                price: '50gp',
                rarity: 'Uncommon'
            },
            {
                id: 4,
                itemName: 'Amulet of Hruggek',
                description: 'An amulet that shows devotion to Hruggek. Gain a +2 to persuasion checks against other bugbears',
                price: '50gp',
                rarity: 'Uncommon'
            },
            {
                id: 5,
                itemName: 'Javelins',
                description: 'You find 5 Javelins',
                price: '15gp',
                rarity: 'Common'
            },
            {
                id: 6,
                itemName: 'Rations',
                description: 'You find rations for 5 days',
                price: '5gp',
                rarity: 'Common'
            },
            {
                id: 7,
                itemName: 'Bugbear Heart',
                description: 'The heart can be used to craft a special potion that grants advantage on saving throws against being charmed, frightened, paralyzed, poisoned, stunned, or put to sleep for one hour',
                price: '200gp',
                rarity: 'Uncommon'
            }
        ],
        imageUrl: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/221/1000/1000/636252765234633232.jpeg"
    },
    { id: 22,
        name: 'Bulette',
        loot: [
            {
                id: 1,
                itemName: 'Bulette Head Plate',
                description: 'The head plate of the Bulette can be crafted into a +1 helm that grants the user tremor sense within 15ft',
                price: '500gp',
                rarity: 'Rare'
            },
            {
                id: 2,
                itemName: 'Bulette claws',
                description: 'These claws can be crafted into +1 gauntelts that grant the wearer a 20ft burrowing speed',
                price: '500gp',
                rarity: 'Rare'
            },
            {
                id: 3,
                itemName: 'Halfling Corpse',
                description: 'Inside the Bulettes stomach is a half digested halfing trader with a large coin purse',
                price: '100gp',
                rarity: 'Common'
            },
            {
                id: 5,
                itemName: 'Bulette Hide',
                description: 'With the Bulette hide you can create +1 hide armor or boots that allow the wearer to jump 15ft up and cause a seismic strike. All enemies within 15ft must make a DC 16 strenght or dexterity saving throw or fall prone.',
                price: '500gp',
                rarity: 'Rare'
            }
        ],
        imageUrl: "https://vignette.wikia.nocookie.net/vsdebating/images/0/05/Bulette.png/revision/latest?cb=20180220191159"
    },
    { id: 23,
        name: 'Bullywug',
        loot: [
            {
                id: 1,
                itemName: 'Bullywug Bones',
                description: 'The bullywug bones can be used to craft a magical flute that can summon a giant frog to fight for the user',
                price: '200gp',
                rarity: 'Rare'
            },
            {
                id: 2,
                itemName: 'Bullywug Slime',
                description: 'You can gather three vials of slime. These vials of slime can be crafted to grant the drinker the ability to breathe air and water for 1 hour',
                price: '150gp',
                rarity: 'Uncommon'
            },
            {
                id: 3,
                itemName: 'Bullywug guts',
                description: 'You gather the guts of the bullywug. You can smear the guts on your armor to grant you advantage on stealth checks in swamps',
                price: '100gp',
                rarity: 'Uncommon'
            },
            {
                id: 4,
                itemName: 'Bullywug Stomach',
                description: 'The bullywugs stomach can be used as a water skin',
                price: '5gp',
                rarity: 'Common'
            }
        ],
        imageUrl: "https://www.aidedd.org/dnd/images/bullywug.jpg"
    },
    { id: 24,
        name: 'Cambion',
        loot: [
            {
                id: 1,
                itemName: 'Burnt Spear',
                description: 'A normal spear burnt from the fires of hell',
                price: '5gp',
                rarity: 'Common'
            },
            {
                id: 2,
                itemName: 'Worn scale mail',
                description: 'Worn scale mail from years of combat',
                price: '25gp',
                rarity: 'Common'
            },
            {
                id: 3,
                itemName: 'Cambion Horns',
                description: 'Grinding the Cambions horns can create a potion of fire resistance that lasts for an hour',
                price: '100gp',
                rarity: 'Uncommon'
            },
            {
                id: 4,
                itemName: 'Cambion Wings',
                description: 'The cambion wings can be removed and made into +2 leather armor. Once a day it can grant the wearer a flying speed of 60ft for 10 minutes',
                price: '500gp',
                rarity: 'Rare'
            },
            {
                id: 5,
                itemName: 'Cambion Heart',
                description: 'The Cambions heart can be removed and used in a potion. The drinker must make a DC 14 wisdom saving throw or be charmed by the potion maker for 1 day. If the target takes damage or recieves a harmful command the drinker can make the saving throw again',
                price: '200gp',
                rarity: 'Rare'
            },
            {
                id: 6,
                itemName: 'Infernal Ring',
                description: 'A finely crafted gold ring with demonic runes covering it. The ring allows the wearer to cast Fire Ray 3 times a day.',
                price: '300gp',
                rarity: 'Rare'
            },
            {
                id: 7,
                itemName: 'Scroll of Plane Shift',
                description: 'A spell scroll of Plane Shift, allowing the user to travel between the planes of existence',
                price: '300gp',
                rarity: 'Rare'
            },
            {
                id: 8,
                itemName: 'Infernal Spear',
                description: 'This spear deals 1d8 piercing damage and 1d6 fire damage',
                price: '75gp',
                rarity: 'Uncommon'
            },
            {
                id: 9,
                itemName: 'Scarf of Disguises',
                description: 'This finely made silk scarf allows the wearer to use the alter self spell three times a day',
                price: '300gp',
                rarity: 'Rare'
            }
        ],
        imageUrl: "https://vignette.wikia.nocookie.net/forgottenrealms/images/c/c1/Monster_Manual_5e_-_Cambion_-_Milivoj_Ceran._-_p36.jpg/revision/latest/scale-to-width-down/350?cb=20160124231914"
    },
    { id: 25,
        name: 'Carrion Crawler',
        loot: [
            {
                id: 1,
                itemName: 'Carrion Crawler Venom',
                description: 'You can fill a vial with venom. The target must make a DC 13 constitution saving throw or take 1d4+3 poison damage. Until the target passes the check it is paralyzed. The target can repeat the saving throw at the end of his turn or wait one minute for the poison to stop',
                price: '150gp',
                rarity: 'Rare'
            },
            {
                id: 2,
                itemName: 'Carrion Guts',
                description: 'The carrion guts can be put into a potion to grant the drinker advantage on perception checks pertaining to smell for one hour',
                price: '100gp',
                rarity: 'Uncommon'
            },
            {
                id: 3,
                itemName: 'Carrion Slime',
                description: 'The slime of the carrion crawler can fill 3 vials. When poured on shoes or another object it gains the spider climb ability for 10 minutes',
                price: '5gp',
                rarity: 'Common'
            }
        ],
        imageUrl: "https://vignette.wikia.nocookie.net/forgottenrealms/images/9/96/Monster_Manual_5e_-_Carrion_Crawler_-_p37.jpg/revision/latest/scale-to-width-down/350?cb=20141110131238"
    },
    { id: 26,
        name: 'Centaur',
        loot: [
            {
                id: 1,
                itemName: 'Battered Pike',
                description: 'A normal pike worn from use',
                price: '6gp',
                rarity: 'Common'
            },
            {
                id: 2,
                itemName: 'Elven Arrows',
                description: 'Finely crafted +1 elven arrows. Roll a d20 for the number of arrows ',
                price: '1gp per arrow',
                rarity: 'Common'
            },
            {
                id: 3,
                itemName: 'Centaur Arrows',
                description: 'Rugged centaur arrows, slightly thicker and larger then normal arrows that deal an additional +2 damage. These arrows gain a +1 when firing from horseback',
                price: '1gp',
                rarity: 'Common'
            },
            {
                id: 4,
                itemName: 'Centaur Bow',
                description: 'A larger and stronger bow then their two legged counter parts. This bow deals 2d6 damage and gains a +1 when firing from horseback',
                price: '12gp',
                rarity: 'Common'
            },
            {
                id: 5,
                itemName: 'Dragon Knuckle Bones',
                description: 'These magic knuckle bones grant the user some sight into the future. Once a day the user may throw the bones and use the Augury spells to fortell the future',
                price: '50gp',
                rarity: 'Uncommon'
            },
            {
                id: 6,
                itemName: 'Centaur Hooves',
                description: 'The hooves can be used to make powerful health potions. The potions heal 2d8',
                price: '100gp',
                rarity: 'Uncommon'
            },
            {
                id: 7,
                itemName: 'Random Assortment of Animal Pelts',
                description: 'A random assortment of animal pelts from the centaurs hunts. Roll 1d10 for the amount of pelts',
                price: '25gp per pelt',
                rarity: 'Common'
            },
            {
                id: 8,
                itemName: 'Random Assortment of Animal Meat',
                description: 'A random assortment of meat. Roll 1d10 for pounds of meat',
                price: '5gp per pound',
                rarity: 'Common'
            },
            {
                id: 9,
                itemName: 'Tribal Amulet',
                description: 'An amulet made of hemp, feathers, talons, claws, and other assortment of wild life. A sign of membership in a centaur tribe',
                price: '50gp',
                rarity: 'Common'
            },
            {
                id: 10,
                itemName: 'Wood Strider Gauntlets',
                description: 'Wooden gauntlets made of ancient tree bark, and coverd in moss and elven runes. When wearing the gauntlets you always sense the right direction to go. Gain a +4 to all survival checks to find the right direction in wood lands',
                price: '200gp',
                rarity: 'Uncommon'
            }
        ],
        imageUrl: "https://vignette.wikia.nocookie.net/forgottenrealms/images/c/cc/Centaur-5e.jpg/revision/latest?cb=20160921034622"
    },
    { id: 27,
        name: 'Chimera',
        loot: [
            {
                id: 1,
                itemName: 'Goat Milk',
                description: 'Enough milk for 1d4 vials',
                price: '1gp',
                rarity: 'Common'
            },
            {
                id: 2,
                itemName: 'Lion Pelt',
                description: 'A magical lion pelt that allows you to make +2 leather armor',
                price: '200gp',
                rarity: 'Uncommon'
            },
            {
                id: 3,
                itemName: 'Goat Horn',
                description: 'This chimeras goat horn can be carved into a horn that if blown can summon 1d20 Goats to aid you in battle. Can be used once a day.',
                price: '400gp',
                rarity: 'Rare'
            },
            {
                id: 4,
                itemName: 'Dragon Saliva',
                description: 'Anything coated with this liquid gains resistance to fire damage for 1 hour',
                price: '150gp',
                rarity: 'Rare'
            },
            {
                id: 5,
                itemName: 'Dragon Fang Earing',
                description: 'This earing grants the wearer +1 on intimidation checks',
                price: '100gp',
                rarity: 'Uncommon'
            },
            {
                id: 6,
                itemName: 'Lions Eye',
                description: 'This eye allows the holder to cast compelled duel three times a day',
                price: '100gp',
                rarity: 'Uncommon'
            },
            {
                id: 7,
                itemName: 'Bag of Gold',
                description: 'A bag filled with gold pieces',
                price: '500gp',
                rarity: 'Common'
            },
            {
                id: 8,
                itemName: 'Half digested chain mail shirt',
                description: 'If repaired it can be restored to a +1 chain mail shirt',
                price: '100gp',
                rarity: 'Common'
            },
            {
                id: 9,
                itemName: 'Chimera Blood',
                description: 'The blood of the chimera can be made into a posion that makes people more susceptible to being flattered. Gain advantage on persuasion checks against the target of the posion.',
                price: '200gp',
                rarity: 'Uncommon'
            },
            {
                id: 10,
                itemName: 'Half eaten bag of kitty kibbles',
                description: 'Any cat that you feed this to is instantly charmed and will obey your commands.',
                price: '50gp',
                rarity: 'Uncommon'
            }
        ],
        imageUrl: "https://vignette.wikia.nocookie.net/forgottenrealms/images/7/79/Monster_Manual_5e_-_Chimera_-_p39.jpg/revision/latest?cb=20141110164246"
    },
    { id: 28,
        name: 'Chuul',
        loot: [
            {
                id: 1,
                itemName: 'Chuul Tentacle',
                description: 'Can be used to create a magial whip. If a magic caster is hit by the whip roll a DC 13 will saving throw or be unable to cast magic for one turn.',
                price: '300gp',
                rarity: 'Rare'
            },
            {
                id: 2,
                itemName: 'Chuul Tentacles',
                description: 'Can be ground into a fine powder that can be thrown. The dust covers an area of 20ft causing all those within to pass a DC 13 constitution saving throw or be paralyzed for 1 minute.',
                price: '80gp',
                rarity: 'Rare'
            },
            {
                id: 3,
                itemName: 'Sea Weed',
                description: 'Delicious sea weeds',
                price: '1gp',
                rarity: 'Common'
            },
            {
                id: 4,
                itemName: 'Barnacles',
                description: '1d8 barnacles cover this creatures body.',
                price: '1gp',
                rarity: 'Common'
            },
            {
                id: 5,
                itemName: 'Gold Dabloons',
                description: 'A small sack of 50 gold dabloons sit in this creatures belly',
                price: '50gp',
                rarity: 'Common'
            },
            {
                id: 6,
                itemName: 'Chuul Brain',
                description: 'Can be crafted into a magic item that allows you to detect magic up to 120 ft away',
                price: '100gp',
                rarity: 'Uncommon'
            },
            {
                id: 7,
                itemName: 'Pearls',
                description: 'Inside the gullet of this beast rests 3 beautiful pearls',
                price: '100gp per pearl',
                rarity: 'Uncommon'
            },
            {
                id: 8,
                itemName: 'Chuul Scales',
                description: 'The scales hum faintly when a magic item is within 90 ft. Roll 1d100 for scale amount',
                price: '5gp per scale',
                rarity: 'Common'
            },
            {
                id: 9,
                itemName: 'Chuul Guts',
                description: 'The guts of the chuul can be used as an ingredient for a potion that grants resistance to posion for 1 hour',
                price: '1gp',
                rarity: 'Common'
            },
            {
                id: 10,
                itemName: 'Chuul Blood',
                description: 'When harvested the chuuls blood can grant the drinker water breathing for 10 minutes.',
                price: '1gp',
                rarity: 'Common'
            }
        ],
        imageUrl: "https://www.aidedd.org/dnd/images/chuul.jpg"
    },
    { id: 29,
        name: 'Cloaker',
        loot: [
            {
                id: 1,
                itemName: 'Cloaker Pelt',
                description: 'The pelt can be crafted into a cloak that allows the wearer to gain a +2 bonus to stealth when stationary',
                price: '75gp',
                rarity: 'Uncommon'
            },
            {
                id: 2,
                itemName: 'Cloaker Pelt',
                description: 'This pelt can be crafted to make a powerful net. When an attack using this net is successfully made the enemy must make a DC 16 strength check or be enveloped in the net causing blindness and inhibiting them from breathing',
                price: '300gp',
                rarity: 'Rare'
            },
            {
                id: 3,
                itemName: 'Cloaker Pelt',
                description: 'This pelt can be crafted into a cloak that grants the wearer the ability to cast mirror image on themselves once per day',
                price: '300gp',
                rarity: 'Rare'
            },
            {
                id: 4,
                itemName: 'Cloaker Skull',
                description: 'The skull can be crafted into a horn. When this horn is blown all enemies within 60ft must make a DC 13 wisdom save or become frightened for one minute. The save may be repeated at the end of their turn',
                price: '200gp',
                rarity: 'Rare'
            },
            {
                id: 5,
                itemName: 'Cloaker Tail',
                description: 'This tail can be crafted into a +1 whip that grants an extra 1d6 damage against abberations',
                price: '1gp',
                rarity: 'Common'
            }
        ],
        imageUrl: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/245/1000/1000/636252767458838228.jpeg"
    },
    { id: 30,
        name: 'Cockatrice',
        loot: [
            {
                id: 1,
                itemName: 'Cockatrice Venom',
                description: "You can harvest the venom of the Cockatrice. A target affected by the venom must make a DC 11 constitution save or become pertified. The target may repeat the save one more time before being pertified for 24 hours",
                price: '200gp',
                rarity: 'Rare'
            },
            {
                id: 2,
                itemName: 'Handful of Berries',
                description: 'There are ten small glowing berries. These act as good berries restoring 2 hit points per berry',
                price: '1gp',
                rarity: 'Common'
            },
            {
                id: 3,
                itemName: 'Rat Carcass',
                description: 'A half digested rat carcass, maybe it can be scavenged for a snack',
                price: '1gp',
                rarity: 'Common'
            }
        ],
        imageUrl: "https://vignette.wikia.nocookie.net/forgottenrealms/images/6/6d/Cockatrice-5e.jpg/revision/latest?cb=20161119200531"
    },
    { id: 31,
        name: 'Couatl',
        loot: [
            {
                id: 1,
                itemName: 'Rat Carcass',
                description: 'A half digested rat carcass, maybe it can be scavenged for a snack',
                price: '1gp',
                rarity: 'Common'
            },
            {
                id: 2,
                itemName: 'Couatl Hide',
                description: 'The hide can be crafted into leather armor that grants resistance to radiant damage',
                price: '100gp',
                rarity: 'Uncommon'
            },
            {
                id: 3,
                itemName: 'Couatl Egg',
                description: 'Inside the belly lies a gem like egg that if taken care of hatches a Couatl',
                price: '1000gp',
                rarity: 'Rare'
            },
            {
                id: 4,
                itemName: 'Couatl Saliva',
                description: 'The saliva can be crafted into a venom. When ingested the target must make a DC 13 constitution saving throw or be poisoned for 24 hours. During this time the target is unconscious but can be awoken if shook. ',
                price: '200gp',
                rarity: 'Uncommon'
            },
            {
                id: 5,
                itemName: 'Couatl Blood',
                description: 'The blood of the Couatl can be harvested to create a potion of change shape. This ability is similar to the Couatls ability to change shape excpet you can use your player level. This potion lasts 24 hours',
                price: '300gp',
                rarity: 'Rare'
            }
        ],
        imageUrl: "https://i.pinimg.com/originals/fe/a3/c3/fea3c330780e39e372c5414b83671321.jpg"
    },
    { id: 32,
        name: 'Crawling Claw',
        loot: [
            {
                id: 1,
                itemName: 'Gold Rings',
                description: 'Roll a 1d4, this is the number of gold rings on the hand',
                price: '50gp per ring',
                rarity: 'Common'
            },
            {
                id: 2,
                itemName: 'Corrupted Hand',
                description: 'This corrupted hand can focus necromantic spells granting a +1 to all necromancy spells',
                price: '200gp',
                rarity: 'Rare'
            },
            {
                id: 3,
                itemName: 'Ring Evasion',
                description: 'A magical ring that grants the user the ability to automatically pass dexterity saving throws. Has three charges a day',
                price: '300gp',
                rarity: 'Rare'
            },
            {
                id: 4,
                itemName: 'Ring of Featherfall',
                description: 'When you fall while wearing this ring, you descend 60 feet per round and take no damage from falling',
                price: '300gp',
                rarity: 'Rare'
            },
            {
                id: 5,
                itemName: 'Ring of Protection',
                description: 'You gain a +1 bonus to AC and saving throws while wearing this ring.',
                price: '400gp',
                rarity: 'Uncommon'
            },
            {
                id: 6,
                itemName: 'Ring of Telekinesis',
                description: 'While wearing this ring, you can cast the telekinesis spell at will, but you can target only objects that aren’t being worn or carried.',
                price: '1000gp per ring',
                rarity: 'Very Rare'
            },
            {
                id: 7,
                itemName: 'Ring of Resistance',
                description: 'This ring grants the user resistance to radiant damage.',
                price: '400gp',
                rarity: 'Uncommon'
            },
            {
                id: 8,
                itemName: 'Magical Gem Stone',
                description: 'This magical stone is implanted into the hand, after touching the stone you know the general direction of the necromancer who created the hand.',
                price: '200gp',
                rarity: 'Uncommon'
            }
        ],
        imageUrl: "https://vignette.wikia.nocookie.net/forgottenrealms/images/1/1e/Crawling_claw_5e.jpg/revision/latest?cb=20161120044855"
    },
    { id: 33,
        name: 'Cyclops',
        loot: [
            {
                id: 1,
                itemName: 'Pet Rock',
                description: 'You find a hand sized rock with a crudely painted face on it',
                price: '1gp',
                rarity: 'Uncommon'
            },
            {
                id: 2,
                itemName: 'A pair of glasses with one lense popped out',
                description: 'A pair of normal eye glasses with a single lense. The frame is bent strangely to fit the cyclops head',
                price: '10gp',
                rarity: 'Uncommon'
            },
            {
                id: 3,
                itemName: 'Great Club',
                description: 'A giant tree with its branches and limbs removed creating a giant club',
                price: '6gp',
                rarity: 'Uncommon'
            },
            {
                id: 4,
                itemName: 'Giant Toenails',
                description: 'Giant cyclops toenails, roll a 1d10 for the amount',
                price: '3gp per toenail',
                rarity: 'Uncommon'
            },
            {
                id: 5,
                itemName: 'A Giant Silver Spoon',
                description: 'Where did a cyclops get a giant silver spoon? No idea!',
                price: '100gp',
                rarity: 'Uncommon'
            },
            {
                id: 6,
                itemName: 'A Live Goat',
                description: 'Inside the cyclops bag is a live goat with a tag. Written on the tag is the name Wilber',
                price: '10gp',
                rarity: 'Uncommon'
            },
            {
                id: 7,
                itemName: 'A Bag Full of Shells',
                description: 'A random assortment of sea shells, and insect shells',
                price: '100gp',
                rarity: 'Uncommon'
            },
            {
                id: 8,
                itemName: 'Magical Eye Drops',
                description: 'Magical cyclops eye drops that grant the user a +1 on their perception checks for 1 hour',
                price: '100gp',
                rarity: 'Uncommon'
            },
            {
                id: 9,
                itemName: 'A Crudley Written Love Letter',
                description: 'A badly written love letter for a cyclops named Iris',
                price: '1gp',
                rarity: 'Uncommon'
            },
            {
                id: 10,
                itemName: 'Giant loin cloth',
                description: 'A large dirty loin cloth fit for a cyclops',
                price: '3gp',
                rarity: 'Uncommon'
            }
        ],
        imageUrl: "https://i.pinimg.com/originals/50/41/96/5041960d03d290fb11462e1e0f012d3e.jpg"
    },
    { id: 34,
        name: 'Darkmantle',
        loot: [
            {
                id: 1,
                itemName: 'Dark Mantle Body',
                description: 'The corpse of the Dark Mantle can be crafted into a helm that grants the wearer blindsight and echolocation within 60 ft',
                price: '300gp',
                rarity: 'Rare'
            },
            {
                id: 2,
                itemName: 'Dark Mantle Heart',
                description: 'The heart of the Dark Mantle can be used to cast a 15 ft radius of magical darkness for 10 minutes',
                price: '500gp',
                rarity: 'Uncommon'
            },
            {
                id: 3,
                itemName: 'Dark Mantle Suction Cups',
                description: 'The suction cups of the Dark Mantle can be used to craft slippers of spider climb',
                price: '350gp',
                rarity: 'Uncommon'
            }
        ],
        imageUrl: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/263/1000/1000/636252768676699519.jpeg"
    },
    { id: 35,
        name: 'Death Knight',
        loot: [
            {
                id: 1,
                itemName: 'Death Knight Longsword',
                description: 'The Death Knights sword, this corrupted blade is a normal longsword except it deals 4d8 necrotic damage. In addition it allows the user to cast compelled duel once a day',
                price: '600gp',
                rarity: 'Rare'
            },
            {
                id: 2,
                itemName: 'Death Knights Cape',
                description: 'This allows the wearer to command any undead under their command more effectively. All undead within 60ft gain advantage on saving throws that turn undead',
                price: '400gp',
                rarity: 'Rare'
            },
            {
                id: 3,
                itemName: 'Hellfire Orb',
                description: 'This firey orb allows the user to use the Death Knights Hellfire orb once per day',
                price: '500gp',
                rarity: 'Rare'
            },
            {
                id: 3,
                itemName: 'Death Knight Helm',
                description: 'Grants the wearer darkvision for 120 ft and the ability to speak Abyssal',
                price: '350gp',
                rarity: 'Rare'
            },
            {
                id: 4,
                itemName: 'Death Knight Plate',
                description: 'This is a +1 set of plate armor, in addition it grants the wearer magic resistance',
                price: '350gp',
                rarity: 'Uncommon'
            },
            {
                id: 5,
                itemName: 'Worn Shield',
                description: 'A finely crafted shield marked with demonic runes',
                price: '50gp',
                rarity: 'Common'
            },
            {
                id: 6,
                itemName: 'Death Knights Hand',
                description: 'The desecrated hand of the death knight allows the user to cast banishment once per day.',
                price: '500gp',
                rarity: 'Rare'
            },
            {
                id: 7,
                itemName: 'Belt of Reanimation',
                description: 'When this belt is wrapped around a dead enemy it reanimates the corpse putting it under the control of the person that put the belt on',
                price: '600gp',
                rarity: 'Rare'
            },
            {
                id: 8,
                itemName: 'An Unholy Symbol',
                description: 'This unholy symbol grants a +1 to all necromantic spells',
                price: '250gp',
                rarity: 'Rare'
            },
            {
                id: 9,
                itemName: 'Death Knights Skull',
                description: 'This allows the user to summon a skeletal warhorse. As long as the user has the skull the horse is under the users control',
                price: '350gp',
                rarity: 'Rare'
            },
            {
                id: 10,
                itemName: 'Stone of Sending',
                description: 'A sending stone marked with a rune of the Death Knights benefactor',
                price: '250gp',
                rarity: 'Rare'
            },
            {
                id: 11,
                itemName: 'Dark Crusade Bible',
                description: 'Contains a list of dark profanities, and plans for corrupting key heroes and locations',
                price: '100gp',
                rarity: 'Rare'
            },
            {
                id: 12,
                itemName: 'Desecrated Bones',
                description: 'The bones of one of the Death Knights victims. Who could it have been? Are they haunted?',
                price: '3gp',
                rarity: 'Common'
            },
            {
                id: 13,
                itemName: 'A Jar of Grave Dirt',
                description: 'A jar of desecrated earth, when thrown on an enemy summons a shadow to attack the targeted enemy',
                price: '250gp',
                rarity: 'Rare'
            }
        ],
        imageUrl: "https://vignette.wikia.nocookie.net/officialbestiary/images/a/a4/DeathKnightF.jpg/revision/latest?cb=20150630135221"
    },
    { id: 36,
        name: 'Demilich',
        loot: [
            {
                id: 1,
                itemName: 'Demilich Teeth',
                description: 'The teeth of a Demilich can be grounded into a potion that can be made into a potion of resistance. Choose one of the damage immunities of the Demilich as the resistance type. This potion lasts for 5 minutes',
                price: '150gp',
                rarity: 'Rare'
            },
            {
                id: 2,
                itemName: 'Vail of Ectoplasm',
                description: 'The ectoplasm of the Demilich can be used to create a potion of invisiblity',
                price: '250gp',
                rarity: 'Rare'
            },
            {
                id: 3,
                itemName: 'Demilich Skull',
                description: 'The skull can be crafted into a magical flute that when played causes the Demilichs howl ability',
                price: '1000gp',
                rarity: 'Very Rare'
            },
            {
                id: 4,
                itemName: 'Left Eye of the Demilich',
                description: 'The magical essence of the Demilichs left eye grants the holder a 30 ft flying speed',
                price: '500gp',
                rarity: 'Rare'
            },
            {
                id: 5,
                itemName: 'Demilich Dust',
                description: 'You gather three piles of dust. When thrown on an enemy they must make a DC 15 constitution saving throw or become blinded for 1d4 rounds',
                price: '400gp',
                rarity: 'Rare'
            },
            {
                id: 6,
                itemName: 'Right Eye of the Demilich',
                description: 'The right eye of the demilich grants the holder the ability to use the demilichs energy drain three times per day',
                price: '700gp',
                rarity: 'Rare'
            },
            {
                id: 7,
                itemName: 'Jaw Bone of the Demilich',
                description: 'The jawbone is infused with the vile curse ability of the Demilich. For as long as the jawbone is held the creature is under the effects of the vile curse of the demilich',
                price: '600gp',
                rarity: 'Rare'
            },
            {
                id: 8,
                itemName: 'Necromantic Spell Book',
                description: 'A spell book filled with necromantic rituals and spells. Is the path to lichdom hidden in the pages?',
                price: '800gp',
                rarity: 'Very Rare'
            },
            {
                id: 9,
                itemName: 'Phylactery',
                description: 'Countless souls have fed this evil gem. The gem itself is of extremely value and could fetch a pretty penny',
                price: '1000gp',
                rarity: 'Legendary'
            },
            {
                id: 10,
                itemName: 'Items from a Past Life',
                description: 'An assortment of trinkets, pictures, and art from a past life',
                price: '50gp',
                rarity: 'Common'
            },
            {
                id: 11,
                itemName: 'Family Painting',
                description: 'A family painting portraying a man with his wife and children',
                price: '15gp',
                rarity: 'Common'
            },
            {
                id: 12,
                itemName: 'Assorted Gems',
                description: 'A bag of assorted gems of great value. Roll a d20 for the amount of gems',
                price: '100gp per gem',
                rarity: 'Rare'
            },
            {
                id: 13,
                itemName: 'Black Necromancer Cloak',
                description: 'A black cloak marked with necromantic symbols. Grants a +1 to necromantic spells',
                price: '300gp',
                rarity: 'Rare'
            },
            {
                id: 14,
                itemName: 'A wand of black wood',
                description: 'This black wood wand allows the user to cast the spell vampiric touch 3 times a day',
                price: '600gp',
                rarity: 'Rare'
            },
            {
                id: 15,
                itemName: 'A Soul Gem',
                description: 'A gem pulsing with the dread of hundreds of souls. Could it be used to fuel necromantic powers?',
                price: '800gp',
                rarity: 'Very Rare'
            }
        ],
        imageUrl: "https://vignette.wikia.nocookie.net/forgottenrealms/images/5/5c/Monster_Manual_5e_-_Demilich_-_p48.jpg/revision/latest?cb=20141111110849"
    },
    { id: 37,
        name: 'Balor',
        loot: [
            {
                id: 1,
                itemName: 'Longsword of the Balor',
                description: 'A massive blade with white lightning crackling up its side. The blade does 1d8 slashing damage and 3d8 lightning damage',
                price: '300gp',
                rarity: 'Rare'
            },
            {
                id: 2,
                itemName: 'Whip of the Balor',
                description: 'This fiery whip has a range of 30 ft and does 1d6 slashing damage and 3d8 fire damage',
                price: '300gp',
                rarity: 'Rare'
            },
            {
                id: 3,
                itemName: 'Balor Horn',
                description: 'This horn can be crafted into a magical horn that summons 1d4 manes, or one Barlgura',
                price: '500gp',
                rarity: 'Rare'
            },
            {
                id: 4,
                itemName: 'Balor Chains',
                description: 'These chains course with fiery energy. When an enemy enters within 5ft of the wearer they take 3d6 fire damage',
                price: '700gp',
                rarity: 'Rare'
            },
            {
                id: 5,
                itemName: 'Right Eye of the Balor',
                description: 'The right eye of the Balor grants the holder the ability to teleport 120 ft',
                price: '600gp',
                rarity: 'Rare'
            },
            {
                id: 6,
                itemName: 'An Opened Scroll',
                description: 'A scroll made from some kind of flesh. Inside is listed names of those who owe the balor their soul',
                price: '10gp',
                rarity: 'Common'
            },
            {
                id: 7,
                itemName: 'Balors Wings',
                description: 'The wings can be harvested and crafted to create magic wings that grant the wearer an 80 ft flying speed.',
                price: '500gp',
                rarity: 'Rare'
            },
            {
                id: 8,
                itemName: 'Demonic Amulet',
                description: 'This demonic amulet radiates with heat. This amulet grants the wearer resistance to fire damage',
                price: '300gp',
                rarity: 'Rare'
            },
            {
                id: 9,
                itemName: 'Balors Heart',
                description: 'When shown all demons within eye sight of the heart must make a DC 20 wisdom saving throw or become afraid of the hearts holder',
                price: '600gp',
                rarity: 'Rare'
            },
            {
                id: 10,
                itemName: 'Scroll of Orders',
                description: 'Inside the scroll is listed the demons orders to destroy the nearby town, hero, or devil',
                price: '50gp',
                rarity: 'Uncommon'
            },
            {
                id: 11,
                itemName: 'Plane Traveling Scroll',
                description: 'Inside this scroll is a spell to open a portal to the demons home plane',
                price: '300gp',
                rarity: 'Rare'
            },
            {
                id: 12,
                itemName: 'Balors Tongue',
                description: 'Hot to the touch. The tongue grants the holder the ability to speak Abyssal while being held',
                price: '300gp',
                rarity: 'Rare'
            },
            {
                id: 13,
                itemName: 'Ashes of the Balor',
                description: 'The ashes can be used in a summoning ritual to summon the destroyed Balor from its plane. Will it help you or destroy you?',
                price: '2000gp',
                rarity: 'Legendary'
            },
            {
                id: 14,
                itemName: 'Skeleton Shaped Key',
                description: 'A single key is hooked on to a chain. What does it lead to? The Balors treasure? Its fortress?',
                price: '300gp',
                rarity: 'Rare'
            },
            {
                id: 15,
                itemName: 'Collection of Skulls',
                description: 'The Balor has a collection of skulls from enemies it has defeated. Some are from creatures youve never seen',
                price: '100gp',
                rarity: 'Uncommon'
            },
            {
                id: 16,
                itemName: 'Adventurers Notebook',
                description: 'An adventurers journal marking down the location of the demons true name',
                price: '300gp',
                rarity: 'Rare'
            }
        ],
        imageUrl: "https://i.imgur.com/Hjjw1Y0.jpg"
    },
    { id: 38,
        name: 'Barlgura',
        loot: [
            {
                id: 1,
                itemName: 'Adventurers Notebook',
                description: 'An adventurers journal marking down the location of the demons true name',
                price: '300gp',
                rarity: 'Rare'
            },
            {
                id: 2,
                itemName: 'Collection of Skulls',
                description: 'The Barlgura has a collection of skulls from enemies it has defeated. Some are from creatures youve never seen',
                price: '100gp',
                rarity: 'Uncommon'
            },
            {
                id: 3,
                itemName: 'Gauntlets of the Barlgura',
                description: 'These gauntlets grant the wearer the reckless attack ability of the Barlgura',
                price: '500gp',
                rarity: 'Rare'
            },
            {
                id: 4,
                itemName: 'Trophy from an Adventurer',
                description: 'The head of a defeated adventurer kept as a trophy',
                price: '1gp',
                rarity: 'Common'
            },
            {
                id: 4,
                itemName: 'Balgura Lip Piercing',
                description: 'This piercing fills the user with unrelenting rage. The wearer may rage once per day but is unable to chose the targets he attacks',
                price: '700gp',
                rarity: 'Rare'
            },
            {
                id: 5,
                itemName: 'Bag of Bones',
                description: 'A bag filled with bones of conquered enemies',
                price: '1gp',
                rarity: 'Common'
            },
            {
                id: 6,
                itemName: 'Barlgura Loin Cloth',
                description: 'This loin cloth fills the wearer with the Barlgura strength. They can long jump 40 ft and high jump 20 ft',
                price: '300gp',
                rarity: 'Rare'
            },
            {
                id: 7,
                itemName: 'Balgura Totem',
                description: 'A totem made from the remains of its enemies. A mark of power amongst Barlgura',
                price: '100gp',
                rarity: 'Uncommon'
            },
            {
                id: 8,
                itemName: 'Barlgura Ring',
                description: 'A spectral Balgura fist errupts from the ring when the wearer makes an unarmed strike. The strike deals 1d10 damage',
                price: '500gp',
                rarity: 'Rare'
            },
            {
                id: 9,
                itemName: 'Sack of Random Trinkets',
                description: 'A sack filled with golden goblets, rings, silverware, table cloths, and whatever else the Barlgura finds of value',
                price: '150gp',
                rarity: 'Uncommon'
            },
            {
                id: 10,
                itemName: 'Barlgura Tusk',
                description: 'These tusks can be crafted into an amulet that grants the wearer +1 to their strength',
                price: '300gp',
                rarity: 'Rare'
            }
        ],
        imageUrl: "https://i.pinimg.com/originals/6c/d2/6e/6cd26e2bd0f2a73b3854f64fbc10f21f.jpg"
    },
    { id: 39,
        name: 'Chasme',
        loot: [
            {
                id: 1,
                itemName: 'A List of AWOL Demons',
                description: 'A list of demons that have fled the service of their master. It contains a list of true names',
                price: '300gp',
                rarity: 'Rare'
            },
            {
                id: 2,
                itemName: 'Chasme Venom',
                description: 'The venom of the Chasme can fill 3 vials. Any creature that touches this venom must make a DC 12 constitution check or take 7d6 necrotic damage, on a successful save they take half damage. Any creature dropped to 0 hit points by this venom instantly die',
                price: '150gp per vial',
                rarity: 'Rare'
            },
            {
                id: 3,
                itemName: 'Chasme Proboscis',
                description: 'This proboscis can be crafted into a magical instrument that emits a painful drone. The user may use the Chasmes drone ability once per day',
                price: '500gp',
                rarity: 'Rare'
            },
            {
                id: 4,
                itemName: 'Chasme Guts',
                description: 'The guts of the Chasme can be painted on an object to grant it the spider climb ability for 10 minutes',
                price: '150gp',
                rarity: 'Uncommon'
            },
            {
                id: 5,
                itemName: 'Chasme Eyes ',
                description: 'The eyes of the Chasme can be crafted into goggles that grant the wearer blindsight for 10 ft and dark vision for 120 ft',
                price: '600gp',
                rarity: 'Rare'
            },
            {
                id: 6,
                itemName: 'Interrogation Notes',
                description: 'The Chasme holds notes of the last demon it interrogated and tortured. It seems like the demon stole some treasure from its demon lord',
                price: '50gp',
                rarity: 'Rare'
            },
            {
                id: 7,
                itemName: 'Chasme Wings',
                description: 'These wings can be crafted to grant the wearer a 60 ft flying speed',
                price: '300gp',
                rarity: 'Rare'
            },
            {
                id: 8,
                itemName: 'Chasme Icor',
                description: 'This icor can be ingested to grant the user resistance against necrotic damage for 10 minutes',
                price: '150gp',
                rarity: 'Uncommon'
            },
            {
                id: 9,
                itemName: 'Demonic Sending Stone',
                description: 'This sending stone is connected to the Chasmes demon lord',
                price: '300gp',
                rarity: 'Rare'
            },
            {
                id: 10,
                itemName: 'Chasme Proboscis',
                description: 'This proboscis can be crafted into a +1 lance that deals an additional 3d6 necortic damage',
                price: '300gp',
                rarity: 'Rare'
            }
        ],
        imageUrl: "https://i.pinimg.com/originals/a6/20/df/a620dfa1ee75f1a00ad0e90bb6447a8e.jpg"
    },
    { id: 40,
        name: 'Dretch',
        loot: [
            {
                id: 1,
                itemName: 'Dretch Gas',
                description: 'Enough to fill a vial. When the vial is thrown it creates a 10 foot radius of disgusting gas. All creatures caught in the gas must make a DC 11 constitution saving throw or become poisoned for 1d4 rounds',
                price: '150gp',
                rarity: 'Uncommon'
            },
            {
                id: 2,
                itemName: 'Dretch Brain Fluid',
                description: 'The brain fluid of the dretch can be crafted into a potion that allows the drinker to understand Abyssal for 1 hour',
                price: '300gp',
                rarity: 'Uncommon'
            },
            {
                id: 3,
                itemName: 'Random odds and ends',
                description: 'The dretch is holding in his bag an assortment of random items such as a quill, ink well, iron pot, cooking salt, and more',
                price: '50gp',
                rarity: 'Common'
            },
            {
                id: 4,
                itemName: 'A Journal of a Wizard',
                description: 'A journal filled with the notes of a power hungry wizard. It seems like he sold his soul for information beyond this world. Is he a dretch now?',
                price: '10gp',
                rarity: 'Common'
            },
            {
                id: 5,
                itemName: 'Rancid Meat',
                description: 'Inside the Dretchs bag is a couple pounds of rancid meat',
                price: '1gp',
                rarity: 'Common'
            },
            {
                id: 6,
                itemName: 'A golden helmet',
                description: 'This dretch was wearing a golden helmet he took from a random adventurer',
                price: '100gp',
                rarity: 'Uncommon'
            },
            {
                id: 7,
                itemName: 'Trophy Necklace',
                description: 'A necklace made of parts of his defeated enemies. The necklace is made of fangs, fingers, wisps of hair, and more',
                price: '3gp',
                rarity: 'Common'
            },
            {
                id: 8,
                itemName: 'A Small Rune Covered Rock',
                description: 'A small rune covered rock is hidden in the base of the dretchs skull. The runic rock pulses with mind control magic, who placed it there?',
                price: '100gp',
                rarity: 'Rare'
            },
            {
                id: 9,
                itemName: 'Dretch Pelt',
                description: 'The dretch can be skinned to create a set of leather armor that grants resistance to cold, fire, and lightning damage',
                price: '700gp',
                rarity: 'Rare'
            },
            {
                id: 10,
                itemName: 'Bag of Bones',
                description: 'The dretch carries a bag of random bones. They seem well chewed',
                price: '3gp',
                rarity: 'Common'
            },
        ],
        imageUrl: "https://vignette.wikia.nocookie.net/forgottenrealms/images/8/82/Dretch-5e.jpeg/revision/latest?cb=20161120141633"
    },
    { id: 41,
        name: 'Glabrezu',
        loot: [
            {
                id: 1,
                itemName: 'A Fake Will to A Vineyard',
                description: 'A will to a large vineyard written out to the holder of the parchment. Upon closer inspection the signer of this will gives their soul to the Glabrezu',
                price: '10gp',
                rarity: 'Common'
            },
            {
                id: 2,
                itemName: 'A Wizards Journal',
                description: 'The journal talks about how he summoned the Glabrezu, but eventually lost his soul to its cunning',
                price: '3gp',
                rarity: 'Common'
            },
            {
                id: 3,
                itemName: 'A Map',
                description: 'A map giving directions to a massive treasure horde promised to a town guard of a nearby city',
                price: '3gp',
                rarity: 'Common'
            },
            {
                id: 4,
                itemName: 'A List of Souls to Gather',
                description: 'A list of people who sold thier souls for riches, power, or glory. Looks like time is up for them',
                price: '3gp',
                rarity: 'Common'
            },
            {
                id: 5,
                itemName: 'Glabrezu Pincers',
                description: 'The pincers can be crafted to create a +1 lance that when hits can attempt to grapple the creature as a bonus action',
                price: '200gp',
                rarity: 'Rare'
            },
            {
                id: 6,
                itemName: 'Glabrezu Horns',
                description: 'These horns can be used to create a potion of flying',
                price: '200gp',
                rarity: 'Rare'
            },
            {
                id: 7,
                itemName: 'Glabrezu Talon',
                description: 'The talon can be crafted into a magic wand that can cast power word stun three times a day',
                price: '300gp',
                rarity: 'Rare'
            },
            {
                id: 8,
                itemName: 'Glabrezu Scales',
                description: 'The scales can be crafted into +1 scale mail. Whenever the wearer is touched or melee attacked the aggressor takes 1d6 piercing damage',
                price: '250gp',
                rarity: 'Uncommon'
            },
            {
                id: 9,
                itemName: 'Glabrezu Eyes',
                description: 'The eyes can be used to create a potion of truesight that lasts for 10 minutes',
                price: '200gp',
                rarity: 'Rare'
            },
            {
                id: 10,
                itemName: 'Galbrezu Fangs',
                description: 'The fangs can be used to create a potion of magic resistance that lasts for 10 minutes',
                price: '3gp',
                rarity: 'Common'
            }
        ],
        imageUrl: "https://vignette.wikia.nocookie.net/forgottenrealms/images/5/5d/Glabrezu-5e.jpg/revision/latest?cb=20161120142628"
    },
    { id: 42,
        name: 'Goristro',
        loot: [
            {
                id: 1,
                itemName: 'Palanquin',
                description: 'A lavish palaquin sits atop the Goristro. It is covered with gold and precious gems',
                price: '500gp',
                rarity: 'Rare'
            },
            {
                id: 2,
                itemName: 'Map and Key',
                description: 'The goristro is holding a map and key to a hidden labyrinth. Is there wealth to be had?',
                price: '10gp',
                rarity: 'Common'
            },
            {
                id: 3,
                itemName: 'Goristro Bracers',
                description: 'These bracers are filled with the rage of the Goristro. When wearing the bracers you do double damage to objects and structures',
                price: '300gp',
                rarity: 'Rare'
            },
            {
                id: 4,
                itemName: 'Goristro Eyes',
                description: 'The eyes can be used to craft a potion that grants dark vision of 120 ft for 1 hour',
                price: '500gp',
                rarity: 'Rare'
            },
            {
                id: 5,
                itemName: 'Goristro Tag',
                description: 'On the Goristros neck is a collar with a tag. The tag says, my favorite pet. On the opposite side says, return to Baphomet',
                price: '5gp',
                rarity: 'Common'
            },
            {
                id: 6,
                itemName: 'Goristro Hooves',
                description: 'The Goristros hooves can be used to make a potion that increases movement speed by 10 ft',
                price: '100gp',
                rarity: 'Uncommon'
            },
            {
                id: 7,
                itemName: 'Goristro Nose Ring',
                description: 'A giant nose ring made of mysterious metal',
                price: '100gp',
                rarity: 'Rare'
            },
            {
                id: 8,
                itemName: 'Goristro Horn',
                description: 'This horn can be crafted into horn that when blown charms all Goristros that hear it for 1d4 rounds. They must pass a DC wisdom saving throw equal to 8 + proficiency + your wisdom modifier',
                price: '1000gp',
                rarity: 'Very Rare'
            },
            {
                id: 9,
                itemName: 'Goristro Horns',
                description: 'These magical horns can be attatched to a shield. When the users of the shield moves 15 ft and attacks an enemy they must pass a DC strength check of 8 + proficiency + your strength modifier or be knocked prone',
                price: '500gp',
                rarity: 'Rare'
            },
            {
                id: 10,
                itemName: 'Goristro Pelt',
                description: 'The pelt can be used to create a cape that grants the wearer magic resistance',
                price: '500gp',
                rarity: 'Rare'
            }
        ],
        imageUrl: "https://i.pinimg.com/originals/a6/c6/d3/a6c6d30f1b90cec31d81282112413c51.jpg"
    },
    { id: 43,
        name: 'Hezrou',
        loot: [
            {
                id: 1,
                itemName: 'Hezrou Blood',
                description: 'The blood of the Hezrou can be drunk. After drunk the drinker emits a terrible stench. All people within 10 ft of the Hezrou must made a DC 14 Constitution saving throw or become poisoned for 1d4 rounds',
                price: '300gp',
                rarity: 'Rare'
            },
            {
                id: 2,
                itemName: 'A Scroll of Orders',
                description: 'The Hezrou has a scroll stating its orders to scout out a nearby town for an attack',
                price: '1gp',
                rarity: 'Common'
            },
            {
                id: 3,
                itemName: 'Trophies',
                description: 'A collection of trophies from past conflicts. Devil horns, an ornate buckler, Hezrou scales, an assortment of mysterious coin whose markings youve never seen, and an dagger with a spider pommel',
                price: '100gp',
                rarity: 'Uncommon'
            },
            {
                id: 4,
                itemName: 'A Collection of Swords',
                description: 'A collection of swords ranging from simple steel to finely crafted rapiers',
                price: '500gp',
                rarity: 'Uncommon'
            },
            {
                id: 5,
                itemName: 'Map of A Level of One Level of Hell',
                description: 'A detailed map of one of the nine levels of hell. Has this demon spied on a devil lords realm?',
                price: '300gp',
                rarity: 'Very Rare'
            },
            {
                id: 6,
                itemName: 'A Crude Metal Key',
                description: 'At first glance this is a poorly crafted key, but actually it contains powerful plane traveling magic. This key can open a portal to a different plane, but which one?',
                price: '700gp',
                rarity: 'Rare'
            },
            {
                id: 7,
                itemName: 'A Rune Covered Rock',
                description: 'This rock is covered with conjuration runes. If broken what does it summon?',
                price: '500gp',
                rarity: 'Rare'
            },
            {
                id: 8,
                itemName: 'Scroll of Orders',
                description: 'A scroll with orders to hunt down an adventurer who is on the path to discovering a higher demons true name. It gives the adventurers name and location',
                price: '30gp',
                rarity: 'Common'
            },
            {
                id: 9,
                itemName: 'Hezrou Talon',
                description: 'The talon can be crafted into a +1 shortsword that deals an additional 1d6 necrotic damage',
                price: '250gp',
                rarity: 'Rare'
            },
            {
                id: 10,
                itemName: 'Hezrou Scales',
                description: 'The scales can be crafted into +1 scale mail. Whenever the wearer is touched or melee attacked the aggressor takes 1d6 piercing damage',
                price: '500gp',
                rarity: 'Rare'
            }
        ],
        imageUrl: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/321/1000/1000/636252775562934524.jpeg"
    },
    { id: 44,
        name: 'Manes',
        loot: [
            {
                id: 1,
                itemName: 'Rotting Flesh',
                description: 'This flesh stinks with death',
                price: '1gp',
                rarity: 'Uncommon'
            },
            {
                id: 2,
                itemName: 'Mane Eyes',
                description: 'The Manes eyes can be used to create a potion of darkvision for 60 ft',
                price: '150gp',
                rarity: 'Uncommon'
            },
            {
                id: 3,
                itemName: 'Scroll with Orders',
                description: 'A scroll contains orders to attack a nearby town. Is this Mane the only assailant?',
                price: '1gp',
                rarity: 'Uncommon'
            },
            {
                id: 4,
                itemName: 'Mane Vapors',
                description: 'If the gas of the Mane is caught quickly after death it can be vialed. When thrown it summons a Mane under your control until the end of the battle',
                price: '100gp',
                rarity: 'Uncommon'
            },
            {
                id: 5,
                itemName: 'A Golden Locket',
                description: 'Inside the Manes flesh is a locket. Inside the locket is a picture of a woman and children. The Manes old family?',
                price: '50gp',
                rarity: 'Uncommon'
            },
            {
                id: 6,
                itemName: 'Rotted Parchment',
                description: 'A piece of parchment bearing the name of a demon. Written underneat are the words, must destroy',
                price: '1gp',
                rarity: 'Uncommon'
            },
            {
                id: 7,
                itemName: 'Map to a Necromancers Lair',
                description: 'Hidden in the Manes rotted flesh is a map to a Necromancers lair',
                price: '1gp',
                rarity: 'Uncommon'
            },
            {
                id: 8,
                itemName: 'An old Hand Axe',
                description: 'An old hand axe rests in the Manes back. Its covered in feathers, beeds, and semi-precious jewels',
                price: '100gp',
                rarity: 'Uncommon'
            },
            {
                id: 9,
                itemName: 'A Note from a Wizard',
                description: 'This Mane has a note explaining that he was a wizard and was transformed into a Mane on accident. He gives directions to his tower to change him back after reviving him',
                price: '1gp',
                rarity: 'Uncommon'
            },
            {
                id: 10,
                itemName: 'Manes Talon',
                description: 'The Manes talons can be used to create daggers that deal an additional 1d6 poison damage',
                price: '1gp',
                rarity: 'Uncommon'
            }
        ],
        imageUrl: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/9/118/1000/1000/636323623730793174.jpeg"
    },
    { id: 45,
        name: 'Marilith',
        loot: [
            {
                id: 1,
                itemName: 'Ceremonial Blade',
                description: 'The Marilith has finely crafted ceremonial blades. Each one is a +1 longsword',
                price: '200gp',
                rarity: 'Rare'
            },
            {
                id: 2,
                itemName: 'Marilith Tail',
                description: 'The tail of the Marilith can be crafted into a +1 whip. When an attack is successful the whip automatically grapples the enemy and they must pass a escape DC of 19. If the enemy is still grappled your next whip attack automatically hits',
                price: '700gp',
                rarity: 'Rare'
            },
            {
                id: 3,
                itemName: 'Marilith Helm',
                description: 'This helm allows the wearer to teleport 120 ft once a day',
                price: '300gp',
                rarity: 'Rare'
            },
            {
                id: 4,
                itemName: 'Marilith Breastplate',
                description: 'A breastplate with snake engravings running across the metal. This armor fills the wearer with the speed of the Marilith granting the wearer another reaction and bonus action',
                price: '1gp',
                rarity: 'Uncommon'
            },
            {
                id: 5,
                itemName: 'Worn Parchment',
                description: 'Inside this worn parchment are orders from a Balor named Thayllen. It states that he wants Quintith to establish a base of operations at a specified location. Then open a portal to allow other demons to enter this plane',
                price: '1gp',
                rarity: 'Uncommon'
            },
            {
                id: 6,
                itemName: 'Bracers of the Marilith',
                description: 'These bracers empower the wearer with increased speed and agility. The wearer can now parry as a reaction granting +2 to their AC for one melee attack',
                price: '500gp',
                rarity: 'Rare'
            },
            {
                id: 7,
                itemName: 'Snake Flute',
                description: 'A finely crafted wooden flute with scales carved into the wood. When this flute is played it summons a giant constrictor snake to aid you in battle',
                price: '200gp',
                rarity: 'Rare'
            },
            {
                id: 8,
                itemName: 'Map of the Area',
                description: 'The Marilith has a map of the nearby area with target locations, opened planar portals, and the location of its camp',
                price: '1gp',
                rarity: 'Uncommon'
            },
            {
                id: 9,
                itemName: 'Rune of Control',
                description: 'Engraved on the top of this stone is a rune of control. When the runes abyssal phrase is spoken 8 manes are summoned to aid you in battle',
                price: '1gp',
                rarity: 'Uncommon'
            },
            {
                id: 10,
                itemName: 'A Demonic Sending Stone',
                description: 'A sending stone pulsating with demonic energy. Who will communicate with you if the stone is activated',
                price: '200gp',
                rarity: 'Rare'
            },
            {
                id: 11,
                itemName: 'Snake Perfume',
                description: 'This snake musk makes you irresistible to evil aligned characters and snakes',
                price: '50gp',
                rarity: 'Uncommon'
            },
            {
                id: 12,
                itemName: 'Marilith Scales',
                description: 'The Marilith scales can be used to craft +2 scale mail armor',
                price: '300gp',
                rarity: 'Rare'
            },
            {
                id: 13,
                itemName: 'Three Whetstones',
                description: 'These can be used to sharpen a blade granting +1 to slashing damage for an hour',
                price: '45gp',
                rarity: 'Uncommon'
            },
            {
                id: 14,
                itemName: 'Scale Wax',
                description: 'Some kind of waxy mixture that shines scales',
                price: '1gp',
                rarity: 'Uncommon'
            }
        ],
        imageUrl: "https://vignette.wikia.nocookie.net/forgottenrealms/images/e/ef/Marilith-5e.jpg/revision/latest?cb=20161120182923"
    },
    { id: 46,
        name: 'Nalfeshnee',
        loot: [
            {
                id: 1,
                itemName: 'Human Flesh',
                description: 'A bag is filled with human body parts, some half eaten',
                price: '1gp',
                rarity: 'Uncommon'
            },
            {
                id: 2,
                itemName: 'A Collection of Rusted Cutlery',
                description: 'A well crafted but rusted set of cutlery',
                price: '10gp',
                rarity: 'Uncommon'
            },
            {
                id: 3,
                itemName: 'Map of Prison Camp',
                description: 'This Nalfeshnee has hidden camps filled with human prisoners. Can you save them before they become its feast?',
                price: '1gp',
                rarity: 'Uncommon'
            },
            {
                id: 4,
                itemName: 'Feast Invitations',
                description: 'Apparently a cult of demon worshippers have invited the Nalfeshnee to a feast. Will you crash it?',
                price: '1gp',
                rarity: 'Uncommon'
            },
            {
                id: 5,
                itemName: 'A Bottle of Wine',
                description: 'An extremely old vintage of wine. It smells delicious',
                price: '200gp',
                rarity: 'Rare'
            },
            {
                id: 6,
                itemName: 'A Tusk Ring',
                description: 'This tusk ring is infused with teleportation magic. It allows the holder to teleport 120 ft once a day',
                price: '300gp',
                rarity: 'Rare'
            },
            {
                id: 7,
                itemName: 'Nalfeshnee Wings',
                description: 'These wings can crafted into a magical item that grants the wearer a 30 ft flying speed',
                price: '500gp',
                rarity: 'Rare'
            },
            {
                id: 8,
                itemName: 'Nalfeshnee Head',
                description: 'The head of the Nalfeshnee allows the holder to use the Horror Nimbus ability of the Nalfeshnee once a day. It must be recharged with a roll of 5 or 6. If failed the power cant be used that day. If a 1 is rolled the head loses its power',
                price: '500gp',
                rarity: 'Rare'
            },
            {
                id: 9,
                itemName: 'A Finely Crafted Kitchen Knife',
                description: 'This knife appears normal but it can cut through any object with ease',
                price: '150gp',
                rarity: 'Rare'
            },
            {
                id: 10,
                itemName: 'A Scroll Made from Mysterious Flesh',
                description: 'Inside the scroll are orders to gather a large amount of humans for a demon lord named Tyranis',
                price: '1gp',
                rarity: 'Uncommon'
            }
        ],
        imageUrl: "https://vignette.wikia.nocookie.net/forgottenrealms/images/2/2a/Nalfeshnee-5e.jpg/revision/latest?cb=20161120184609"
    },
    { id: 47,
        name: 'Quasit',
        loot: [
            {
                id: 1,
                itemName: 'A Worn Scroll',
                description: 'Inside the scrolls are orders to spy on a local Lord. The demon lord Rivalous wants the Quasit to learn of a nearby towns defenses in preparation for an attack',
                price: '1gp',
                rarity: 'Uncommon'
            },
            {
                id: 2,
                itemName: 'A Scroll Filled with Demon Gossip',
                description: 'It seems this Quasit listened in to something he shouldnt have. A powerful demon lord is planning to betray another. This information could fetch a hefty reward',
                price: '1gp',
                rarity: 'Uncommon'
            },
            {
                id: 3,
                itemName: 'Orders to Spy',
                description: 'A mysterious wizard summoned the Quasit to spy on the adventuring party, but for what means?',
                price: '1gp',
                rarity: 'Uncommon'
            },
            {
                id: 4,
                itemName: 'Quasit Blood',
                description: 'The Quasits blood can be used to create a potion of limited polymorph. Check out the Quasits shapechanger ability for details',
                price: '150gp',
                rarity: 'Rare'
            },
            {
                id: 5,
                itemName: 'Quasit Poison',
                description: 'This poison when ingested or injected into an individual causes them to be poisoned for 1 minute. The target must make a DC 10 Constitution saving throw to negate the effect',
                price: '150gp',
                rarity: 'Rare'
            },
            {
                id: 6,
                itemName: 'Quasit Head',
                description: 'When the Quasits head is displayed a creature of the holders choice must make a DC 10 Wisdom saving throw or be frightened for 1 minute. The target can repeat the saving throw at the end of each of its turns',
                price: '200gp',
                rarity: 'Rare'
            },
            {
                id: 7,
                itemName: 'Quasit Horns',
                description: 'The horns can be grounded down and used to create a potion of invisibilty',
                price: '300gp',
                rarity: 'Rare'
            },
            {
                id: 8,
                itemName: 'Quasit Scales',
                description: 'The Quasits scales can be used to create a potion that grants magic resistance for 1 minute',
                price: '150gp',
                rarity: 'Rare'
            },
            {
                id: 9,
                itemName: 'Quasit Eyes',
                description: 'The Quasits eyes can be used to create a potion that grants darkvision for 120 ft',
                price: '150gp',
                rarity: 'Rare'
            },
            {
                id: 10,
                itemName: 'A Map',
                description: 'The Quasit has mapped out the location of a wizard he is currently serving. Apparently he wants to rob the wizard of his research and magic items',
                price: '10gp',
                rarity: 'Uncommon'
            },
            {
                id: 11,
                itemName: 'A Sealed Scroll',
                description: 'A sealed scrolled marked with a sigil of a demon lord. Are they attack orders? Plans to corrupt an individual?',
                price: '1gp',
                rarity: 'Uncommon'
            }
        ],
        imageUrl: "https://i.pinimg.com/originals/5e/b7/2f/5eb72f997f615fde1e78cf39ad4426ce.jpg"
    },
    { id: 48,
        name: 'Shadow Demon',
        loot: [
            {
                id: 1,
                itemName: 'A Sealed Scroll',
                description: 'A sealed scrolled marked with a sigil of a demon lord. Are they attack orders? Plans to corrupt an individual?',
                price: '1gp',
                rarity: 'Uncommon'
            },
            {
                id: 2,
                itemName: 'Sunglasses',
                description: 'A scratched pair of darkened glasses, like the demon tried them on once but it didnt work out',
                price: '2gp',
                rarity: 'Common'
            },
            {
                id: 3,
                itemName: 'Ectoplasm',
                description: 'This ectoplasm can be used to create a potion of incorporeal movement for 1 minute',
                price: '80gp',
                rarity: 'Rare'
            },
            {
                id: 4,
                itemName: 'Demon Dust',
                description: 'This dust can be thrown on an enemy giving them light sensitivity. A DC 14 Constitution saving throw negates',
                price: '100gp',
                rarity: 'Rare'
            },
            {
                id: 5,
                itemName: 'A Folder of Crude Drawings',
                description: 'The demons attempts at recreating memories from his past life. Included in the drawings are drawings of a dog and a man with angry red eyes',
                price: '0gp',
                rarity: 'Uncommon'
            },
            {
                id: 6,
                itemName: 'Shade Dagger',
                description: 'The claws of the Shadow Demon can be made into +1 daggers that deal an additional 4d6 psychic damage. If the daggers are caught in sunlight then they shatter',
                price: '400gp',
                rarity: 'Rare'
            },
            {
                id: 7,
                itemName: 'Research Notes',
                description: 'The demon has a book of notes with plans to escape his servitude to a demon lord and return to mortality',
                price: '1gp',
                rarity: 'Uncommon'
            },
            {
                id: 8,
                itemName: 'Shade Claw',
                description: 'A guantlet made of the Shadow Demons essence. When you land a successful unarmed strike then you learn the greatest fear of the target',
                price: '100gp',
                rarity: 'Rare'
            },
            {
                id: 9,
                itemName: 'Shade Spade',
                description: 'A midnight black spade that when you hit an enemy with it they forget the last 10 minutes, all they can remember is blackness. It looks like the Shadow Demon has used it to dig holes',
                price: '250gp',
                rarity: 'Rare'
            },
            {
                id: 10,
                itemName: 'Memory Poison',
                description: 'When an enemy ingests this poison they are overwhelmed with memories causing them to enter a sleepy stupor for 1 minute. A DC 12 Wisdom saving throw negates',
                price: '1gp',
                rarity: 'Uncommon'
            }
        ],
        imageUrl: "https://s-media-cache-ak0.pinimg.com/originals/11/4d/6e/114d6ea23631f49cc751aa110247e130.jpg"
    },
];


/***/ }),

/***/ "./src/app/monster-detail/monster-detail.component.css":
/*!*************************************************************!*\
  !*** ./src/app/monster-detail/monster-detail.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n  .center-div\n{\n  position: fixed;\n  top: 55%;\n  left: 50%;\n  /* bring your own prefixes */\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  text-align: center;\n}\n\nh6,h1{\n  font-family: 'Marcellus SC', serif;\n}\n\n.floatRight{\n  float: right;\n}\n\nimg{\n  width:50%;\n}"

/***/ }),

/***/ "./src/app/monster-detail/monster-detail.component.html":
/*!**************************************************************!*\
  !*** ./src/app/monster-detail/monster-detail.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n  <link href=\"https://fonts.googleapis.com/css?family=Marcellus+SC\" rel=\"stylesheet\">\n\n  <title>Document</title>\n</head>\n<body>\n  \n  <div class=\"center-div\">\n    <div class=\"card-group\">\n    <div class=\"card mb-3 border-secondary text-white bg-dark text-center\" style=\"width: 20rem;\">\n      <div class=\"card-body\">\n        <h1 class=\"card-title\">Loot the {{ monster.name }}</h1>\n        <h6 class=\"card-text\" id=\"lootName\"></h6>\n        <h6 class=\"card-text\" id=\"lootDesc\"></h6>\n        <h6 class=\"card-text\" id=\"lootPrice\"></h6>\n        <h6 class=\"card-text\" id=\"lootRarity\"></h6>\n        <br>\n        <span class=\"pull-right btn-toolbar\">\n          <button class=\"btn btn-light btn-lg btn-block\" (click)=\"randomLoot()\">Click for Loot</button>\n          <button class=\"btn btn-light btn-lg btn-block\" (click)=\"goBack()\">go back</button>\n        </span>\n      </div>\n    </div>\n  </div>\n</div>\n</body>\n</html>\n"

/***/ }),

/***/ "./src/app/monster-detail/monster-detail.component.ts":
/*!************************************************************!*\
  !*** ./src/app/monster-detail/monster-detail.component.ts ***!
  \************************************************************/
/*! exports provided: MonsterDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonsterDetailComponent", function() { return MonsterDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _monster__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../monster */ "./src/app/monster.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _monster_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../monster.service */ "./src/app/monster.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MonsterDetailComponent = /** @class */ (function () {
    function MonsterDetailComponent(route, monsterService, location) {
        this.route = route;
        this.monsterService = monsterService;
        this.location = location;
    }
    MonsterDetailComponent.prototype.ngOnInit = function () {
        this.getMonster();
    };
    MonsterDetailComponent.prototype.getMonster = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.monsterService.getMonster(id)
            .subscribe(function (monster) { return _this.monster = monster; });
    };
    MonsterDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    MonsterDetailComponent.prototype.randomLoot = function () {
        var randomItem = this.monster.loot[Math.floor(Math.random() * this.monster.loot.length)];
        document.getElementById("lootName").innerHTML = randomItem.itemName;
        document.getElementById("lootDesc").innerHTML = randomItem.description;
        document.getElementById("lootPrice").innerHTML = randomItem.price;
        document.getElementById("lootRarity").innerHTML = randomItem.rarity;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _monster__WEBPACK_IMPORTED_MODULE_1__["Monster"])
    ], MonsterDetailComponent.prototype, "monster", void 0);
    MonsterDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-monster-detail',
            template: __webpack_require__(/*! ./monster-detail.component.html */ "./src/app/monster-detail/monster-detail.component.html"),
            styles: [__webpack_require__(/*! ./monster-detail.component.css */ "./src/app/monster-detail/monster-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _monster_service__WEBPACK_IMPORTED_MODULE_4__["MonsterService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], MonsterDetailComponent);
    return MonsterDetailComponent;
}());



/***/ }),

/***/ "./src/app/monster-list/monster-list.component.css":
/*!*********************************************************!*\
  !*** ./src/app/monster-list/monster-list.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/monster-list/monster-list.component.html":
/*!**********************************************************!*\
  !*** ./src/app/monster-list/monster-list.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  monster-list works!\n</p>\n"

/***/ }),

/***/ "./src/app/monster-list/monster-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/monster-list/monster-list.component.ts ***!
  \********************************************************/
/*! exports provided: MonsterListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonsterListComponent", function() { return MonsterListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MonsterListComponent = /** @class */ (function () {
    function MonsterListComponent() {
    }
    MonsterListComponent.prototype.ngOnInit = function () {
    };
    MonsterListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-monster-list',
            template: __webpack_require__(/*! ./monster-list.component.html */ "./src/app/monster-list/monster-list.component.html"),
            styles: [__webpack_require__(/*! ./monster-list.component.css */ "./src/app/monster-list/monster-list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MonsterListComponent);
    return MonsterListComponent;
}());



/***/ }),

/***/ "./src/app/monster.service.ts":
/*!************************************!*\
  !*** ./src/app/monster.service.ts ***!
  \************************************/
/*! exports provided: MonsterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonsterService", function() { return MonsterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _mock_monsters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mock-monsters */ "./src/app/mock-monsters.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MonsterService = /** @class */ (function () {
    function MonsterService() {
    }
    MonsterService.prototype.getMonsters = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_mock_monsters__WEBPACK_IMPORTED_MODULE_2__["MONSTERS"]);
    };
    MonsterService.prototype.getMonster = function (id) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_mock_monsters__WEBPACK_IMPORTED_MODULE_2__["MONSTERS"].find(function (monster) { return monster.id === id; }));
    };
    MonsterService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], MonsterService);
    return MonsterService;
}());



/***/ }),

/***/ "./src/app/monster.ts":
/*!****************************!*\
  !*** ./src/app/monster.ts ***!
  \****************************/
/*! exports provided: Monster */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Monster", function() { return Monster; });
var Monster = /** @class */ (function () {
    function Monster() {
    }
    return Monster;
}());



/***/ }),

/***/ "./src/app/monsters/monsters.component.css":
/*!*************************************************!*\
  !*** ./src/app/monsters/monsters.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n  \n  /* When the input field gets focus, change its width to 100% */\n  input[type=text]:focus {\n    width: 100%;\n    text-align: center;\n  }\n  title\n{ \n  text-align: center;\n  \n}\n  H1 \n{ \n  text-align: center;\n  font-family: 'Marcellus SC', serif;\n}\n  input \n{ \n  text-align: center;\n  background: url(\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2Tcm4G5g6dNhZM3Wbs6naJB6wr9hWdOj2VBxWzmk7OK-GXiaIWw\");\n  background-size: cover;\n\n}\n  a, title, input{\n  font-family: 'Marcellus SC', serif;\n  color:Black;\n  font-size: 20px;\n}\n  #content       \n{\n    font-size: .75em; /* 12/16 */\n    width: 71.875%; /* 650/960 */\n    max-width: 960px;\n    text-align: left;\n    margin: 0px auto; /*auto centers the container */\n    padding: 1.84615384615385%; /* 25/650 */\n}\n  /*CSS3 multiple columns.*/\n  /* Get em size for colums: 184/16 */\n  .columns\n{ /* Firefox */\n    -webkit-column-width: 11.5em; /* webkit, Safari, Chrome */\n    column-width: 15.5em;\n}\n  /*remove standard list and bullet formatting from ul*/\n  .columns ul\n{\n    margin: 0;\n    padding: 0;\n    list-style-type: none;\n}\n  /* correct webkit/chrome uneven margin on the first column*/\n  .columns ul li:first-child\n{\n    margin-top:0px;\n}\n"

/***/ }),

/***/ "./src/app/monsters/monsters.component.html":
/*!**************************************************!*\
  !*** ./src/app/monsters/monsters.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n \n\n</head>\n\n<body>\n\n  <h1>Monsters</h1>\n  \n  <div id=\"content\">\n      <div class=\"columns\">\n    <ul>\n\n      <li *ngFor=\"let monster of monsters\">\n          <a routerLink=\"/detail/{{monster.id}}\">\n            {{monster.name}}\n          </a>\n        </li>\n    </ul>\n  </div>\n  </div>\n\n\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/monsters/monsters.component.ts":
/*!************************************************!*\
  !*** ./src/app/monsters/monsters.component.ts ***!
  \************************************************/
/*! exports provided: MonstersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonstersComponent", function() { return MonstersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _monster_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../monster.service */ "./src/app/monster.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MonstersComponent = /** @class */ (function () {
    function MonstersComponent(monsterService) {
        this.monsterService = monsterService;
        this.monsters = [];
    }
    MonstersComponent.prototype.ngOnInit = function () {
        this.getMonsters();
    };
    MonstersComponent.prototype.getMonsters = function () {
        var _this = this;
        this.monsterService.getMonsters()
            .subscribe(function (monsters) { return _this.monsters = monsters; });
    };
    MonstersComponent.prototype.Search = function () {
        var _this = this;
        if (this.name != "") {
            this.monsters = this.monsters.filter(function (res) {
                return res.name.toLocaleLowerCase().match(_this.name.toLocaleLowerCase());
            });
        }
        else if (this.name == "") {
            this.ngOnInit();
        }
    };
    MonstersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-monsters',
            template: __webpack_require__(/*! ./monsters.component.html */ "./src/app/monsters/monsters.component.html"),
            styles: [__webpack_require__(/*! ./monsters.component.css */ "./src/app/monsters/monsters.component.css")]
        }),
        __metadata("design:paramtypes", [_monster_service__WEBPACK_IMPORTED_MODULE_1__["MonsterService"]])
    ], MonstersComponent);
    return MonstersComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/TH/Desktop/LootApp/LootApp/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map