// PVF bundle — V44 orange — 19/09 22:10 — 285989 bytes
var PVF = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined") return require.apply(this, arguments);
    throw Error('Dynamic require of "' + x + '" is not supported');
  });
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // product-factory/v44_orange/App.tsx
  var App_exports = {};
  __export(App_exports, {
    App: () => App,
    INITIAL_STATE: () => INITIAL_STATE,
    SCREENS_KEY: () => SCREENS_KEY,
    SESSION_KEY: () => SESSION_KEY,
    default: () => App_default,
    idbGet: () => idbGet,
    idbOpen: () => idbOpen,
    idbSet: () => idbSet,
    newSeed: () => newSeed
  });
  var import_react3 = __toESM(__require("react"));
  var import_flow_sdk4 = __require("flow-sdk");

  // product-factory/v44_orange/arcs.ts
  var H_STD = [{ k: "su_viec", w: 40 }, { k: "phan_de", w: 20 }, { k: "tin_vui", w: 15 }, { k: "cau_hoi", w: 15 }, { k: "con_so", w: 10 }];
  var ARCS = [
    { key: "cung_khai_thac", label: "C\xF9ng khai th\xE1c (\u0111\xE1m \u0111\xF4ng)", weight: 25, ksp: "KSP1", screens: ["quet", "dao"], beats: 'M\u1EA0CH C\xD9NG KHAI TH\xC1C (c\u01A1 ch\u1EBF th\u1EADt: hai ng\u01B0\u1EDDi g\u1EB7p nhau ngo\xE0i \u0111\u1EDDi v\xE0 QU\xC9T M\xC3 QR c\u1EE7a nhau th\xEC t\u1ED1c \u0111\u1ED9 \u0111\xE0o T\u0102NG, FC nhi\u1EC1u h\u01A1n \u2014 \u0111\xF3 l\xE0 l\xFD do \u0111\xE1m \u0111\xF4ng g\u1EB7p nhau h\xE0ng ng\xE0y): (1) S\u1EF0 VI\u1EC6C \u0111\xF4ng ng\u01B0\u1EDDi: m\u1ED9t n\u01A1i \u0111\xF4ng (ch\u1EE3 5 gi\u1EDD s\xE1ng, x\u01B0\u1EDFng may gi\u1EDD ngh\u1EC9, s\xE2n nh\xE0 v\u0103n ho\xE1, k\xFD t\xFAc x\xE1, b\u1EBFn xe \xF4m) m\u1ECDi ng\u01B0\u1EDDi t\xECm nhau gi\u01A1 \u0111i\u1EC7n tho\u1EA1i qu\xE9t m\xE3 cho nhau, gi\u1ECDng d\u1EABn k\u1EC3 c\xF3 gi\u1EDD + ai + l\xE0m g\xEC; (2) ng\u01B0\u1EDDi l\u1EA1 / ng\u01B0\u1EDDi m\u1EDBi th\u1EA5y l\u1EA1 h\u1ECFi "l\xE0m g\xEC th\u1EBF?"; (3) C\u1EA2NH CH\u1EE8NG MINH C\u1ED0T L\xD5I: hai ng\u01B0\u1EDDi c\xFAi v\xE0o nhau, m\u1ED9t ng\u01B0\u1EDDi gi\u01A1 m\xE3 QR, ng\u01B0\u1EDDi kia qu\xE9t, r\u1ED3i c\u1EADn m\xE0n h\xECnh TH\u1EACT b\xE1o t\u1ED1c \u0111\u1ED9 \u0111\xE0o t\u0103ng; (4) ng\u01B0\u1EDDi m\u1EDBi c\u0169ng \u0111\u01B0\u1EE3c qu\xE9t, c\u1EA3 nh\xF3m c\u01B0\u1EDDi, "g\u1EB7p th\xEAm m\u1ED9t ng\u01B0\u1EDDi l\xE0 nhanh th\xEAm m\u1ED9t n\u1EA5c"; (5) ch\u1ED1t: k\u1EBFt lu\u1EADn "x\xF3m n\xE0o \u0111\xF4ng th\xEC r\u1EE7 nhau nh\u01B0 x\xF3m em, g\u1EB7p l\xE0 \u0111\xE0o nhanh" + l\u1EDDi m\u1EDDi th\u1EADt th\xE0 theo link. C\u1EA3m x\xFAc: \u0111\xF4ng vui, thu\u1ED9c v\u1EC1. C\u1EA5m: m\u1ED9t ng\u01B0\u1EDDi ng\u1ED3i m\u1ED9t m\xECnh nh\xECn m\xE0n h\xECnh qu\xE1 6 gi\xE2y.', needSecond: true, needPhone: true, close: "ref", hooks: [{ k: "su_viec", w: 40 }, { k: "phan_de", w: 20 }, { k: "cau_hoi", w: 20 }, { k: "con_so", w: 10 }, { k: "tin_vui", w: 10 }], dur: [20, 38], hidden: true, variants: [
      { key: "hoai_nghi_tu_ke", text: '10 gi\xE2y \u0111\u1EA7u do NG\u01AF\u1EDCI HO\xC0I NGHI \u0111\u1ED9c tho\u1EA1i ("3 ph\xFAt m\xE0 c\xF3 FC? ch\u1EAFc l\u1EEBa") r\u1ED3i b\u1ECB h\xE0ng x\xF3m ch\xECa m\xE0n h\xECnh FC \u0111ang t\u0103ng c\u1EAFt ngang; k\u1EBFt "gi\u1EDD th\xEC em tin".' },
      { key: "nhom_chia_viec", text: '5 ng\u01B0\u1EDDi m\u1ED7i ng\u01B0\u1EDDi m\u1ED9t \u0111i\u1EC7n tho\u1EA1i, \u0111\u1EBFm "xong ch\u01B0a? xong!" trong \u0111\xFAng 3 ph\xFAt, nhi\u1EC1u m\xE0n h\xECnh c\xF9ng khung.' },
      { key: "mc_binh_luan", text: 'm\u1ED9t gi\u1ECDng B\xCCNH LU\u1EACN VI\xCAN t\u01B0\u1EDDng thu\u1EADt c\u1EA3 x\xF3m \u0111ang \u0111\xE0o nh\u01B0 b\xECnh lu\u1EADn b\xF3ng \u0111\xE1 ("c\u1EE5 T\xE1m d\u1EABn \u0111\u1EA7u, ph\xFAt th\u1EE9 hai\u2026"), h\xE0i.' },
      { key: "cau_do", text: 'm\u1EDF b\u1EB1ng c\xE2u \u0111\u1ED1 HAI \u0110\xC1P \xC1N gi\u1EEFa \u0111\xFAng hai ng\u01B0\u1EDDi \u0111ang c\xF3 trong khung ("\u0111\u1ED1 c\xE1c b\xE1c, em v\u1EDBi b\xE0 Lan ai nhi\u1EC1u FC h\u01A1n?"), r\u1ED3i \u1EDF gi\xE2y 12-15 B\u1EAET BU\u1ED8C c\xF3 m\u1ED9t c\xE2u c\xF4ng b\u1ED1 \u0111\xE1p \xE1n k\xE8m con s\u1ED1 tr\xEAn m\xE0n h\xECnh ("b\xE0 Lan hai m\u01B0\u01A1i t\xE1m, em c\xF3 hai m\u01B0\u01A1i m\u1ED1t th\xF4i") \u2014 thi\u1EBFu c\xE2u tr\u1EA3 l\u1EDDi l\xE0 h\u1ECFng c\u1EA3 video.' }
    ] },
    { key: "orange_u_day", label: "Orange U Day", weight: 10, ksp: "KSP1", screens: ["quet"], beats: 'M\u1EA0CH ORANGE U DAY: T\u1EF6 L\u1EC6 \xC1O CAM: trong \u0111\xE1m \u0111\xF4ng kho\u1EA3ng 30% ng\u01B0\u1EDDi m\u1EB7c \xE1o cam c\xF3 logo Unich, s\u1ED1 c\xF2n l\u1EA1i m\u1EB7c \u0111\u1ED3 th\u01B0\u1EDDng \u2014 \u0111\xF4ng v\u1EEBa \u0111\u1EE7 \u0111\u1EC3 th\u1EA5y r\xF5 m\xE0 v\u1EABn ra \u0111\u01B0\u1EDDng ph\u1ED1 th\u1EADt, kh\xF4ng ph\u1EA3i s\u1EF1 ki\u1EC7n d\xE0n d\u1EF1ng. TH\u1EE8 B\u1EA2Y H\xC0NG TU\u1EA6N, ng\xE0y m\u1ECDi ng\u01B0\u1EDDi m\u1EB7c M\xC0U CAM ra \u0111\u01B0\u1EDDng g\u1EB7p nhau \u2014 k\u1EC3 nh\u01B0 m\u1ED9t th\xF3i quen \u0111\xE3 c\xF3 t\u1EEB l\xE2u c\u1EE7a c\u1EA3 x\xF3m ("th\u1EE9 B\u1EA3y n\xE0o c\u0169ng th\u1EBF"), kh\xF4ng ph\u1EA3i s\u1EF1 ki\u1EC7n l\u1EA1. (1) S\u1EF1 vi\u1EC7c: s\xE1ng \u0111\xF3 c\u1EA3 l\xE0ng / ph\u1ED1 / m\u1ED9t th\xE0nh ph\u1ED1 n\u01B0\u1EDBc kh\xE1c \u0111\u1ED5 ra \u0111\u01B0\u1EDDng trong s\u1EAFc cam; (2) to\xE0n c\u1EA3nh \u0111\xF4ng ng\u01B0\u1EDDi, ng\u01B0\u1EDDi k\u1EC3 \u0111\u1EE9ng gi\u1EEFa, ai c\u0169ng c\u1EA7m \u0111i\u1EC7n tho\u1EA1i m\u1EDF app; (3) ng\u01B0\u1EDDi l\u1EA1 g\u1EB7p nhau l\xE0 gi\u01A1 m\xE3 QR qu\xE9t cho nhau, ai c\u0169ng \u0111i qu\xE9t v\xEC g\u1EB7p c\xE0ng nhi\u1EC1u \u0111\xE0o c\xE0ng nhanh v\xE0 kh\xF4ng c\xF3 tr\u1EA7n, c\u1EADn m\xE0n h\xECnh b\xE1o t\u1ED1c \u0111\u1ED9 t\u0103ng; (4) ch\u1ED1t t\u1EF1 h\xE0o "ng\xE0y \u0111\xF3 l\xE0ng em th\u1EBF n\xE0y, qu\xE9t m\u1ECFi tay" + m\u1EDDi theo link. C\u1EA3m x\xFAc: l\u1EC5 h\u1ED9i, t\u1EF1 h\xE0o.', needSecond: true, needPhone: true, close: "ref", hooks: [{ k: "su_viec", w: 50 }, { k: "con_so", w: 30 }, { k: "phan_de", w: 20 }], dur: [20, 38], hidden: true, variants: [] },
    { key: "nhac_dao", label: "Nh\u1EAFc \u0111\xE0o 3 ph\xFAt", weight: 20, ksp: "KSP2", screens: ["nhac", "dao"], beats: 'M\u1EA0CH NH\u1EAEC \u0110\xC0O: c\u01A1 ch\u1EBF th\u1EADt: b\u1EA5m \u0111\xE0o m\u1ED9t c\xE1i th\xEC FC T\u0102NG D\u1EA6N theo th\u1EDDi gian, app ch\u1EC9 g\u1EEDi TH\xD4NG B\xC1O NH\u1EAEC \u0110\xC0O 3 l\u1EA7n m\u1ED7i ng\xE0y, kh\xF4ng b\u1EA5m c\u0169ng kh\xF4ng m\u1EA5t g\xEC. (1) S\u1EF1 vi\u1EC7c: \u0111ang l\xE0m d\u1EDF vi\u1EC7c \u0111\u1EDDi th\u01B0\u1EDDng (\u0103n c\u01A1m, b\xE1n b\xE1nh m\xEC, g\u1EB7t, ch\u1EDD xe, ru con) th\xEC \u0111i\u1EC7n tho\u1EA1i rung nh\u1EAFc \u0111\xE0o; (2) ng\u01B0\u1EDDi k\u1EC3 b\u1ECF d\u1EDF vi\u1EC7c, b\u1EA5m \u0111\xE0o trong 3 gi\xE2y, c\u01B0\u1EDDi, l\xE0m ti\u1EBFp; ng\u01B0\u1EDDi b\xEAn c\u1EA1nh ng\xF3 h\u1ECFi; (3) c\u1EADn m\xE0n h\xECnh th\u1EADt: s\u1ED1 FC h\xF4m qua so v\u1EDBi h\xF4m nay; (4) ch\u1ED1t "ai ng\xE0y n\xE0o c\u0169ng c\u1EA7m \u0111i\u1EC7n tho\u1EA1i th\xEC l\xE0m c\xE1i n\xE0y h\u1EE3p, t\xEDch \u0111\u01B0\u1EE3c t\xED n\xE0o hay t\xED \u0111\u1EA5y" + m\u1EDDi theo link. KH\xD4NG n\xF3i "ti\u1EC1n v\u1EC1", KH\xD4NG n\xF3i s\u1ED1 ti\u1EC1n. C\u1EA3m x\xFAc: ti\u1EC7n tay, s\u1ED1t ru\u1ED9t t\xEDch lu\u1EF9.', needSecond: true, needPhone: true, close: "ref", hooks: H_STD, dur: [18, 38], hidden: true, variants: [
      { key: "huong_dan_tu_xa", text: 'con \u1EDF th\xE0nh ph\u1ED1 g\u1ECDi video d\u1EA1y b\u1ED1 m\u1EB9 \u1EDF qu\xEA b\u1EA5m \u0111\xE0o ("m\u1EB9 b\u1EA5m c\xE1i n\xFAt cam \u1EDF g\xF3c \u1EA5y"), b\u1ED1 b\u1EA5m \u0111\u01B0\u1EE3c, m\u1EB9 v\u1ED7 tay.' },
      { key: "cam_nang_3_lan", text: 'l\u1EDDi narrator l\xE0 c\u1EA9m nang "3 l\u1EA7n m\u1ED7i ng\xE0y: s\xE1ng ng\u1EE7 d\u1EADy, tr\u01B0a ngh\u1EC9, t\u1ED1i c\u01A1m xong", m\u1ED7i l\u1EA7n m\u1ED9t c\u1EA3nh, nh\u1ECBp ch\u1EADm.' },
      { key: "dem_ngay", text: '\u0111\u1EBFm ng\xE0y "ng\xE0y 1 t\u1EADp, ng\xE0y 7 quen, ng\xE0y 30 nh\xECn l\u1EA1i s\u1ED1 FC", m\xE0n h\xECnh theo ng\xE0y, kh\xF4ng s\u1ED1 ti\u1EC1n.' },
      { key: "khong_von", text: 'm\u1EDF b\u1EB1ng ph\u1EA3n \u0111\u1EC1 "c\u1EE9 ngh\u0129 ph\u1EA3i c\xF3 v\u1ED1n m\u1EDBi ki\u1EBFm \u0111\u01B0\u1EE3c", ch\u1EE9ng minh b\u1EB1ng \u0111i\u1EC7n tho\u1EA1i c\u0169 5 n\u0103m ngo\xE0i \u0111\u1ED3ng v\u1EABn \u0111\xE0o \u0111\u01B0\u1EE3c, m\xE0n h\xECnh 0 \u0111\u1ED3ng.' }
    ] },
    { key: "tra_fc", label: "Tr\u1EA3 b\u1EB1ng FC", weight: 15, ksp: "KSP3", screens: ["tra"], beats: 'M\u1EA0CH TR\u1EA2 B\u1EB0NG FC: (1) S\u1EF1 vi\u1EC7c: mua h\xE0ng \u0111\u1EDDi th\u01B0\u1EDDng (c\xE0 ph\xEA c\xF3c, rau ch\u1EE3 s\xE1ng, x\u0103ng l\u1EBB, c\u1EAFt t\xF3c, v\xE9 xe) r\u1ED3i tr\u1EA3 b\u1EB1ng c\xE1ch QU\xC9T M\xC3 QR c\u1EE7a qu\xE1n b\u1EB1ng app; (2) C\xD9NG KHUNG: qu\xE9t xong ng\u1EA9ng l\xEAn, ch\u1EE7 qu\xE1n g\u1EADt "qu\xE1n ch\u1ECB nh\u1EADn FC r\u1ED3i", kh\xE1ch sau l\u01B0ng t\xF2 m\xF2 ng\xF3; (3) c\u1EADn m\xE0n h\xECnh thanh to\xE1n th\u1EADt; (4) c\u1EA7u n\u1ED1i: "n\xEAn ng\xE0y n\xE0o em c\u0169ng ch\u0103m g\u1EB7p nhau qu\xE9t m\xE3 \u0111\u1EC3 t\xEDch FC" + m\u1EDDi theo link. TR\u1EA0NG TH\xC1I TH\u1EACT: vi\u1EC7c tr\u1EA3 b\u1EB1ng FC M\u1EDAI \u0110ANG TH\xCD \u0110I\u1EC2M \u1EDF v\xE0i qu\xE1n \u0111\u1EA7u ti\xEAn. Ph\u1EA3i k\u1EC3 \u0111\xFAng nh\u01B0 th\u1EBF \u2014 "qu\xE1n \u0111\u1EA7u ti\xEAn \u1EDF x\xF3m em", "m\u1EDBi c\xF3 m\u1EA5y ch\u1ED7 nh\u1EADn th\xF4i", "em th\u1EED ph\xE1t xem c\xF3 \u0111\u01B0\u1EE3c kh\xF4ng" \u2014 v\xE0 c\xE1i hay n\u1EB1m \u1EDF ch\u1ED7 L\u1EA6N \u0110\u1EA6U TI\xCAN ti\xEAu \u0111\u01B0\u1EE3c, kh\xF4ng ph\u1EA3i \u1EDF ch\u1ED7 \u0111\xE2u c\u0169ng ti\xEAu \u0111\u01B0\u1EE3c. C\u1EA4M n\xF3i hay ng\u1EE5 \xFD ch\u1EE3 n\xE0o qu\xE1n n\xE0o c\u0169ng nh\u1EADn. BI\u1EC2N HI\u1EC6U: qu\xE1n c\xF3 m\u1ED9t t\u1EA5m bi\u1EC3n nh\u1ECF treo tr\u01B0\u1EDBc c\u1EEDa ho\u1EB7c \u0111\u1EC3 tr\xEAn qu\u1EA7y ghi \u0111\xFAng ch\u1EEF "Pay with Unich" \u2014 quay c\u1EADn t\u1EA5m bi\u1EC3n n\xE0y m\u1ED9t nh\u1ECBp, \u0111\xE2y l\xE0 b\u1EB1ng ch\u1EE9ng nh\xECn th\u1EA5y \u0111\u01B0\u1EE3c. C\xE1ch g\u1ECDi \u0111\xFAng: qu\xE1n \u0110\u01AF\u1EE2C UNICH CH\u1ECCN TH\xCD \u0110I\u1EC2M thanh to\xE1n b\u1EB1ng FC ("ti\u1EC7m c\u1EAFt t\xF3c \u0111\u1EA7u ti\xEAn \u1EDF x\xF3m em \u0111\u01B0\u1EE3c Unich ch\u1ECDn th\xED \u0111i\u1EC3m thanh to\xE1n b\u1EB1ng FC \u0111\u1EA5y c\xE1c b\xE1c \u1EA1"). L\xFD do qu\xE1n ch\u1ECBu nh\u1EADn: c\u1ED9ng \u0111\u1ED3ng \u0111\xE3 k\u1EBFt n\u1ED1i qua app n\xEAn qu\xE1n \u0111\u01B0\u1EE3c ch\u1ECDn l\xE0 ng\u01B0\u1EDDi trong c\u1ED9ng \u0111\u1ED3ng t\xECm \u0111\u1EBFn. C\u1EA3m x\xFAc: h\u1ED3i h\u1ED9p r\u1ED3i v\u1EE1 o\xE0 v\xEC ti\xEAu \u0111\u01B0\u1EE3c th\u1EADt.', needSecond: true, needPhone: true, close: "ref", hooks: [{ k: "su_viec", w: 50 }, { k: "tin_vui", w: 30 }, { k: "phan_de", w: 20 }], dur: [16, 32], hidden: true, variants: [
      { key: "khach_quet", text: "k\u1EC3 t\u1EEB g\xF3c kh\xE1ch: l\u1EA7n \u0111\u1EA7u qu\xE9t tr\u1EA3, h\u1ED3i h\u1ED9p, ch\u1EE7 qu\xE1n g\u1EADt." },
      { key: "quan_treo_bien", text: 'k\u1EC3 t\u1EEB g\xF3c ch\u1EE7 qu\xE1n V\u1EEAA M\u1EDAI nh\u1EADn FC: "em l\xE0 qu\xE1n \u0111\u1EA7u ti\xEAn \u1EDF ph\u1ED1 n\xE0y treo c\xE1i bi\u1EC3n \u0111\u1EA5y", k\u1EC3 l\u1EA1i tu\u1EA7n \u0111\u1EA7u h\u1ED3i h\u1ED9p, kh\xE1ch trong c\u1ED9ng \u0111\u1ED3ng t\xECm \u0111\u1EBFn; c\u1EADn bi\u1EC3n + c\u1EADn m\xE0n h\xECnh nh\u1EADn.' }
    ] },
    { key: "buyback", label: "Buyback \u2014 nh\u1EADn ti\u1EC1n th\u1EADt", weight: 20, ksp: "KSP4", screens: ["buyback"], beats: 'M\u1EA0CH BUYBACK: (1) S\u1EF1 vi\u1EC7c: Unich mua l\u1EA1i FC M\u1ED6I NG\xC0Y v\xE0o m\u1ED9t gi\u1EDD c\u1ED1 \u0111\u1ECBnh (gi\u1EDD Vi\u1EC7t Nam ghi trong h\u01B0\u1EDBng d\u1EABn h\u1EC7 th\u1ED1ng) \u2014 d\u1EF1ng \u0111\xFAng kho\u1EA3nh kh\u1EAFc \u0111\xF3: \u0111ang d\u1EDF vi\u1EC7c th\xEC \u0111\u1EBFn gi\u1EDD, m\u1EDF app ra xem, th\u1EA5y FC c\u1EE7a m\xECnh \u0111\u01B0\u1EE3c mua l\u1EA1i \u2014 KH\xD4NG \u0111\u1ECDc s\u1ED1 ti\u1EC1n, m\xE0 quy ngay ra m\u1ED9t kho\u1EA3n chi \u0111\u1EDDi th\u01B0\u1EDDng k\xE8m v\u1EBB b\u1EA5t ng\u1EDD ("em t\u01B0\u1EDFng c\xF2n l\xE2u m\u1EDBi \u0111\u01B0\u1EE3c g\xEC, th\u1EBF m\xE0 ch\u1ED7 n\xE0y \u0111\u1EE7 tr\u1EA3 ti\u1EC1n tr\u1ECD th\xE1ng n\xE0y"); (2) nh\u1EA5n v\xE0o ch\u1ED7 KH\xD4NG PH\u1EA2I B\u1ECE V\u1ED0N \u2014 t\u1EF1 ngh\u0129 l\u1EA5y c\xE2u ch\u1EEF, m\u1ED7i video m\u1ED9t c\xE1ch n\xF3i kh\xE1c, \u0111\u1EEBng d\xF9ng l\u1EA1i ch\u1EEF "v\u1ED1n"; (3) khoe ng\u01B0\u1EDDi b\xEAn c\u1EA1nh (v\u1EE3, \u0111\u1ED3ng nghi\u1EC7p), h\u1ECD xem m\xE0n h\xECnh, m\u1EB7t b\u1EA5t ng\u1EDD; (4) ch\u1ED1t: "n\xEAn em c\xE0ng ch\u0103m \u0111\xE0o, c\xE1c b\xE1c \u0111\u0103ng k\xFD theo link c\u1EE7a em l\xE0 c\xF3 ngay 10 FC". \u0110i\u1EC1u ki\u1EC7n th\u1EADt: B\u1EA4T K\u1EC2 AI c\u0169ng c\xF3 th\u1EC3 \u0111\u01B0\u1EE3c mua l\u1EA1i \u2014 nh\u1EA5n v\xE0o ch\u1ED7 n\xE0y v\xEC ng\u01B0\u1EDDi m\u1EDBi hay ngh\u0129 ch\u1EC9 d\xE2n chuy\xEAn m\u1EDBi nh\u1EADn \u0111\u01B0\u1EE3c. C\u1EA3m x\xFAc: s\u01B0\u1EDBng, tin, mu\u1ED1n t\xEDch th\xEAm.', needSecond: true, needPhone: true, close: "ref", hooks: [{ k: "su_viec", w: 50 }, { k: "con_so", w: 30 }, { k: "phan_de", w: 20 }], dur: [18, 38], hidden: true, allowMoney: true, variants: [
      { key: "hoai_nghi_den_khi_nhan", text: '10 gi\xE2y \u0111\u1EA7u l\xE0 ng\u01B0\u1EDDi ho\xE0i nghi ("l\u1EEBa \u0111\u1EA3o h\u1EBFt") cho \u0111\u1EBFn h\xF4m nay c\u1EA7m ti\u1EC1n th\u1EADt.' },
      { key: "ca_nhom_nhan", text: "c\u1EA3 nh\xF3m 5 ng\u01B0\u1EDDi x\u01B0\u1EDFng may c\xF9ng c\xF3 t\xEAn trong \u0111\u1EE3t mua l\u1EA1i, m\u1ED7i ng\u01B0\u1EDDi ch\xECa m\u1ED9t m\xE0n h\xECnh." },
      { key: "so_voi_lam_them", text: "so v\u1EDBi \u0111i l\xE0m th\xEAm: tu\u1EA7n l\xE0m th\xEAm 1,5 tri\u1EC7u m\u1EC7t nho\xE0i, c\xE1i n\xE0y 3 ph\xFAt m\u1ED7i ng\xE0y." }
    ] },
    { key: "hang_xom_hoi", label: "H\xE0ng x\xF3m h\u1ECFi", weight: 10, ksp: "KSP2", screens: ["dao", "quet"], beats: 'M\u1EA0CH H\xC0NG X\xD3M H\u1ECEI: (1) h\xE0ng x\xF3m sang m\u01B0\u1EE3n \u0111\u1ED3, th\u1EA5y nh\xE2n v\u1EADt ch\xEDnh \u0111ang b\u1EA5m app, h\u1ECFi "m\xE0y l\xE0m c\xE1i g\xEC m\xE0 s\xE1ng n\xE0o c\u0169ng m\u1EDF?"; (2) hai ng\u01B0\u1EDDi C\xD9NG KHUNG c\xFAi v\xE0o m\u1ED9t m\xE0n h\xECnh, nh\xE2n v\u1EADt ch\xEDnh ch\u1EC9 s\u1ED1 FC \u0111ang t\u0103ng, k\u1EC3 3 ph\xFAt m\u1ED7i ng\xE0y v\xE0 "g\u1EB7p nhau qu\xE9t m\xE3 th\xEC nhanh h\u01A1n"; (3) h\xE0ng x\xF3m t\u1EF1 c\xE0i, hai ng\u01B0\u1EDDi qu\xE9t m\xE3 c\u1EE7a nhau ngay t\u1EA1i ch\u1ED7, m\xE0n h\xECnh b\xE1o t\u0103ng t\u1ED1c, c\u01B0\u1EDDi; (4) ch\u1ED1t k\u1EBFt lu\u1EADn + m\u1EDDi theo link "b\xE1c \u0111\u01B0\u1EE3c 10 FC, em \u0111\u01B0\u1EE3c 5 FC". C\u1EA3m x\xFAc: t\xF2 m\xF2, th\xE2n t\xECnh.', needSecond: true, needPhone: true, close: "ref", hooks: [{ k: "su_viec", w: 50 }, { k: "cau_hoi", w: 50 }], dur: [18, 36], hidden: false, variants: [] }
  ];
  var arcsFor = (p) => ARCS.filter((x) => !(x.notIn || []).includes(String(p?.market || "").toLowerCase()));
  var arcOf = (key) => key ? ARCS.find((x) => x.key === key) : void 0;
  var pickWeighted = (list, w) => {
    const tot = list.reduce((t, x) => t + w(x), 0);
    let r = Math.random() * tot;
    for (const x of list) {
      r -= w(x);
      if (r <= 0) return x;
    }
    return list[list.length - 1];
  };
  var pickArcs = (n, avoidKeys = [], p) => {
    const ok = arcsFor(p);
    let pool = ok.filter((x) => !avoidKeys.includes(x.key));
    if (pool.length < n) pool = ok.slice();
    const out = [];
    while (out.length < n && pool.length) {
      const x = pickWeighted(pool, (y) => y.weight);
      out.push(x);
      pool = pool.filter((y) => y !== x);
    }
    while (out.length < n) out.push(pickWeighted(arcsFor(p), (y) => y.weight));
    return out;
  };
  var fingerprint = (sc) => `${sc.arc || "-"}|${sc.place}|${sc.variant || "-"}|${sc.hook.split(/\s+/).slice(0, 6).join(" ")}`;

  // product-factory/v44_orange/banks.ts
  var BRAND_CUES = [
    "the narrator wears a plain orange T-shirt, faded from washing, with a small Unich logo on the left chest",
    "an orange plastic stool sits in the frame, the same orange as the brand, ordinary and a little scuffed",
    "a small orange sticker with the Unich logo is stuck on the edge of the table or the shop counter",
    "someone in the background wears an orange shirt; the narrator does not",
    "an orange lanyard or wristband on the narrator, the kind handed out at a neighbourhood event",
    "a small orange cloth banner tied to the wall behind, weathered, only the logo readable",
    "an orange helmet resting on the motorbike seat in frame",
    "the narrator has an orange phone case; it stays in frame whenever the phone does"
  ];
  var brandCue = () => oneOf(BRAND_CUES);
  var UNICH_PRESET = {
    name: "app Unich (\u0111\xE0o FC m\u1ED7i ng\xE0y 3 ph\xFAt)",
    shortName: "c\xE1i app n\xE0y",
    slug: "unich",
    fcc: "7",
    fx: "26000",
    refInvitee: 10,
    refInviter: 5,
    allowedText: "Unich Network\nPay with Unich",
    market: "vn",
    avoidTopics: "",
    tzOffset: 7,
    fcPerDay: 1,
    ksps: [
      "\u0110\xD4NG NG\u01AF\u1EDCI TH\u1EACT: c\u1EA3 x\xF3m, c\u1EA3 ch\u1EE3, c\u1EA3 x\u01B0\u1EDFng \u0111ang l\xE0m c\xF9ng nhau \u2014 v\u1EDBi ng\u01B0\u1EDDi ch\u01B0a bi\u1EBFt g\xEC v\u1EC1 ti\u1EC1n s\u1ED1 th\xEC \u0111\xF4ng ng\u01B0\u1EDDi ch\xEDnh l\xE0 b\u1EB1ng ch\u1EE9ng \u0111\u1EA7u ti\xEAn r\u1EB1ng c\xE1i n\xE0y th\u1EADt v\xE0 \u0111\xE1ng tin. C\u01A1 ch\u1EBF \u0111\u1EB1ng sau: g\u1EB7p nhau ngo\xE0i \u0111\u1EDDi r\u1ED3i qu\xE9t m\xE3 QR c\u1EE7a nhau th\xEC t\u1ED1c \u0111\u1ED9 \u0111\xE0o t\u0103ng, g\u1EB7p c\xE0ng nhi\u1EC1u c\xE0ng nhanh, KH\xD4NG c\xF3 tr\u1EA7n, n\xEAn c\u1ED9ng \u0111\u1ED3ng n\xE0o \u0111\xF4ng v\xE0 ch\u0103m g\u1EB7p nhau th\xEC t\xEDch \u0111\u01B0\u1EE3c nhi\u1EC1u nh\u1EA5t",
      "m\u1ED7i ng\xE0y 3 ph\xFAt, b\u1EA5m \u0111\xE0o l\xE0 FC t\u1EF1 t\u0103ng d\u1EA7n theo th\u1EDDi gian; app ch\u1EC9 nh\u1EAFc \u0111\xE0o 3 l\u1EA7n m\u1ED7i ng\xE0y, kh\xF4ng b\u1EA5m c\u0169ng kh\xF4ng m\u1EA5t g\xEC",
      'TI\xCAU \u0110\u01AF\u1EE2C TH\u1EACT: m\u1ED9t v\xE0i qu\xE1n \u0110\u01AF\u1EE2C UNICH CH\u1ECCN TH\xCD \u0110I\u1EC2M nh\u1EADn thanh to\xE1n b\u1EB1ng FC \u2014 v\u1EDBi ng\u01B0\u1EDDi ch\u01B0a bi\u1EBFt g\xEC th\xEC "ti\xEAu \u0111\u01B0\u1EE3c \u1EDF ngo\xE0i \u0111\u1EDDi" l\xE0 b\u1EB1ng ch\u1EE9ng r\u1EB1ng n\xF3 ra ti\u1EC1n \u0111\u01B0\u1EE3c, m\u1EA1nh h\u01A1n m\u1ECDi l\u1EDDi gi\u1EA3i th\xEDch. Ph\u1EA3i k\u1EC3 \u0111\xFAng tr\u1EA1ng th\xE1i: "ti\u1EC7m c\u1EAFt t\xF3c \u0111\u1EA7u ti\xEAn \u1EDF x\xF3m em \u0110\u01AF\u1EE2C UNICH CH\u1ECCN TH\xCD \u0110I\u1EC2M thanh to\xE1n b\u1EB1ng FC", "m\u1EDBi c\xF3 m\u1EA5y ch\u1ED7 th\xF4i". TUY\u1EC6T \u0110\u1ED0I kh\xF4ng n\xF3i nh\u01B0 th\u1EC3 \u0111\xE2u c\u0169ng ti\xEAu \u0111\u01B0\u1EE3c',
      'NH\u1EACN \u0110\u01AF\u1EE2C TI\u1EC0N TH\u1EACT: Unich mua l\u1EA1i FC b\u1EB1ng ti\u1EC1n th\u1EADt, ch\u1EA1y M\u1ED6I NG\xC0Y v\xE0o m\u1ED9t gi\u1EDD c\u1ED1 \u0111\u1ECBnh \u2014 ng\u01B0\u1EDDi k\u1EC3 c\u1EA7m \u0111\u01B0\u1EE3c ti\u1EC1n l\xE0 b\u1EB1ng ch\u1EE9ng cu\u1ED1i c\xF9ng, ki\u1EC3m ch\u1EE9ng \u0111\u01B0\u1EE3c, ai c\u0169ng hi\u1EC3u. B\u1EA4T K\u1EC2 AI c\u0169ng c\xF3 th\u1EC3 \u0111\u01B0\u1EE3c mua l\u1EA1i, kh\xF4ng ph\u1EA3i d\xE2n chuy\xEAn, kh\xF4ng c\u1EA7n quen ai. Khi k\u1EC3 th\xEC KH\xD4NG \u0111\u1ECDc s\u1ED1 ti\u1EC1n, quy ra m\u1ED9t kho\u1EA3n chi \u0111\u1EDDi th\u01B0\u1EDDng ("\u0111\u1EE7 tr\u1EA3 ti\u1EC1n tr\u1ECD th\xE1ng n\xE0y", "\u0111\u1EE7 \u0111\xF3ng ti\u1EC1n \u0111i\u1EC7n c\u1EA3 th\xE1ng")',
      "m\u1EDDi b\u1EA1n theo link: NG\u01AF\u1EDCI \u0110\u01AF\u1EE2C M\u1EDCI nh\u1EADn 10 FC, ng\u01B0\u1EDDi m\u1EDDi nh\u1EADn 5 FC",
      "TIN VUI LI\xCAN T\u1EE4C: tu\u1EA7n n\xE0o c\u0169ng c\xF3 chuy\u1EC7n \u0111\u1EC3 k\u1EC3 \u2014 th\u1EE9 B\u1EA3y n\xE0o c\u0169ng l\xE0 Orange U Day, c\u1EA3 ph\u1ED1 m\u1EB7c m\xE0u cam ra \u0111\u01B0\u1EDDng g\u1EB7p nhau; ng\xE0y n\xE0o c\u0169ng c\xF3 ng\u01B0\u1EDDi \u0111\u01B0\u1EE3c mua l\u1EA1i FC; th\xEAm qu\xE1n m\u1EDBi \u0111\u01B0\u1EE3c ch\u1ECDn th\xED \u0111i\u1EC3m. C\u1ED9ng \u0111\u1ED3ng c\xF3 tin vui \u0111\u1EC1u \u0111\u1EB7n th\xEC ng\u01B0\u1EDDi ta m\u1EDBi ki\xEAn tr\xEC \u0111\xE0o m\u1ED7i ng\xE0y",
      "FCC \u2014 GI\xC1 T\u1EF0 DO \u0110\u1ED2NG THU\u1EACN: do ch\xEDnh c\u1ED9ng \u0111\u1ED3ng vote ra ch\u1EE9 kh\xF4ng ai \xE1p \u0111\u1EB7t, v\xE0 ng\u01B0\u1EDDi xem t\u1EF1 m\u1EDF app ra ki\u1EC3m \u0111\u01B0\u1EE3c; \u0111\xE2y l\xE0 c\u0103n c\u1EE9 \u0111\u1EC3 Unich mua l\u1EA1i FC"
    ],
    voice: 'ng\u01B0\u1EDDi d\xF9ng th\u1EADt k\u1EC3 chuy\u1EC7n, x\u01B0ng "em", g\u1ECDi kh\xE1n gi\u1EA3 "c\xE1c b\xE1c", gi\u1ECDng B\u1EAFc, h\u1ED3 h\u1EDFi, mu\u1ED1n T\xCDCH LU\u1EF8 th\u1EADt nhi\u1EC1u FC, c\xF3 m\u1ED9t c\xE2u c\u1EA3m th\xE1n',
    cta: '"c\xE1c b\xE1c t\xECm \u1EE9ng d\u1EE5ng Unich Network, m\xE3 m\u1EDDi c\u1EE7a em \u1EDF d\u01B0\u1EDBi b\xECnh lu\u1EADn nh\xE9" ho\u1EB7c "m\u1ED7i ng\xE0y \u0111\xE0o v\u1EDBi em 3 ph\xFAt nh\xE9"',
    situations: [
      "ch\u1EE3 c\xE1 5 gi\u1EDD s\xE1ng, c\xE1c c\xF4 v\u1EEBa c\xE2n c\xE1 v\u1EEBa gi\u01A1 m\xE3 QR qu\xE9t cho nhau \u0111\u1EC3 \u0111\xE0o nhanh h\u01A1n",
      "x\u01B0\u1EDFng may gi\u1EDD ngh\u1EC9 tr\u01B0a, c\u1EA3 d\xE3y m\xE1y c\xF9ng r\xFAt \u0111i\u1EC7n tho\u1EA1i ra",
      "t\u1ED5 h\u01B0u ng\u1ED3i gh\u1EBF nh\u1EF1a s\xE2n nh\xE0 v\u0103n ho\xE1, t\u1ED1i n\xE0o c\u0169ng g\u1EB7p \u0111\u1EC3 qu\xE9t m\xE3 cho nhau",
      "k\xFD t\xFAc x\xE1 11 gi\u1EDD \u0111\xEAm, 6 \u0111\u1EE9a m\u1ED9t ph\xF2ng c\xF9ng b\u1EA5m",
      "b\u1EBFn xe \xF4m \u0111\u1EA7u ng\xF5, 4 b\xE1c b\u1EA5m r\u1ED3i so nhau",
      "\u0111ang \u0103n c\u01A1m th\xEC \u0111i\u1EC7n tho\u1EA1i rung nh\u1EAFc \u0111\xE0o, b\u1ECF \u0111\u0169a b\u1EA5m r\u1ED3i \u0103n ti\u1EBFp",
      "\u0111ang b\xE1n b\xE1nh m\xEC, kh\xE1ch ch\u1EDD, ng\u1EA9ng l\xEAn b\u1EA5m \u0111\xE0o 3 gi\xE2y",
      "con \u1EDF th\xE0nh ph\u1ED1 g\u1ECDi video d\u1EA1y b\u1ED1 m\u1EB9 \u1EDF qu\xEA b\u1EA5m \u0111\xE0o",
      "h\xE0ng x\xF3m sang m\u01B0\u1EE3n thang th\u1EA5y \u0111ang m\u1EDF app, h\u1ECFi",
      "b\u1EA3o v\u1EC7 ca \u0111\xEAm \u0111i\u1EC7n tho\u1EA1i c\u0169 5 n\u0103m v\u1EABn \u0111\xE0o \u0111\u01B0\u1EE3c",
      "tr\u1EA3 ti\u1EC1n c\xE0 ph\xEA c\xF3c b\u1EB1ng c\xE1ch qu\xE9t m\xE3 QR, ch\u1ECB ch\u1EE7 qu\xE1n g\u1EADt",
      "mua rau ch\u1EE3 s\xE1ng, b\xE0 b\xE1n rau ch\xECa m\xE3 nh\u1EADn FC",
      'qu\xE1n c\xE0 ph\xEA \u0110\u1EA6U TI\xCAN trong ph\u1ED1 treo bi\u1EC3n "nh\u1EADn thanh to\xE1n b\u1EB1ng FC", kh\xE1ch tr\u1EBB t\xECm \u0111\u1EBFn th\u1EED',
      "tr\u1EA3 ti\u1EC1n c\u1EAFt t\xF3c b\u1EB1ng FC, th\u1EE3 b\u1EA3o th\xE1ng n\xE0y nh\u1EADn nhi\u1EC1u",
      "m\u1EDF app th\u1EA5y FC \u0111\u01B0\u1EE3c mua l\u1EA1i 50 \u0111\xF4, khoe v\u1EE3",
      "c\u1EA3 nh\xF3m 5 ng\u01B0\u1EDDi x\u01B0\u1EDFng may c\xF9ng c\xF3 t\xEAn trong \u0111\u1EE3t Buyback",
      'ng\u01B0\u1EDDi t\u1EEBng b\u1EA3o "l\u1EEBa \u0111\u1EA3o" nay c\u1EA7m ti\u1EC1n th\u1EADt',
      "so v\u1EDBi tu\u1EA7n l\xE0m th\xEAm 1,5 tri\u1EC7u m\u1EC7t nho\xE0i",
      "Orange U Day: c\u1EA3 l\xE0ng ven s\xF4ng m\u1EB7c \xE1o cam k\xE9o ra b\xE3i b\u1ED3i",
      "Orange U Day: ph\u1ED1 \u0111i b\u1ED9, \u0111\xE1m \u0111\xF4ng gi\u01A1 \u0111i\u1EC7n tho\u1EA1i",
      "Orange U Day: ch\u1EE3 huy\u1EC7n, ti\u1EC3u th\u01B0\u01A1ng m\u1EB7c \xE1o cam \u0111\u1EE9ng b\xE1n"
    ]
  };
  var HOOK_RULES = {
    su_viec: 'c\xE2u \u0111\u1EA7u ti\xEAn l\xE0 S\u1EF0 VI\u1EC6C \u0111ang x\u1EA3y ra ho\u1EB7c v\u1EEBa x\u1EA3y ra, B\u1EAET BU\u1ED8C c\xF3 M\u1ED0C GI\u1EDC \u0110\u1ED2NG H\u1ED2 + AI + L\xC0M G\xCC. PH\u1EA2I l\xE0 gi\u1EDD \u0111\u1ECDc \u0111\u01B0\u1EE3c tr\xEAn \u0111\u1ED3ng h\u1ED3 ("hai gi\u1EDD m\u01B0\u1EDDi ba ph\xFAt s\xE1ng nay", "\u0111\xFAng n\u0103m gi\u1EDD chi\u1EC1u em v\u1EEBa m\u1EDF ra xem", "b\u1EA3y gi\u1EDD k\xE9m em ra t\u1EDBi n\u01A1i"). \u0110O \u0110\u01AF\u1EE2C tr\xEAn 59 reel, v\xE0 \u0111\xE2y l\xE0 k\u1EBFt qu\u1EA3 DUY NH\u1EA4T qua ki\u1EC3m \u0111\u1ECBnh nghi\xEAm trong 80 ph\xE9p th\u1EED: c\xE2u m\u1EDF c\xF3 M\u1ED0C GI\u1EDC \u0110\u1ED2NG H\u1ED2 \u0111\u01B0\u1EE3c view g\u1EA5p 9,10 l\u1EA7n (p = 0,019), c\xF2n c\xE2u m\u1EDF ch\u1EC9 c\xF3 T\u1EEA CH\u1EC8 BU\u1ED4I m\xE0 kh\xF4ng c\xF3 gi\u1EDD th\xEC t\u1EF7 l\u1EC7 b\u1EA5m ch\u1EC9 b\u1EB1ng 0,69 l\u1EA7n (p = 0,0008) v\xE0 g\u1EA7n nh\u01B0 kh\xF4ng ai chia s\u1EBB. N\xF3i c\xE1ch kh\xE1c: "hai gi\u1EDD m\u01B0\u1EDDi ba ph\xFAt s\xE1ng" l\xE0 L\u1EDCI KHAI, c\xF2n "n\u1EEDa \u0111\xEAm" ch\u1EC9 l\xE0 c\xE1i PH\xD4NG. V\u1EADy n\xEAn C\u1EA4M d\xF9ng "s\xE1ng / tr\u01B0a / chi\u1EC1u / t\u1ED1i / \u0111\xEAm / h\xF4m qua" thay cho gi\u1EDD \u2014 ch\xFAng ch\u1EC9 \u0111\u01B0\u1EE3c \u0111\u1EE9ng K\xC8M m\u1ED9t con s\u1ED1 gi\u1EDD. Gi\u1EDD c\xE0ng l\u1EBB c\xE0ng th\u1EADt. C\u1EA5m m\u1EDF b\u1EB1ng m\xF4 t\u1EA3 ho\xE0n c\u1EA3nh chung chung',
    phan_de: 'c\xE2u \u0111\u1EA7u ti\xEAn g\u1ECDi t\xEAn \u0111\u1ECBnh ki\u1EBFn "c\xE1i n\xE0y l\u1EEBa \u0111\u1EA3o" NH\u01AFNG b\u1EB1ng gi\u1ECDng TR\u1EA4N AN, tuy\u1EC7t \u0111\u1ED1i kh\xF4ng c\xE3i nhau, kh\xF4ng m\u1EC9a ng\u01B0\u1EDDi nghi ng\u1EDD, kh\xF4ng do\u1EA1 ai b\u1ECF l\u1EE1. C\xE1ch \u0111\xFAng: ng\u01B0\u1EDDi k\u1EC3 t\u1EF1 nh\u1EADn m\xECnh c\u0169ng t\u1EEBng ngh\u0129 y nh\u01B0 v\u1EADy ("em c\u0169ng t\u01B0\u1EDFng v\u1EDB v\u1EA9n, m\xE3i m\u1EDBi d\xE1m th\u1EED"), ho\u1EB7c b\xECnh th\u1EA3n th\u1EEBa nh\u1EADn c\xE1i ch\u01B0a c\xF3 ("ch\u01B0a ai gi\xE0u v\xEC c\xE1i n\xE0y c\u1EA3 c\xE1c b\xE1c \u1EA1"), r\u1ED3i \u0111\u1EC3 vi\u1EC7c \u0111ang di\u1EC5n ra trong h\xECnh t\u1EF1 n\xF3i. \u0110O \u0110\u01AF\u1EE2C tr\xEAn 32 reel ti\u1EC1n s\u1ED1: gi\u1ECDng tr\u1EA5n an \u0111\u1EA1t t\u1EF7 l\u1EC7 t\u01B0\u01A1ng t\xE1c 3,13%, gi\u1ECDng \u0111\xE1nh tr\u1EA3 ng\u01B0\u1EDDi ho\xE0i nghi ch\u1EC9 0,22% \u2014 k\xE9m 14 l\u1EA7n d\xF9 view cao h\u01A1n',
    tin_vui: 'c\xE2u \u0111\u1EA7u ti\xEAn l\xE0 N\u1ED6I \u0110AU n\xF3i d\u01B0\u1EDBi d\u1EA1ng TIN VUI ("gi\u1EDD kh\xF4ng c\u1EA7n \u2026 n\u1EEFa c\xE1c b\xE1c \u1EA1")',
    cau_hoi: 'c\xE2u \u0111\u1EA7u ti\xEAn l\xE0 C\xC2U H\u1ECEI ho\u1EB7c C\xC2U \u0110\u1ED0 m\xE0 \u0111\xE1p \xE1n n\u1EB1m \u1EDF gi\u1EEFa video ("\u0111o\xE1n xem trong 5 ng\u01B0\u1EDDi n\xE0y ai nhi\u1EC1u FC nh\u1EA5t?"), ng\u01B0\u1EDDi xem ph\u1EA3i \u1EDF l\u1EA1i \u0111\u1EC3 bi\u1EBFt',
    con_so: 'c\xE2u \u0111\u1EA7u ti\xEAn l\xE0 M\u1ED8T CON S\u1ED0 c\u1EE5 th\u1EC3 g\u1EAFn v\u1EDBi tr\u1EA3i nghi\u1EC7m th\u1EADt ("30 ng\xE0y r\u1ED3i em m\u1EDBi d\xE1m n\xF3i", "x\xF3m em 27 nh\xE0 th\xEC 19 nh\xE0\u2026")'
  };
  var CLOSE_SAMPLES = [
    '"Ch\u1EE3, x\u01B0\u1EDFng may, x\xF3m tr\u1ECD \u2014 ch\u1ED7 n\xE0o \u0111\xF4ng ng\u01B0\u1EDDi th\xEC r\u1EE7 nhau l\xE0 nhanh nh\u1EA5t."',
    '"Ai b\xE1n h\xE0ng, ai ch\u1EA1y xe, ai tr\xF4ng con \u1EDF nh\xE0 \u0111\u1EC1u l\xE0m \u0111\u01B0\u1EE3c h\u1EBFt."',
    '"Nh\xE0 n\xE0o c\xF3 \xF4ng b\xE0 r\u1EA3nh bu\u1ED5i chi\u1EC1u l\xE0 h\u1EE3p nh\u1EA5t \u0111\u1EA5y."',
    '"M\u1EA5y ch\u1ED7 nh\u01B0 x\xF3m em, ng\xE0y n\xE0o c\u0169ng g\u1EB7p nhau, l\xE0 \u0103n nh\u1EA5t."',
    '"Ng\u01B0\u1EDDi \u0111i l\xE0m ca, ng\u01B0\u1EDDi bu\xF4n b\xE1n, ng\u01B0\u1EDDi \u1EDF nh\xE0 \u2014 ai c\u0169ng chen \u0111\u01B0\u1EE3c ba ph\xFAt."',
    '"Ch\u1ED7 n\xE0o m\xE0 c\u1EA3 x\xF3m quen m\u1EB7t nhau th\xEC l\xE0m c\xE1i n\xE0y l\xE0 \u0111\xFAng b\xE0i."'
  ];
  var CLOSE_RULES = {
    conclusion: 'c\u1EA3nh ch\u1ED1t l\xE0 K\u1EBET LU\u1EACN CHO HO\xC0N C\u1EA2NH + k\u1EC3 2-3 ki\u1EC3u ng\u01B0\u1EDDi h\u1EE3p d\xF9ng ("ai ng\xE0y n\xE0o c\u0169ng c\u1EA7m \u0111i\u1EC7n tho\u1EA1i th\xEC l\xE0m c\xE1i n\xE0y h\u1EE3p"); KH\xD4NG h\xF4 h\xE0o, kh\xF4ng h\u1EE9a h\u1EB9n',
    ref: 'L\u01AFU \xDD C\xC1CH M\u1EDCI: kh\xF4ng n\xF3i "b\u1EA5m link" nh\u01B0 qu\u1EA3ng c\xE1o, m\xE0 ch\u1EC9 ch\u1ED7 t\xECm \u2014 "c\xE1c b\xE1c t\xECm \u1EE9ng d\u1EE5ng Unich Network", "m\xE3 m\u1EDDi c\u1EE7a em em \u0111\u1EC3 d\u01B0\u1EDBi b\xECnh lu\u1EADn nh\xE9". C\u1EA3nh ch\u1ED1t c\xF3 \u0110\xDANG HAI C\xC2U RI\xCANG BI\u1EC6T, theo th\u1EE9 t\u1EF1, kh\xF4ng \u0111\u01B0\u1EE3c g\u1ED9p l\xE0m m\u1ED9t. C\xE2u 1 l\xE0 K\u1EBET LU\u1EACN CHO HO\xC0N C\u1EA2NH v\xE0 ph\u1EA3i G\u1ECCI T\xCAN 2-3 ki\u1EC3u ng\u01B0\u1EDDi ho\u1EB7c n\u01A1i ch\u1ED1n, \u0111\u1ECDc li\u1EC1n m\u1ED9t h\u01A1i nh\u01B0 \u0111\u1EBFm ("ch\u1EE3, x\u01B0\u1EDFng may, x\xF3m tr\u1ECD \u2014 ch\u1ED7 n\xE0o \u0111\xF4ng ng\u01B0\u1EDDi th\xEC r\u1EE7 nhau l\xE0 \u0111\xE0o nhanh nh\u1EA5t", "ai b\xE1n h\xE0ng, ai ch\u1EA1y xe, ai tr\xF4ng con \u2014 ng\xE0y n\xE0o c\u0169ng c\u1EA7m \u0111i\u1EC7n tho\u1EA1i th\xEC l\xE0m c\xE1i n\xE0y h\u1EE3p"). C\xE2u 2 m\u1EDBi l\xE0 c\xE2u m\u1EDDi TH\u1EACT TH\xC0 n\xF3i r\xF5 l\u1EE3i \xEDch c\u1EE7a ch\xEDnh ng\u01B0\u1EDDi k\u1EC3 ("c\xE1c b\xE1c \u0111\u0103ng k\xFD theo link c\u1EE7a em l\xE0 c\xF3 ngay 10 FC"). Thi\u1EBFu c\xE2u 1 l\xE0 h\u1ECFng: \u0111o tr\xEAn 60 reel, ch\u1ED1t b\u1EB1ng k\u1EBFt lu\u1EADn ho\xE0n c\u1EA3nh \u0103n \u0111\u1EE9t ch\u1ED1t b\u1EB1ng l\u1EDDi m\u1EDDi su\xF4ng.'
  };
  var CTA_KINDS = [
    { k: "lamngay", w: 20, text: 'CH\u1ED0T B\u1EB0NG VI\u1EC6C L\xC0M \u0110\u01AF\u1EE2C NGAY T\u1EA0I CH\u1ED6, kh\xF4ng b\u1EA3o t\u1EA3i g\xEC c\u1EA3: r\u1EE7 ng\u01B0\u1EDDi xem l\xE0m m\u1ED9t h\xE0nh \u0111\u1ED9ng nh\u1ECF xong trong 3 gi\xE2y ngay tr\xEAn \u0111i\u1EC7n tho\u1EA1i h\u1ECD \u0111ang c\u1EA7m ("c\xE1c b\xE1c th\u1EED m\u1EDF c\xE1i app \u0111ang c\xF3 xem c\xF3 c\xE1i n\xFAt cam n\xE0o kh\xF4ng", "b\xE1c n\xE0o \u0111ang \u1EDF ch\u1EE3 th\xEC ng\xF3 quanh xem c\xF3 ai \u0111ang b\u1EA5m kh\xF4ng", "th\u1EED g\xF5 Unich Network xem n\xF3 ra c\xE1i g\xEC"). \u0110O \u0110\u01AF\u1EE2C: ch\u1ED1t ki\u1EC3u l\xE0m-\u0111\u01B0\u1EE3c-ngay \u0111\u1EA1t t\u1EF7 l\u1EC7 t\u01B0\u01A1ng t\xE1c 4,81%, cao nh\u1EA5t trong 32 reel ti\u1EC1n s\u1ED1; video 374k view kh\xF4ng c\xF3 b\u01B0\u1EDBc h\xE0nh \u0111\u1ED9ng n\xE0o ch\u1EC9 \u0111\u1EA1t 2,43%' },
    { k: "none", w: 25, text: "KH\xD4NG M\u1EDCI G\xCC C\u1EA2: k\u1EBFt b\u1EB1ng \u0111\xFAng c\xE2u k\u1EBFt lu\u1EADn cho ho\xE0n c\u1EA3nh r\u1ED3i D\u1EEANG. Kh\xF4ng nh\u1EAFc m\xE3, kh\xF4ng nh\u1EAFc b\xECnh lu\u1EADn, kh\xF4ng r\u1EE7 t\u1EA3i, kh\xF4ng nh\u1EAFc t\xEAn \u1EE9ng d\u1EE5ng \u1EDF c\xE2u cu\u1ED1i. \u0110\u1EC3 ng\u01B0\u1EDDi xem t\u1EF1 t\xF2 m\xF2 \u0111i t\xECm \u2014 ki\u1EC3u k\u1EBFt n\xE0y c\xF3 \u1EDF nhi\u1EC1u reel m\u1EA1nh nh\u1EA5t, \u0111\u1EEBng s\u1EE3 thi\u1EBFu" },
    { k: "giatri", w: 20, text: 'g\u1EE3i GI\xC1 TR\u1ECA m\xE0 KH\xD4NG \u0111\u1ECDc s\u1ED1 ti\u1EC1n: "v\xE0o b\u1EB1ng m\xE3 c\u1EE7a em l\xE0 c\xF3 ngay ${n} FC" r\u1ED3i quy ra m\u1ED9t kho\u1EA3n chi \u0111\u1EDDi th\u01B0\u1EDDng k\xE8m ch\u1EEF N\u1EBEU, kh\xF4ng \u0111\u01B0\u1EE3c b\u1ECF ch\u1EEF n\u1EBFu: "ch\u1EEBng \u0111\xF3 n\u1EBFu mai n\xE0y l\xEAn s\xE0n c\u0169ng ${anchor} \u0111\u1EA5y". C\u1EA5m tuy\u1EC7t \u0111\u1ED1i con s\u1ED1 ti\u1EC1n. C\u1EA5m b\u1ECF ch\u1EEF "n\u1EBFu" \u2014 n\xF3i tr\u1ED1ng kh\xF4ng th\xE0nh ra h\u1EE9a h\u1EB9n' },
    { k: "don", w: 20, text: 'n\xF3i m\u1ED9c, kh\xF4ng quy ra ti\u1EC1n: "c\xE1c b\xE1c t\xECm \u1EE9ng d\u1EE5ng Unich Network, v\xE0o b\u1EB1ng m\xE3 c\u1EE7a em \u1EDF d\u01B0\u1EDBi b\xECnh lu\u1EADn l\xE0 c\xF3 ngay ${n} FC"' },
    { k: "thoiquen", w: 15, text: 'kh\xF4ng nh\u1EAFc s\u1ED1 m\xE1 g\xEC c\u1EA3, ch\u1EC9 r\u1EE7 th\xE0nh th\xF3i quen: "m\u1ED7i ng\xE0y \u0111\xE0o v\u1EDBi em ba ph\xFAt th\xF4i", "m\xE3 c\u1EE7a em \u1EDF d\u01B0\u1EDBi b\xECnh lu\u1EADn, b\xE1c n\xE0o r\u1EA3nh th\xEC v\xE0o"' }
  ];
  var oneOf = (xs) => xs[Math.floor(Math.random() * xs.length)];
  var TIRED = [
    // Thêm 17/09 — đo trên 23 kịch bản v37: các cụm này đã thành tật, phần lớn do chính ví dụ trong mã.
    // CHỈ cấm cụm ĐỆM. KHÔNG cấm cụm chỉ trỏ ("đây các bác nhìn") và cụm chỉ chỗ để mã
    // ("ở dưới bình luận") — bộ lọc đang BẮT BUỘC phải có hai thứ đó, cấm là tự mâu thuẫn.
    "m\xE0 em c\xF3 m\u1EA5t \u0111\u1ED3ng v\u1ED1n n\xE0o \u0111\xE2u",
    "c\xF3 m\u1EA5t \u0111\u1ED3ng v\u1ED1n n\xE0o \u0111\xE2u",
    "m\u1EA5t \u0111\u1ED3ng v\u1ED1n n\xE0o \u0111\xE2u",
    "t\xEDch ti\u1EC3u th\xE0nh \u0111\u1EA1i",
    "hi\u1EC7n ngay m\xE0n h\xECnh ch\xEDnh",
    "c\xE1c b\xE1c \u0111\u0103ng k\xFD theo link c\u1EE7a em",
    "\u0111\u0103ng k\xFD theo link c\u1EE7a em l\xE0 c\xF3 ngay",
    "th\xEC l\xE0m c\xE1i n\xE0y h\u1EE3p",
    "ai ng\xE0y n\xE0o c\u0169ng c\u1EA7m \u0111i\u1EC7n tho\u1EA1i",
    "ch\u1ED7 n\xE0o \u0111\xF4ng ng\u01B0\u1EDDi nh\u01B0 x\u01B0\u1EDFng em",
    "m\u1ED7i ng\xE0y \u0111\xE0o v\u1EDBi em ba ph\xFAt",
    "c\xE1c b\xE1c t\xECm \u1EE9ng d\u1EE5ng Unich Network, v\xE0o b\u1EB1ng m\xE3 c\u1EE7a em \u1EDF d\u01B0\u1EDBi b\xECnh lu\u1EADn",
    "t\xEDnh ra c\u0169ng g\u1EA7n m\u1ED9t tri\u1EC7u t\xE1m",
    "FC n\xF3 c\u1EE9 th\u1EBF t\u1EF1 nh\xEDch l\xEAn d\u1EA7n"
    // GỠ 18/09: bốn cụm CTA từng nằm ở đây đã xoá — chúng cấm đúng thứ mà lời dặn ở ĐẦU danh
    // sách này miễn trừ, và đúng thứ doctrine CTA đang BẮT Gemini viết ra. Đo 11:05: 5/7 lượt
  ];
  var OPEN_SHOTS = [
    "c\u1EA3nh \u0111\u1EA7u GI\u1EA4U B\xC0I: quay c\u1EADn m\u1ED9t th\u1EE9 ng\u01B0\u1EDDi xem ch\u01B0a \u0111o\xE1n ra l\xE0 g\xEC (b\xE0n tay \u0111ang che m\xE0n h\xECnh, m\u1ED9t v\u1EADt l\u1EA1 trong l\xF2ng b\xE0n tay, m\u1ED9t g\xF3c m\xE0n h\xECnh s\xE1ng), \u0111\u1EBFn gi\xE2y th\u1EE9 4-5 m\u1EDBi h\xE9 ra. Reel b\xE1n h\xE0ng d\xF9ng chi\xEAu n\xE0y \u0111\u1EA1t 1,05 tri\u1EC7u view, g\u1EA5p 4 l\u1EA7n video th\u1EE9 nh\xEC c\xF9ng shop",
    "c\u1EA3nh \u0111\u1EA7u QUY M\xD4: m\u1EDF b\u1EB1ng m\u1ED9t c\xFA lia cho l\u1ED9 c\u1EA3 d\xE3y ng\u01B0\u1EDDi / c\u1EA3 b\xE0n \u0111i\u1EC7n tho\u1EA1i s\xE1ng m\xE0n, \u0111\u1EC3 s\u1ED1 l\u01B0\u1EE3ng t\u1EF1 n\xF3i thay l\u1EDDi",
    "c\u1EA3nh \u0111\u1EA7u H\xC0NH \u0110\u1ED8NG D\u1EDE DANG: b\u1EAFt \u0111\xFAng l\xFAc tay \u0111ang l\xE0m d\u1EDF m\u1ED9t vi\u1EC7c (\u0111ang b\xF3c, \u0111ang g\u1EADp, \u0111ang ch\xECa ra), kh\xF4ng ph\u1EA3i l\xFAc \u0111\xE3 xong",
    "c\u1EA3nh \u0111\u1EA7u M\u1EB6T PH\u1EA2N \u1EE8NG: quay ng\u01B0\u1EDDi th\u1EE9 hai \u0111ang ng\u1EA1c nhi\xEAn nh\xECn v\xE0o c\xE1i g\xEC \u0111\xF3 ngo\xE0i khung, m\u1ED9t nh\u1ECBp sau m\u1EDBi cho th\u1EA5y h\u1ECD nh\xECn c\xE1i g\xEC"
  ];
  var VALUE_ANCHORS = [
    // Dạng ĐẾM ĐƯỢC — CEO chốt: "kiếm 10 bát phở", "kiếm 1 tháng đổ xăng xe". Nói lái đi, không nói giá.
    "b\u1EB1ng ch\u1EE5c b\xE1t ph\u1EDF ch\u1EE9 ch\u1EB3ng \xEDt",
    "\u0111\u1EE7 \u0111\u1ED5 x\u0103ng cho c\xE1i xe c\u1EA3 th\xE1ng",
    "b\u1EB1ng m\u1EA5y ch\u1EE5c c\u1ED1c c\xE0 ph\xEA s\xE1ng",
    "\u0111\u1EE7 mua g\u1EA1o cho nh\xE0 em \u0103n c\u1EA3 th\xE1ng",
    "b\u1EB1ng c\u1EA3 ch\u1EE5c b\u1EEFa c\u01A1m b\u1EE5i",
    "\u0111\u1EE7 ti\u1EC1n g\u1EEDi xe v\u1EDBi \u0103n tr\u01B0a c\u1EA3 th\xE1ng",
    "b\u1EB1ng m\u1EA5y bu\u1ED5i ch\u1EE3 c\u1EE7a em",
    "\u0111\u1EE7 m\u1EA5y b\xECnh ga cho nh\xE0 d\xF9ng",
    "b\u1EB1ng ch\u1EE5c l\u1EA7n c\u1EAFt t\xF3c",
    "\u0111\u1EE7 ti\u1EC1n v\xE9 xe v\u1EC1 qu\xEA m\u1ED9t chuy\u1EBFn",
    "\u0111\u1EE7 tr\u1EA3 ti\u1EC1n tr\u1ECD th\xE1ng n\xE0y",
    "\u0111\u1EE7 \u0111\xF3ng ti\u1EC1n \u0111i\u1EC7n v\u1EDBi ti\u1EC1n n\u01B0\u1EDBc c\u1EA3 th\xE1ng",
    "\u0111\u1EE7 ti\u1EC1n ch\u1EE3 c\u1EA3 tu\u1EA7n cho nh\xE0 em",
    "\u0111\u1EE7 \u0111\u1ED5 x\u0103ng \u0111i l\xE0m c\u1EA3 th\xE1ng",
    "\u0111\u1EE7 ti\u1EC1n h\u1ECDc th\xEAm cho th\u1EB1ng cu nh\xE0 em",
    "\u0111\u1EE7 ti\u1EC1n thu\u1ED1c cho b\xE0 c\u1EA3 th\xE1ng",
    "\u0111\u1EE7 ti\u1EC1n s\u1EEFa cho con m\u1EA5y th\xE1ng li\u1EC1n",
    "\u0111\u1EE7 \u0111\xF3ng ti\u1EC1n m\u1EA1ng v\u1EDBi truy\u1EC1n h\xECnh c\u1EA3 n\u0103m",
    "b\u1EB1ng m\u1EA5y ng\xE0y c\xF4ng \u0111\u1EE9ng m\xE1y c\u1EE7a em",
    "\u0111\u1EE7 khao c\u1EA3 nh\xE0 m\u1ED9t b\u1EEFa t\u01B0\u01A1m t\u1EA5t",
    "\u0111\u1EE7 mua c\xE1i xe \u0111\u1EA1p cho con \u0111i h\u1ECDc",
    "b\u1EB1ng c\u1EA3 tu\u1EA7n em ch\u1EA1y ch\u1EE3",
    "\u0111\u1EE7 ti\u1EC1n \u0103n s\xE1ng cho hai \u0111\u1EE9a c\u1EA3 th\xE1ng",
    "\u0111\u1EE7 tr\u1EA3 c\xE1i \u0111i\u1EC7n tho\u1EA1i em mua tr\u1EA3 g\xF3p"
  ];
  var TONES = [
    "k\u1EC3 t\u1EC9nh b\u01A1, nh\u01B0 \u0111ang thu\u1EADt l\u1EA1i cho h\xE0ng x\xF3m nghe, kh\xF4ng l\xEAn g\xE2n",
    "h\xE0o h\u1EE9ng ra m\u1EB7t, n\xF3i nhanh, chen m\u1ED9t c\xE2u c\u1EA3m th\xE1n",
    "h\u01A1i b\u1EF1c m\xECnh l\xFAc \u0111\u1EA7u r\u1ED3i d\u1ECBu xu\u1ED1ng khi th\u1EA5y k\u1EBFt qu\u1EA3",
    "t\u1EE7m t\u1EC9m h\xE0i h\u01B0\u1EDBc, t\u1EF1 tr\xEAu ch\xEDnh m\xECnh",
    "th\xEC th\u1EA7m nh\u01B0 k\u1EC3 b\xED m\u1EADt, gi\u1ECDng nh\u1ECF l\u1EA1i \u1EDF c\xE2u ch\u1ED1t",
    "ch\u1EADm r\xE3i, ki\u1EC3u ng\u01B0\u1EDDi t\u1EEBng tr\u1EA3i n\xF3i cho ng\u01B0\u1EDDi m\u1EDBi nghe",
    "b\u1EADn r\u1ED9n, v\u1EEBa l\xE0m v\u1EEBa n\xF3i, th\u1EC9nh tho\u1EA3ng \u0111\u1EE9t qu\xE3ng v\xEC vi\u1EC7c"
  ];
  var AUDIENCE_RULES = {
    ngoai: `NG\u01AF\u1EDCI XEM L\xC0 NG\u01AF\u1EDCI L\u1EA0 L\u01AF\u1EDAT QUA, ch\u01B0a t\u1EEBng nghe t\xEAn app, v\xE0 m\u1EB7c \u0111\u1ECBnh nghi ng\u1EDD m\u1ECDi th\u1EE9 d\xEDnh t\u1EDBi ti\u1EC1n s\u1ED1.
 - Nhi\u1EC7m v\u1EE5 c\u1EE7a video: khi\u1EBFn h\u1ECD D\u1EEANG L\u1EA0I r\u1ED3i T\xD2 M\xD2 \u0111i t\xECm app. Ch\u1EC9 s\u1ED1 s\u1ED1ng c\xF2n l\xE0 ng\u01B0\u1EDDi xem v\xE0 l\u01B0\u1EE3t t\xECm.
 - Ba gi\xE2y \u0111\u1EA7u ph\u1EA3i c\xF3 th\u1EE9 khi\u1EBFn ng\u01B0\u1EDDi ngo\xE0i d\u1EEBng, m\xE0 KH\xD4NG c\u1EA7n bi\u1EBFt app l\xE0 g\xEC: m\u1ED9t vi\u1EC7c l\u1EA1 \u0111ang x\u1EA3y ra, m\u1ED9t \u0111\xE1m \u0111\xF4ng, m\u1ED9t h\xE0nh \u0111\u1ED9ng d\u1EDF dang.
 - C\u1EA5m d\xF9ng t\u1EEB n\u1ED9i b\u1ED9 nh\u01B0 th\u1EC3 ai c\u0169ng hi\u1EC3u. Kh\xF4ng n\xF3i "\u0111\xE0o", "FC", "qu\xE9t m\xE3" \u1EDF c\xE2u \u0111\u1EA7u ti\xEAn m\xE0 ch\u01B0a cho th\u1EA5y c\u1EA3nh.
 - Ch\u1EC9 g\xE1nh M\u1ED8T b\u1EB1ng ch\u1EE9ng, k\u1EC3 cho k\u1EF9. \u0110\u1EEBng k\u1EC3 h\u1EBFt m\u1ECDi th\u1EE9 v\u1EC1 app.
 - Ch\u1ED1t l\xE0 ch\u1EC9 ch\u1ED7 t\xECm, kh\xF4ng ph\u1EA3i r\u1EE7 l\xE0m nhi\u1EC7m v\u1EE5.
 - KI\u1EC2U CH\u1ED0T: ch\u1ED1t b\u1EB1ng M\u1ED8T VI\u1EC6C PH\u1EA2I L\xC0M NGAY, gi\u1ECDng m\u1EC7nh l\u1EC7nh nh\u1EB9. \u0110o \u0111\u01B0\u1EE3c: ch\u1ED1t m\u1EC7nh l\u1EC7nh \u0111\u1EBB 2,74 b\xECnh lu\u1EADn/1000 view, ch\u1ED1t k\u1EBFt lu\u1EADn ch\u1EC9 1,51 (p = 0,010). Tuy\u1EBFn n\xE0y s\u1ED1ng b\u1EB1ng b\xECnh lu\u1EADn v\xEC b\xECnh lu\u1EADn l\xE0 th\u1EE9 \u0111\u1EA9y video \u0111i xa.
 - PH\u1EA2I CH\u1EA0M V\xC0O CHUY\u1EC6N GI\xC1 TR\u1ECA m\xE0 KH\xD4NG \u0111\u1ECDc ra con s\u1ED1: nh\xF3m c\xF3 ch\u1EA1m \u0111\u01B0\u1EE3c 2,44 b\xECnh lu\u1EADn/1000 view, nh\xF3m kh\xF4ng ch\u1EA1m ch\u1EC9 1,65 (p < 0,001). Im h\u1EB3n v\u1EC1 gi\xE1 tr\u1ECB l\xE0 m\u1EA5t \u0111i\u1EC3m, n\xF3i ra con s\u1ED1 l\xE0 ph\u1EA1m lu\u1EADt.
 - CH\u1EA4T H\xCCNH: g\u1EA7n g\u0169i, b\xECnh d\xE2n, b\u1EEBa b\u1ED9n th\u1EADt. Kh\xF4ng s\xE2n kh\u1EA5u, kh\xF4ng vest, kh\xF4ng ho\xE0nh tr\xE1ng.
 - \u0110\u01B0\u1EE3c d\xF9ng m\u1ED1c KHUY\u1EBEN M\xC3I ("h\xF4m nay c\xF2n su\u1EA5t", "s\u1EAFp h\u1EBFt") \u2014 th\u1EE9 n\xE0y \u0111\u1EBB b\xECnh lu\u1EADn (p = 0,005). Kh\xF4ng d\xF9ng m\u1ED1c s\u1EF1 ki\u1EC7n \u1EDF tuy\u1EBFn n\xE0y.`,
    feed: `NG\u01AF\u1EDCI XEM L\xC0 NG\u01AF\u1EDCI TRONG C\u1ED8NG \u0110\u1ED2NG, \u0111\xE3 c\xE0i app, \u0111\xE3 \u0111\xE0o h\xE0ng ng\xE0y, bi\u1EBFt h\u1EBFt t\u1EEB ng\u1EEF n\u1ED9i b\u1ED9.
 - Nhi\u1EC7m v\u1EE5 c\u1EE7a video KH\xC1C H\u1EB2N: gi\u1EEF kh\xED th\u1EBF, gi\u1EEF ni\u1EC1m tin, v\xE0 \u0111\u1EA9y h\u1ECD \u0111i R\u1EE6 TH\xCAM NG\u01AF\u1EDCI. Ch\u1EC9 s\u1ED1 s\u1ED1ng c\xF2n l\xE0 CHIA S\u1EBA, kh\xF4ng ph\u1EA3i view.
 - \u0110\u01B0\u1EE3c x\u01B0ng h\xF4 ki\u1EC3u ng\u01B0\u1EDDi nh\xE0 ngay t\u1EEB c\xE2u \u0111\u1EA7u ("anh em \u01A1i", "c\u1EA3 nh\xE0 m\xECnh"), \u0111\u01B0\u1EE3c d\xF9ng th\u1EB3ng t\u1EEB n\u1ED9i b\u1ED9, KH\xD4NG ph\u1EA3i gi\u1EA3i th\xEDch l\u1EA1i app l\xE0 g\xEC.
 - N\u1ED9i dung n\xEAn l\xE0 TIN VUI C\xD3 TH\u1EACT v\xE0 CHUY\u1EC6N C\u1EE6A NG\u01AF\u1EDCI TH\u1EACT trong c\u1ED9ng \u0111\u1ED3ng: th\xEAm qu\xE1n \u0111\u01B0\u1EE3c ch\u1ECDn th\xED \u0111i\u1EC3m, m\u1ED9t ng\u01B0\u1EDDi v\u1EEBa \u0111\u01B0\u1EE3c mua l\u1EA1i, m\u1ED9t x\xF3m m\u1EDBi l\u1EADp nh\xF3m g\u1EB7p nhau, Orange U Day tu\u1EA7n n\xE0y \u1EDF \u0111\xE2u.
 - C\u1EA3m x\xFAc \u0111\xFAng: t\u1EF1 h\xE0o v\xEC thu\u1ED9c v\u1EC1, v\xE0 s\u1ED1t ru\u1ED9t l\xE0nh m\u1EA1nh v\xEC th\u1EA5y ng\u01B0\u1EDDi kh\xE1c \u0111ang \u0111i nhanh h\u01A1n m\xECnh.
 - Ch\u1ED1t KH\xD4NG ph\u1EA3i l\xE0 m\u1EDDi t\u1EA3i app (h\u1ECD c\xF3 r\u1ED3i) m\xE0 l\xE0 M\u1ED8T VI\u1EC6C C\u1EE4 TH\u1EC2 L\xC0M \u0110\u01AF\u1EE2C H\xD4M NAY: r\u1EE7 m\u1ED9t ng\u01B0\u1EDDi trong nh\xE0 c\xF9ng \u0111\xE0o, mang m\xE3 \u0111i g\u1EB7p m\u1ED9t ng\u01B0\u1EDDi m\u1EDBi, k\u1EC3 l\u1EA1i chuy\u1EC7n n\xE0y cho m\u1ED9t ng\u01B0\u1EDDi ch\u01B0a bi\u1EBFt, th\u1EE9 B\u1EA3y m\u1EB7c \xE1o cam \u0111i ra ch\u1ED7 \u0111\xF4ng.
 - KI\u1EC2U CH\u1ED0T: ch\u1ED1t b\u1EB1ng M\u1ED8T K\u1EBET LU\u1EACN cho ho\xE0n c\u1EA3nh, kh\xF4ng h\xF4 h\xE0o. \u0110o \u0111\u01B0\u1EE3c: ch\u1ED1t k\u1EBFt lu\u1EADn \u0111\u1EBB chia s\u1EBB g\u1EA5p b\u1ED9i so v\u1EDBi ch\u1ED1t m\u1EC7nh l\u1EC7nh (p = 0,034), m\xE0 tuy\u1EBFn n\xE0y s\u1ED1ng b\u1EB1ng chia s\u1EBB.
 - PH\u1EA2I C\xD3 M\u1ED8T M\u1ED0C S\u1EF0 KI\u1EC6N C\xD3 TH\u1EACT: ng\xE0y, gi\u1EDD, ho\u1EB7c phi\xEAn b\u1EA3n c\u1EE5 th\u1EC3. \u0110o \u0111\u01B0\u1EE3c: c\xF3 m\u1ED1c th\xEC chia s\u1EBB 1,04 so v\u1EDBi 0,51 (p = 0,008); c\xF3 tin s\u1EF1 ki\u1EC7n t\u1EEB ngu\u1ED3n ngo\xE0i th\xEC 1,22 so v\u1EDBi 0,65 (p = 0,009); c\xF3 c\u1EA3 hai th\xEC p = 0,002. V\xE0 b\xECnh lu\u1EADn KH\xD4NG \u0111\u1ED5i \u2014 ngh\u0129a l\xE0 m\u1ED1c ch\u1EC9 \u0111\u1EBB chia s\u1EBB. Ng\u01B0\u1EDDi ta chia s\u1EBB m\u1ED9t C\xC1I H\u1EB8N, kh\xF4ng chia s\u1EBB m\u1ED9t l\u1EDDi h\u1EE9a.
 - CH\u1EA4T H\xCCNH: \u0111\u01B0\u1EE3c ph\xE9p trang tr\u1ECDng h\u01A1n tuy\u1EBFn ngo\xE0i (bu\u1ED5i g\u1EB7p m\u1EB7t \u0111\xF4ng ng\u01B0\u1EDDi, s\xE2n kh\u1EA5u c\xF3 th\u1EADt, ng\u01B0\u1EDDi m\u1EB7c ch\u1EC9nh t\u1EC1) v\xEC \u0111\xE2y l\xE0 l\xE1 c\u1EDD cho ng\u01B0\u1EDDi \u0111\xE3 tin gi\u01B0\u01A1ng l\xEAn. NH\u01AFNG c\u1EA5m tuy\u1EC7t \u0111\u1ED1i qu\u1ED1c k\u1EF3, qu\u1ED1c huy, qu\xE2n ph\u1EE5c, huy hi\u1EC7u nh\xE0 n\u01B0\u1EDBc v\xE0 m\u1ECDi l\u1EC5 nghi nh\xE0 n\u01B0\u1EDBc \u2014 \u0110i\u1EC1u 8 Lu\u1EADt Qu\u1EA3ng c\xE1o, ph\u1EA1t t\u1EDBi 200 tri\u1EC7u. V\xE0 c\u1EA5m ph\xE1o hoa d\u1EF1ng, c\u1EA5m m\xE0n h\xECnh LED b\u1ECBa t\xEAn ch\u01B0\u01A1ng tr\xECnh, c\u1EA5m con s\u1ED1 quy \u0111\u1ED5i.
 - C\u1EA4M TR\u1ED8N hai ch\u1EA5t trong m\u1ED9t video: m\u1EABu tr\u1ED9n g\u1EA7n g\u0169i v\u1EDBi sang tr\u1ECDng thua c\u1EA3 hai nh\xF3m thu\u1EA7n.
 - C\u1EA4M: n\xF3i nh\u01B0 th\u1EC3 ng\u01B0\u1EDDi xem ch\u01B0a bi\u1EBFt g\xEC, gi\u1EA3i th\xEDch l\u1EA1i c\u01A1 ch\u1EBF t\u1EEB \u0111\u1EA7u, v\xE0 c\u1EA5m m\u1ECDi l\u1EDDi h\u1EE9a l\xE0m gi\xE0u \u2014 ng\u01B0\u1EDDi trong c\u1ED9ng \u0111\u1ED3ng nghe th\u1EA5y h\u1EE9a h\u1EB9n l\xE0 m\u1EA5t ni\u1EC1m tin nhanh nh\u1EA5t.`
  };
  var IMPERFECTIONS = [
    "the subject sits off-centre, pushed to one side, and the top of the head is slightly cropped by the frame edge",
    "a stray everyday object intrudes at the edge of the frame: a flip-flop, a plastic bag, a charging cable, a half-drunk cup",
    "the light is uneven: a window or lamp blows out to white somewhere while the face stays a little too dark, no fill light",
    "the floor is not clean: scuff marks, a puddle, scraps, things left where they were dropped",
    "one part of the frame is slightly out of focus, as if the phone re-focused a moment late",
    "the camera is hand-held and drifts a little, never perfectly level, never perfectly still",
    "something in the background is unfinished: a bag half open, a stack leaning, a chair pulled out and not pushed back",
    "clothes are lived-in: a faded shirt, a stain, a sleeve pushed up unevenly, hair tied in a hurry"
  ];
  var someImperfections = (n = 3) => {
    const pool = IMPERFECTIONS.slice();
    const out = [];
    while (out.length < n && pool.length) out.push(pool.splice(Math.floor(Math.random() * pool.length), 1)[0]);
    return out.join("; ");
  };
  var EXPRESSIONS = {
    hook: [
      "eyes down on what the hands are doing, mouth slightly open mid-word, not looking at the camera",
      "caught mid-task, brow tight in concentration, head not yet turned",
      "eyebrows up, eyes fixed on something just out of frame, lips parted before speaking",
      "squinting at a small screen, leaning in closer, face lit from below by it",
      "a quick worried glance sideways, as if checking whether something was missed",
      "chin down, jaw set, working through something with the hands without looking up",
      "still turning toward the thing, weight shifting, face not yet settled"
    ],
    proof: [
      "eyes widening as the number registers, head pulling back an inch",
      "a short disbelieving laugh escaping, eyes staying on the screen",
      "leaning right in, one eye narrowing, checking it twice",
      "the eyebrows go up and stay up, mouth closing slowly",
      "a small satisfied nod, eyes still down, not performing for anyone",
      "lips pressed together holding something back, then a breath out",
      "looking up from the screen to the other person, face asking a question",
      "the face of someone re-reading the same line to be sure"
    ],
    talkA: [
      "talking while hands keep working, eyes on the work, glancing up only briefly",
      "mid-sentence, animated, using one hand to point at what is being described",
      "speaking quietly, head tilted toward the listener, not toward the camera",
      "explaining with a wry half-smile, shrugging one shoulder"
    ],
    talkB: [
      "listening with the head tilted, one eyebrow slightly up, not convinced yet",
      "interrupting, leaning forward, hand half raised",
      "watching the other person's screen instead of their face",
      "nodding slowly while still looking doubtful"
    ],
    action: ["fully absorbed in the task, face neutral, no awareness of being filmed"],
    cctv: ["no face visible, only hands and the object"]
  };
  var HANDS = [
    "the hands keep changing what they do: pick it up, turn it over, set it down, wipe them on the shirt",
    "one hand pulls the object closer to inspect it while the other keeps doing the previous task",
    "the hands are busy with the real work throughout and only pause to point",
    "thumb and finger turn the object to catch the light, then it is put down and picked up again",
    "the hands stack, sort or count something while talking, never idle",
    "one hand holds, the other taps, scrolls, then brushes something off"
  ];
  var AMBIENTS = [
    "continuous low murmur of an early morning market, with occasional plastic crates knocking, a scooter passing, water splashing on concrete; no music, no other dialogue",
    "the steady hum of sewing machines in a workshop, with a chair scraping, scissors clicking, a fan rattling; no music, no other dialogue",
    "street-side cafe room tone, with ice clinking in a glass, a chair dragged on tiles, a motorbike pulling away; no music, no other dialogue",
    "quiet courtyard evening air, with crickets, a metal gate creaking, a distant television through a wall; no music, no other dialogue",
    "the low buzz of a barber shop, with clippers starting and stopping, a spray bottle, hair being swept; no music, no other dialogue",
    "a small shop interior with a ceiling fan turning, boxes being moved, a plastic bag rustling; no music, no other dialogue",
    "warehouse room tone, with cardboard being cut, tape peeling off a roll, footsteps on concrete; no music, no other dialogue",
    "a kitchen at home, with a rice cooker clicking, a tap running briefly, a bowl set on a table; no music, no other dialogue",
    "the open air of a residential yard, with children far away, a broom on concrete, a bicycle bell; no music, no other dialogue",
    "a busy pavement, with traffic passing steadily, a horn once, a shutter being rolled up; no music, no other dialogue",
    "the inside of a small clothing stall, with hangers sliding on a rail, fabric being folded, a radio far off; no music, no other dialogue",
    "a quiet office-like room, with a fan, a chair creaking, a pen tapping on a desk; no music, no other dialogue",
    "the corner of a wet market, with water on tiles, a knife on a board, crates being stacked; no music, no other dialogue",
    "a repair counter, with small parts set down on metal, a drawer opening, a fan overhead; no music, no other dialogue",
    "a motorbike parking area, with engines idling nearby, a helmet set on a seat, a gate rolling; no music, no other dialogue",
    "a stairwell in an old apartment block, with footsteps echoing, a door closing above, a distant kettle; no music, no other dialogue",
    "a tea stall at dusk, with a kettle, low conversation nearby, a stool moved on concrete; no music, no other dialogue",
    "a delivery point, with parcels dropped onto a pile, tape being torn, a scooter arriving; no music, no other dialogue",
    "the front of a phone shop, with a glass case sliding, keys on a counter, traffic outside; no music, no other dialogue",
    "a community hall before a meeting, with plastic chairs being set out, voices far off, a microphone thumping once; no music, no other dialogue"
  ];

  // product-factory/v44_orange/config.ts
  var INITIAL_SETTINGS = { resolution: "360p", audioMode: "native", subtitles: false, parallel: 2, fast: false, batchParallel: 3, batchCount: 1, voMode: "host", narratorMode: "hidden", audience: "auto" };
  var makeLimiter = (n) => {
    let active = 0;
    const q = [];
    return async (fn) => {
      if (active >= n) await new Promise((r) => q.push(r));
      active++;
      try {
        return await fn();
      } finally {
        active--;
        const next = q.shift();
        if (next) next();
      }
    };
  };
  var VIDEO_MODEL = "Omni 1.1 Flash";
  var IMAGE_MODEL = "\u{1F34C} Nano Banana Pro";
  var TEXT_MODEL = "Gemini 3.0 Flash Preview";
  var SHOT_SECONDS = 10;
  var MAX_RETRIES = 3;
  var RETRY_DELAY_MS = 15e3;
  var RENDER_TIMEOUT_MS = 4 * 60 * 1e3;
  var MAX_PROMPT_CHARS = 3900;
  var MAX_QC_ROUNDS = 2;
  var BF = (sh) => ({
    framing: sh.framing || (sh.block === "talk" ? "medium shot, chest up, facing the camera" : "medium shot, candid third-person view, the people and the place visible"),
    camera: sh.camera || (sh.block === "talk" ? "handheld phone camera at chest height, nearly static" : "handheld phone camera, slight natural sway"),
    firstFrame: sh.firstFrame || "the action is just beginning",
    phone: !!sh.showsPhone
  });

  // product-factory/v44_orange/ffmpeg.ts
  var import_util = __require("@ffmpeg/util");
  var MSG = {
    LOAD: "LOAD",
    EXEC: "EXEC",
    WRITE_FILE: "WRITE_FILE",
    READ_FILE: "READ_FILE",
    DELETE_FILE: "DELETE_FILE",
    MKDIR: "MKDIR",
    ERROR: "ERROR",
    LOG: "LOG",
    PROGRESS: "PROGRESS"
  };
  var FFmpegService = class {
    worker = null;
    loaded = false;
    msgId = 0;
    callbacks = /* @__PURE__ */ new Map();
    logCb = null;
    progressCb = null;
    async load(onLog) {
      if (this.loaded && this.worker) return;
      this.logCb = onLog || null;
      const baseURL = "https://unpkg.com/@ffmpeg/core@0.12.6/dist/umd";
      const coreURL = await (0, import_util.toBlobURL)(`${baseURL}/ffmpeg-core.js`, "text/javascript");
      const wasmURL = await (0, import_util.toBlobURL)(`${baseURL}/ffmpeg-core.wasm`, "application/wasm");
      const workerBlob = this.buildWorkerBlob();
      this.worker = new Worker(workerBlob);
      this.worker.onmessage = ({ data: { id, type, data } }) => {
        if (type === MSG.LOG) {
          this.logCb?.(data?.message || "");
          return;
        }
        if (type === MSG.PROGRESS) {
          this.progressCb?.(data);
          return;
        }
        if (type === MSG.ERROR) {
          const cb2 = this.callbacks.get(id);
          if (cb2) {
            this.callbacks.delete(id);
            cb2.reject(new Error(data));
          }
          return;
        }
        const cb = this.callbacks.get(id);
        if (cb) {
          this.callbacks.delete(id);
          cb.resolve(data);
        }
      };
      await this.send(MSG.LOAD, { coreURL, wasmURL });
      this.loaded = true;
    }
    send(type, data) {
      return new Promise((resolve, reject) => {
        const id = this.msgId++;
        this.callbacks.set(id, { resolve, reject });
        this.worker.postMessage({ id, type, data });
      });
    }
    buildWorkerBlob() {
      const script = `
var MSG = { LOAD: "LOAD", EXEC: "EXEC", WRITE_FILE: "WRITE_FILE", READ_FILE: "READ_FILE", DELETE_FILE: "DELETE_FILE", MKDIR: "MKDIR", ERROR: "ERROR", LOG: "LOG", PROGRESS: "PROGRESS" };
var ffmpeg = null;
var load = function(opts) {
 importScripts(opts.coreURL);
 return self.createFFmpegCore({ mainScriptUrlOrBlob: opts.coreURL + "#" + btoa(JSON.stringify({ wasmURL: opts.wasmURL })) }).then(function(core) {
   ffmpeg = core;
   ffmpeg.setLogger(function(data) { self.postMessage({ type: MSG.LOG, data: data }); });
   ffmpeg.setProgress(function(data) { self.postMessage({ type: MSG.PROGRESS, data: data }); });
   return true;
 });
};
self.onmessage = function(e) {
 var id = e.data.id, type = e.data.type, _data = e.data.data, trans = [], data;
 var handleResult = function(result) {
   data = result;
   if (data instanceof Uint8Array) trans.push(data.buffer);
   self.postMessage({ id: id, type: type, data: data }, trans);
 };
 var handleError = function(err) { self.postMessage({ id: id, type: MSG.ERROR, data: err.toString() }); };
 try {
   if (type !== MSG.LOAD && !ffmpeg) { handleError(new Error("ffmpeg is not loaded")); return; }
   switch (type) {
     case MSG.LOAD: load(_data).then(handleResult).catch(handleError); return;
     case MSG.EXEC: ffmpeg.setTimeout(_data.timeout || -1); ffmpeg.exec.apply(ffmpeg, _data.args); data = ffmpeg.ret; ffmpeg.reset(); break;
     case MSG.WRITE_FILE: ffmpeg.FS.writeFile(_data.path, _data.data); data = true; break;
     case MSG.READ_FILE: data = ffmpeg.FS.readFile(_data.path); break;
     case MSG.DELETE_FILE: ffmpeg.FS.unlink(_data.path); data = true; break;
     case MSG.MKDIR: ffmpeg.FS.mkdir(_data.path); data = true; break;
     default: handleError(new Error("unknown: " + type)); return;
   }
 } catch (err) { handleError(err); return; }
 if (data instanceof Uint8Array) trans.push(data.buffer);
 self.postMessage({ id: id, type: type, data: data }, trans);
};`;
      return URL.createObjectURL(new Blob([script], { type: "text/javascript" }));
    }
    async exec(args) {
      return this.send(MSG.EXEC, { args, timeout: -1 });
    }
    async writeFile(name, data) {
      return this.send(MSG.WRITE_FILE, { path: name, data });
    }
    async readFile(name) {
      return this.send(MSG.READ_FILE, { path: name });
    }
    async deleteFile(name) {
      return this.send(MSG.DELETE_FILE, { path: name });
    }
    async mkdir(path) {
      return this.send(MSG.MKDIR, { path });
    }
  };
  var ffmpegService = new FFmpegService();

  // product-factory/v44_orange/flow.ts
  var import_flow_sdk2 = __require("flow-sdk");

  // product-factory/v44_orange/util.ts
  var import_flow_sdk = __require("flow-sdk");
  var extractJSON = (text) => {
    try {
      let t = text.replace(/```json|```/g, "").trim();
      const s = t.indexOf("{");
      const e = t.lastIndexOf("}");
      if (s !== -1 && e !== -1) t = t.substring(s, e + 1);
      t = t.replace(/,\s*([}\]])/g, "$1");
      return JSON.parse(t);
    } catch (e) {
      return null;
    }
  };
  var withTimeout = (p, ms, label) => Promise.race([p, new Promise((_, rej) => setTimeout(() => rej(new Error(`${label} qu\xE1 ${Math.round(ms / 6e4)} ph\xFAt`)), ms))]);
  var slugify = (s) => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/đ/g, "d").replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "").slice(0, 24) || "x";
  var askText = async (prompt, systemInstruction, images = [], timeoutMs = 9e4) => {
    const opts = { systemInstruction, modelDisplayName: TEXT_MODEL, thinkingLevel: "low" };
    if (images.length) opts.images = images;
    const res = await withTimeout(import_flow_sdk.Flow.generate.text(prompt, opts), timeoutMs, "Gemini");
    return String(res?.text || "");
  };
  var countSyllables = (s) => s.replace(/[^\p{L}\p{N}\s]/gu, " ").split(/\s+/).filter(Boolean).length;

  // product-factory/v44_orange/flow.ts
  var MAX_GEN_PER_MIN = 6;
  var genTimes = [];
  var flowBlocked = "";
  var FLOW_BLOCK_COOLDOWN_MS = 5 * 60 * 1e3;
  var flowBlockedAt = 0;
  var flowSlowUntil = 0;
  var resetFlowBlock = () => {
    flowBlocked = "";
    flowBlockedAt = 0;
  };
  var isFlowBlockMsg = (m) => /unusual activity|FLOW_BLOCKED|403[^\d]*(forbidden|quota|rate|too many)|(forbidden|quota|rate limit|too many)[^\d]*403/i.test(m);
  var pace = async () => {
    for (; ; ) {
      const now = Date.now();
      if (flowBlocked) {
        if (now - flowBlockedAt >= FLOW_BLOCK_COOLDOWN_MS) {
          flowBlocked = "";
          flowBlockedAt = 0;
          flowSlowUntil = now + 10 * 60 * 1e3;
        } else {
          await new Promise((r) => setTimeout(r, 5e3));
          continue;
        }
      }
      genTimes = genTimes.filter((t) => now - t < 6e4);
      const last = genTimes.length ? genTimes[genTimes.length - 1] : 0;
      const slow = now < flowSlowUntil;
      const cap = slow ? Math.ceil(MAX_GEN_PER_MIN / 2) : MAX_GEN_PER_MIN;
      const gap = slow ? 5e3 : 2e3;
      if (genTimes.length < cap && now - last >= gap) {
        genTimes.push(now);
        return;
      }
      await new Promise((r) => setTimeout(r, 1500));
    }
  };
  var flowCall = async (fn) => {
    await pace();
    try {
      return await fn();
    } catch (e) {
      const m = String(e?.message || e);
      if (isFlowBlockMsg(m)) {
        flowBlocked = m.slice(0, 120);
        flowBlockedAt = Date.now();
        throw new Error("FLOW_BLOCKED: " + flowBlocked);
      }
      throw e;
    }
  };
  var capPrompt = (p, nhan) => {
    if (p.length <= MAX_PROMPT_CHARS) return p;
    console.warn(`[PROMPT] ${nhan} ${p.length} k\xFD t\u1EF1 > ${MAX_PROMPT_CHARS}, c\u1EAFt b\u1EDBt`);
    return p.slice(0, MAX_PROMPT_CHARS - 1);
  };
  var genImage = async (prompt0, refs, aspectRatio) => {
    const prompt = capPrompt(prompt0, "\u1EA3nh");
    console.log("[IMAGE PROMPT]", prompt.length, prompt, "[REFS]", refs);
    const res = await flowCall(() => withTimeout(import_flow_sdk2.Flow.generate.image({ prompt, referenceImageMediaIds: refs.slice(0, 5), aspectRatio, modelDisplayName: IMAGE_MODEL }), 3 * 60 * 1e3, "\u1EA2nh"));
    return { mediaId: String(res.mediaId), base64: String(res.base64) };
  };
  var saveNamed = async (base64, name) => {
    const up = await withTimeout(import_flow_sdk2.Flow.upload({ base64, mimeType: "image/png", name }), 6e4, "L\u01B0u \u1EA3nh");
    await new Promise((r) => setTimeout(r, 1200));
    return String(up.mediaId);
  };
  var genShotVideo = async (prompt0, firstFrameMediaId, refs, settings, durationSeconds = SHOT_SECONDS) => {
    const prompt = capPrompt(prompt0, "video");
    console.log("[VIDEO PROMPT]", prompt.length, prompt, "[REFS]", refs);
    const options = { prompt, modelDisplayName: VIDEO_MODEL, firstFrameImageMediaId: firstFrameMediaId, referenceImageMediaIds: refs.slice(0, 5), aspectRatio: "9:16", durationSeconds, resolution: settings.resolution };
    const res = await flowCall(() => import_flow_sdk2.Flow.generate.video(options));
    return { base64: String(res.base64 || ""), mediaId: String(res.mediaId || ""), mimeType: String(res.mimeType || "video/mp4") };
  };
  var qcAudio = async (videoBase64, lines) => {
    try {
      const opts = { systemInstruction: "You transcribe Vietnamese speech in short videos exactly as spoken. JSON only.", modelDisplayName: TEXT_MODEL, thinkingLevel: "low", videos: [{ base64: videoBase64, mimeType: "video/mp4" }] };
      const prompt = `Transcribe all Vietnamese speech in this video verbatim. The intended script is: ${lines.map((l, i) => `(${i + 1}) ${l}`).join(" ")}. Return JSON {"transcript":"...","repeated":true/false (a sentence or phrase is spoken twice in a row),"garbled":true/false (unintelligible or non-Vietnamese sounds),"match":0-100 (how much of the intended script was actually spoken, in order),"cutOff":true/false (the speech stops mid-sentence at the very end of the clip, or the last intended sentence is missing or not finished)}`;
      const res = await withTimeout(import_flow_sdk2.Flow.generate.text(prompt, opts), 9e4, "QC ti\u1EBFng");
      const parsed = extractJSON(String(res?.text || ""));
      if (!parsed) return { ok: true, note: "kh\xF4ng \u0111\u1ECDc \u0111\u01B0\u1EE3c k\u1EBFt qu\u1EA3 QC ti\u1EBFng" };
      const ok = parsed.repeated !== true && parsed.garbled !== true && Number(parsed.match ?? 100) >= 60;
      return { ok, cutOff: parsed.cutOff === true, note: `${ok ? "\u0111\u1EA1t" : "CH\u01AFA"} \xB7 kh\u1EDBp ${parsed.match ?? "?"}%${parsed.repeated ? " \xB7 l\u1EB7p c\xE2u" : ""}${parsed.garbled ? " \xB7 l\xEDu nh\xEDu" : ""}${parsed.cutOff ? " \xB7 C\u1EE4T c\xE2u cu\u1ED1i" : ""} \xB7 "${String(parsed.transcript || "").slice(0, 120)}"` };
    } catch (e) {
      return { ok: true, note: "QC ti\u1EBFng l\u1ED7i, b\u1ECF qua: " + String(e?.message || e).slice(0, 80) };
    }
  };
  var probeAudio = async (b64) => {
    try {
      const bytes = Uint8Array.from(atob(b64), (c) => c.charCodeAt(0));
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const buf = await ctx.decodeAudioData(bytes.buffer.slice(0));
      const ch = buf.getChannelData(0);
      let peak = 0, sq = 0, n = 0;
      for (let i = 0; i < ch.length; i += 16) {
        const a = Math.abs(ch[i]);
        if (a > peak) peak = a;
        sq += a * a;
        n++;
      }
      const rms = Math.sqrt(sq / Math.max(1, n));
      const win = Math.max(1, Math.floor(buf.sampleRate * 0.05));
      const env = [];
      for (let s = 0; s + win <= ch.length; s += win) {
        let e = 0;
        for (let i = s; i < s + win; i += 4) e += ch[i] * ch[i];
        env.push(Math.sqrt(e / (win / 4)));
      }
      const envPeak = env.reduce((a, b) => Math.max(a, b), 0);
      const thr = Math.max(0.012, envPeak * 0.15);
      let first = -1, last = -1;
      env.forEach((e, i) => {
        if (e > thr) {
          if (first < 0) first = i;
          last = i;
        }
      });
      const speechStart = first < 0 ? 0 : first * 0.05;
      const speechEnd = last < 0 ? 0 : (last + 1) * 0.05;
      ctx.close();
      const silent = peak < 0.01;
      return { hasAudio: !silent, info: `audio ${buf.duration.toFixed(1)}s, peak ${peak.toFixed(2)}, rms ${rms.toFixed(3)}${silent ? " (c\xE2m)" : `, n\xF3i ${speechStart.toFixed(1)}\u2013${speechEnd.toFixed(1)}s`}`, rms, speechStart, speechEnd };
    } catch (e) {
      return { hasAudio: false, info: "kh\xF4ng c\xF3 k\xEAnh audio", rms: 0, speechStart: 0, speechEnd: 0 };
    }
  };

  // product-factory/v44_orange/types.ts
  var SCREENS = [
    { key: "dao", label: "\u0110\xE0o (n\xFAt \u0111\xE0o + s\u1ED1 FC \u0111ang t\u0103ng)", hint: "the mining screen: the round button and the FC counter going up" },
    { key: "nhac", label: "Th\xF4ng b\xE1o nh\u1EAFc \u0111\xE0o", hint: "the notification reminding the user to mine" },
    { key: "quet", label: "Qu\xE9t m\xE3 QR c\u1EE7a nhau (g\u1EB7p nhau)", hint: "the QR code / scanning screen used when two people meet" },
    { key: "tra", label: "Tr\u1EA3 ti\u1EC1n b\u1EB1ng FC \u1EDF qu\xE1n", hint: "the payment screen after scanning a shop QR code" },
    { key: "buyback", label: "Buyback (FC \u0111\u01B0\u1EE3c mua l\u1EA1i)", hint: "the buyback screen showing the FC that was bought back" },
    { key: "moi", label: "M\u1EDDi b\u1EA1n / link gi\u1EDBi thi\u1EC7u", hint: "the invite screen with the referral link" }
  ];
  var SCREEN_KEYS = SCREENS.map((s) => s.key);
  var screenHint = (k) => SCREENS.find((s) => s.key === k)?.hint || SCREENS[0].hint;
  var screenLabel = (k) => SCREENS.find((s) => s.key === k)?.label || String(k || "");
  var stripLoc = (t) => String(t || "").replace(/\b(location|bối cảnh|địa điểm|scene)\s*[AB]\b\s*[:\-–—]?\s*/gi, "").replace(/^\s*[AB]\s*[:\-–—]\s*/, "").replace(/\(\s*[AB]\s*\)/g, "").replace(/,?\s*\b(colou?rful\s+|national\s+|small\s+)*(flags?|flagpoles?|bunting|pennants?|cờ|quốc kỳ)\b[^,.;]*/gi, "").replace(/\s{2,}/g, " ").replace(/\s+([,.;])/g, "$1").replace(/^[,;\s]+/, "").trim();
  var placeOf = (s, sh) => sh.location === "B" && s.placeB ? { place: stripLoc(s.placeB), details: stripLoc(s.detailsB || s.details) } : { place: stripLoc(s.place), details: stripLoc(s.details) };
  var narratorOf = (s) => s.roles.find((r) => r.role === "narrator") || s.roles[0];
  var roleOf = (s, role) => s.roles.find((r) => r.role === role);
  var rollAudience = (a) => a === "auto" ? Math.random() < 0.8 ? "ngoai" : "feed" : a;

  // product-factory/v44_orange/imaging.ts
  var phoneLook = "Candid photo taken on a phone, deep depth of field, background fully visible, mixed real lighting, mild sensor noise, unretouched skin, no beauty filter, no text, no logo, no watermark.";
  var IMPERFECT_LINE = () => ` This must look like a photo someone took in a hurry on their own phone, NOT like an advertisement: ${someImperfections(3)}. Keep the horizon roughly level \u2014 off-centre and cropped is right, a tilted cinematic angle is not.`;
  var LIGHT_LINE = " The light is real and uneven, coming from whatever the place actually has; no added fill light, no evenly lit studio look, and no blown-out white patch dominating the opening frame.";
  var OPEN_SIZE_LINE = " This is the opening frame: it opens on the OBJECT or on the place where the thing is happening, not on a person's face \u2014 a hand already doing something, the thing itself, the spot where it happened. If a face is visible at all it is turned down toward the work. Nobody smiles at the camera and nobody looks into the lens.";
  var castSheetPrompt = (c) => `A character sheet of one Vietnamese adult (role: ${c.role}); if this person is a woman she is 25-32, naturally good-looking with healthy clear skin, thick dark hair and a full balanced figure, dressed decently in ordinary everyday work clothes that fit without clinging \u2014 never short, never low-cut, nothing bared at the waist, shoulders or back, no posing; if a man, 25-40 and ordinary-looking: ${c.look}; Vietnamese (East Asian) face and features. Head-and-shoulders view on the left and a full-body standing view on the right, neutral expression, seamless plain light grey background, even soft light, same person in both views, no lines, no text, no props. Photorealistic.`;
  var keyframePrompt = (s, shot, p, hasScreenRef, isFirst, correction) => {
    const present = (shot.roles || []).map((r) => roleOf(s, r)).filter(Boolean);
    const who = present.map((c) => `${c.look}, ${shot.expression} (exactly the same person as in the character sheet reference for ${c.role}: same face, hair and clothes, and the SAME outfit with the same sleeves, colors and fabric \u2014 never a different shirt)`).join("; ");
    const bf = BF(shot);
    const phone = shot.showsPhone ? present.length === 0 ? ` One hand holds a smartphone toward the camera, screen facing the viewer and filling most of the frame, no face: the screen shows ${hasScreenRef ? "exactly the app screen in the app screenshot reference image, pixel for pixel" : screenHint(shot.screen)}. Reproduce that screenshot EXACTLY as given, including any areas that are already blurred or smudged in it \u2014 do not sharpen them, do not fill them in, do not invent a face, a name or a number where the reference is blurred.` : ` Exactly ONE phone, held by one of the people listed in their own hand${present.length > 1 ? " (both can lean over the same screen)" : ""}; the screen shows ${hasScreenRef ? "exactly the app screen in the app screenshot reference image, pixel for pixel" : screenHint(shot.screen)}. Reproduce that screenshot EXACTLY as given, including any areas that are already blurred or smudged in it \u2014 do not sharpen them, do not fill them in, do not invent a face, a name or a number where the reference is blurred. No hands belonging to anyone else, no camera operator.` : ` No phone anywhere in this frame, no screen, no inset.`;
    const brand = ` Brand text rule: the ONLY words that may appear anywhere in this image are ${p.allowedText.split("\n").filter(Boolean).map((x) => `"${x.trim()}"`).join(" or ")}, spelled exactly like that, and only where a real place would have them \u2014 a small sign hung outside the shop, a card on the counter, a logo printed on a T-shirt. No other lettering anywhere: no prices, no phone numbers, no names, no captions, no watermarks.`;
    const noInset = ` The picture is one single photo: no picture-in-picture, no inset image, no floating screen or second phone at any edge or corner, no split screen, no border, no letters, labels or markers drawn anywhere.`;
    const cont = isFirst ? "" : ` The SAME place as the reference scene photo: reproduce its walls, floor, furniture, stalls, counters and objects exactly (this is the same place a moment later), same light and same time of day; only the camera angle and the people change \u2014 ONLY the people listed above are in this frame, the reference photo may show a different person, do not copy them; framing: ${bf.framing}.`;
    const fix = correction ? ` CORRECTION: ${correction}` : "";
    const dirt = IMPERFECT_LINE() + LIGHT_LINE + (isFirst ? OPEN_SIZE_LINE : "");
    const brandCueLine = ` One ordinary object in the frame carries the brand's orange: ${brandCue()}. It must look like something that is simply there, never like an advertisement or a printed promotional banner.`;
    const noShowroom = " The place is a real working place, not a styled one: no even three-point lighting, no tidy catalogue display, no decorative plants or flowers, no matching uniforms, nothing arranged for a photo.";
    const loc = placeOf(s.world, shot);
    const dung = (dd, bc, ns) => `${phoneLook} ${bf.framing}. ${loc.place} (in Vietnam), ${shot.timeOfDay || s.world.timeOfDay}, ${shot.timeOfDay ? "real available light" : s.world.light}. Visible details: ${loc.details}. Everything looks typically Vietnamese, nothing Western. ${present.length ? `${who} \u2014 ${shot.spot || "in the scene"}. Exactly ${present.length} ${present.length === 1 ? "person" : "people"} in the picture${present.length === 2 ? ` \u2014 the ${present[0].role} and the ${present[1].role}, two clearly different people, no duplicate of either, placed exactly as in the framing` : ""}; no camera operator, no bystander.` : `No people in the picture \u2014 ${shot.spot || "in the scene"}.`} This is the FIRST frame of a ${shot.duration}-second clip, the very start of the action: ${bf.firstFrame}${shot.prop ? `, holding ${shot.prop} in one hand` : ""}.${phone}${brand}${noInset}${cont} Nobody holds anything else${shot.prop ? ` except ${shot.prop}` : ""} (no hat, no cup, no bag). Everyone in the picture is an adult aged between 25 and 40 \u2014 working age, nobody elderly, nobody grey-haired, no children.${dd}${bc}${ns}${fix}`;
    for (const bo of [[dirt, brandCueLine, noShowroom], [dirt, brandCueLine, ""], [dirt, "", ""], ["", "", ""]]) {
      const p2 = dung(bo[0], bo[1], bo[2]);
      if (p2.length <= MAX_PROMPT_CHARS) return p2;
    }
    return dung("", "", "");
  };
  var qcKeyframe = async (kfBase64, casts, shot, p) => {
    const images = [{ base64: kfBase64, mimeType: "image/png" }];
    const withSheet = casts.filter((c) => c.sheetBase64);
    withSheet.forEach((c) => images.push({ base64: c.sheetBase64, mimeType: "image/png" }));
    const sheetLines = withSheet.map((c, i) => `Image ${i + 2} is the character sheet for role "${c.role}".`).join(" ");
    const prompt = `Image 1 is a generated keyframe. ${sheetLines}
M\u1EE8C KI\u1EC2M: EASY. Only report a problem an ordinary viewer would notice within one second of seeing the frame, scrolling on a phone. Ignore anything you had to hunt for: slight blur, mild depth-of-field, minor clutter, small imperfect fingers, faint background text, a slightly loose crop. Those are wanted \u2014 this is meant to look like a photo taken in a hurry on a phone, not a studio shot. When in doubt, pass.
Expected framing for this shot: ${BF(shot).framing}.
Check and return JSON only: {"roles":[${withSheet.map((c) => `{"role":"${c.role}","samePerson":true/false}`).join(",")}] (same face, hair, clothes as that role's character sheet), "phoneOk": true/false (${shot.showsPhone ? "at least one phone is visible, held by a person in the frame in their own hand or by a single hand if no face is shown, and its screen is readable. Phones held by people in the BACKGROUND are fine and do not count" : "nobody in the FOREGROUND is holding a phone. Phones in the background, in pockets or on a table are fine and do not count"}), "hasInset": true/false (a picture-in-picture, inset image, floating phone or screen pasted at an edge or corner, or a split screen), "framingOk": true/false (false ONLY when the shot size is plainly wrong \u2014 a full-body wide shot where a close shot was asked for, or the opposite. A slightly loose or slightly off-centre frame is CORRECT and must be true), "extraProps": ["ONLY objects actually gripped in the hands of the ${casts.length ? "people described above" : "person"}, and ONLY if they would confuse the action \u2014 an everyday object such as a hand fan, a cup, a bag, a tool or a basket is FINE and must NOT be listed. Never list furniture, motorbikes, benches, chairs, tables or anything sitting in the scene rather than held in a hand. ${shot.prop ? ` The ${shot.prop.replace(/^(a|an|the)\s+/i, "")} is meant to be in this person's hands by design \u2014 it must NEVER be listed.` : ""} Empty list if unsure"], "hasFlagOrEmblem": true/false (any national flag, national emblem, military or police uniform or insignia, or state ceremony staging anywhere in the image, including a pin or sticker on clothing), "hasWeaponOrCrime": true/false (a weapon, or anyone breaking in, stealing, fighting or being restrained), "anatomyBad": true/false (ONLY true when a hand or face is deformed badly enough to be obvious at a glance \u2014 an extra or missing finger on a hand that fills a large part of the frame, a melted face, a limb attached wrongly. Slightly odd fingers in the background or at small size are FINE and must be false), "hasChildren": true/false, "hasText": true/false (readable lettering drawn in the scene OTHER THAN ${p.allowedText.split("\n").filter(Boolean).map((x) => `"${x.trim()}"`).join(" or ")} \u2014 those exact words on a shop sign or a T-shirt are expected and do NOT count; text on the phone screen does not count either), "brandMisspelled": true/false (one of those approved words appears but is misspelled or garbled), "privacyBlurred": true/false (${shot.showsPhone ? "any area that is blurred in the app screenshot reference is still blurred here, not sharpened or filled in" : "ALWAYS answer true, this shot has no phone"}), "issues": ["short concrete fixes, English"]}`;
    const parsed = extractJSON(await askText(prompt, "You are a strict visual QC checker. JSON only.", images));
    if (!parsed) return { ok: true, issues: [], raw: null };
    const issues = Array.isArray(parsed.issues) ? parsed.issues.map(String) : [];
    let ok = true;
    const badRoles = (Array.isArray(parsed.roles) ? parsed.roles : []).filter((r) => r && r.samePerson === false).map((r) => String(r.role));
    if (badRoles.length) {
      ok = false;
      issues.unshift(`make ${badRoles.join(", ")} identical to the character sheet (face, hair, clothes)`);
    }
    if (parsed.phoneOk === false) {
      ok = false;
      issues.unshift(shot.showsPhone ? "exactly one phone, held by a person in the frame in their own hand; remove any foreign hand" : "remove every phone and screen from this frame");
    }
    if (parsed.hasInset === true) {
      ok = false;
      issues.unshift("remove the inset / picture-in-picture / floating screen; one single plain photo");
    }
    if (parsed.framingOk === false) {
      ok = false;
      issues.unshift("the shot size is wrong: use exactly the framing already described above, no wider and no closer");
    }
    if (Array.isArray(parsed.extraProps) && parsed.extraProps.length) {
      ok = false;
      issues.unshift("remove from the hands: " + parsed.extraProps.join(", "));
    }
    if (parsed.hasFlagOrEmblem === true) {
      ok = false;
      issues.unshift("remove every national flag, emblem, uniform insignia and state ceremony staging, including small pins on clothing");
    }
    if (parsed.hasWeaponOrCrime === true) {
      ok = false;
      issues.unshift("remove any weapon and any depiction of breaking in, theft, fighting or restraint");
    }
    if (parsed.anatomyBad === true) {
      ok = false;
      issues.unshift("fix the deformed hand or face: correct number of fingers, natural joints, one head per person");
    }
    if (parsed.hasChildren === true) {
      ok = false;
      issues.unshift("remove any child; adults only");
    }
    if (parsed.hasText === true) {
      ok = false;
      issues.unshift("remove every word from the scene except the approved brand wording");
    }
    if (parsed.brandMisspelled === true) {
      ok = false;
      issues.unshift("spell the brand wording exactly right, letter for letter");
    }
    if (parsed.privacyBlurred === false) {
      ok = false;
      issues.unshift("keep the blurred areas of the app screenshot exactly as blurred as in the reference; do not sharpen or fill them in");
    }
    return { ok, issues, raw: parsed };
  };
  var fmt = (t, max = SHOT_SECONDS) => `00:${String(Math.max(0, Math.min(max, Math.round(t)))).padStart(2, "0")}`;
  var videoPrompt = (s, shot, settings) => {
    const nar = narratorOf(s);
    const voOff = (voice) => `Audio: an OFF-SCREEN narrator voice-over by ONE single adult voice (${voice}), the same pitch, timbre and pace from the first word to the last, warm and quick like chatting with a neighbour, telling the viewer what they are seeing; the narrator is NOT visible in the frame and nobody in the frame speaks or moves their lips: ` + shot.lines.map((l) => `[${fmt(l.startSec, shot.duration)}-${fmt(l.endSec, shot.duration)}] "${l.text}"`).join(" ") + " Spoken in Vietnamese with a northern accent.";
    const present = (shot.roles || []).map((r) => roleOf(s, r)).filter(Boolean);
    const spk = (l) => {
      const c = l.speaker && roleOf(s, l.speaker) || nar;
      return present.some((x) => x.role === c.role) ? `The ${c.role} (${c.look.split(",")[0].trim()})` : `An off-screen voice of the ${c.role} (${c.voice || "adult, northern Vietnamese"}), not visible in the frame,`;
    };
    const silentOnes = present.filter((c) => !shot.lines.some((l) => (l.speaker || "narrator") === c.role)).map((c) => `The ${c.role} does not speak, only listens and reacts.`).join(" ");
    const voices = Array.from(new Set(shot.lines.map((l) => l.speaker || "narrator"))).map((r) => {
      const c = roleOf(s, r) || nar;
      return `${c.role}: ${c.voice || "adult, northern Vietnamese"}`;
    }).join("; ") || nar.voice;
    const dialogue = settings.audioMode === "native" && shot.lines.length ? shot.voInline ? voOff(nar.voice) : shot.block === "action" ? `Voice: ${voices}. Only this one short line is spoken; the rest of the clip is silent apart from ambient sound. ` + shot.lines.map((l) => `[${fmt(l.startSec, shot.duration)}-${fmt(l.endSec, shot.duration)}] ${spk(l)} says in Vietnamese with a northern accent: "${l.text}"`).join(" ") + " " + silentOnes : `Voice: ${voices}, the same voice per person for the whole clip, warm and quick like chatting with a neighbour, at a natural brisk pace of about 5 syllables per second like real Vietnamese street videos; they start talking within the first half second, the sentences follow each other with only short breaths, no pause longer than a second, and the talking fills the clip until about half a second before the end. ` + shot.lines.map((l) => `[${fmt(l.startSec, shot.duration)}-${fmt(l.endSec, shot.duration)}] ${spk(l)} says in Vietnamese with a northern accent: "${l.text}"`).join(" ") + " " + silentOnes : "Nobody speaks; no dialogue.";
    const bf = BF(shot);
    const phone = shot.showsPhone ? present.length === 0 ? ` One hand holds the phone steady toward the camera; the screen keeps showing the same app screen as in the first frame, keeping every blurred area of it exactly as blurred as in the first frame, never blank, never flickering, no pop-up banners.` : ` Exactly one phone, held by the person named in the action${present.length > 1 ? " (both may lean over the same screen)" : ""}; no hand from outside the frame; the screen keeps showing the same app screen as in the first frame, keeping every blurred area of it exactly as blurred as in the first frame, never blank, never flickering, no pop-up banners.` : ` There is no phone in this shot.`;
    const head = `Camera: ${bf.camera}. ${bf.framing}. One single continuous take with no cuts, starting exactly from the first frame image and moving on from there. Vertical phone video, ${shot.duration} seconds, ${shot.timeOfDay || s.world.timeOfDay}, ${shot.timeOfDay ? "real available light" : s.world.light}. No inset, no picture-in-picture, no second phone or floating screen at the edges.`;
    const loc = placeOf(s.world, shot);
    const world = `${loc.place}, in Vietnam. Visible details: ${loc.details}.`;
    const person = present.length ? `${present.map((c) => `The ${c.role}: ${c.look}, ${c.persona}, ${shot.expression}`).join("; ")}, ${shot.spot || "in the scene"}. ${shot.prop ? `Held in this scene: ${shot.prop}. ` : ""}${shot.action} Exactly ${present.length} ${present.length === 1 ? "person" : "people"} in the shot, nobody else enters; each person does only what is described here and hands hold only what is listed.` : `No people in this shot. ${shot.action}`;
    const ambient = `Ambient: ${shot.ambient}.`;
    const useProp = shot.prop ? ` The ${shot.prop.replace(/^(a|an|the)\s+/i, "")} is being USED for its real purpose during the clip, not just held up for the camera.` : "";
    const realism = `Candid phone footage, not a commercial: handheld with a slight shake, real mixed lighting that is uneven and sometimes blown out, muted realistic colors, mild sensor noise, the focus settling a beat late; the framing is a little off-centre but the horizon stays roughly level; ${oneOf(HANDS)}; the person keeps the same face, hair and clothes for the whole clip; everyone present is an adult.${useProp}`;
    const tail = `(no subtitles, no captions, no on-screen text)`;
    const parts = [
      { key: "head", text: head },
      { key: "world", text: world },
      { key: "person", text: person },
      { key: "dialogue", text: dialogue },
      { key: "phone", text: phone.trim() },
      { key: "ambient", text: ambient },
      { key: "realism", text: realism },
      { key: "tail", text: tail }
    ].filter((x) => x.text);
    const dropOrder = ["world", "realism", "ambient", "phone"];
    const join = (ps) => ps.map((x) => x.text).join("\n");
    let cur = parts;
    for (const d of dropOrder) {
      if (join(cur).length <= MAX_PROMPT_CHARS) break;
      cur = cur.filter((x) => x.key !== d);
    }
    return join(cur);
  };

  // product-factory/v44_orange/validate.ts
  var isSeq = (sh) => !sh.insert;
  var BANNED = /(^|[^\p{L}])(user|users|match|matching|reward|rewards|đảm bảo|chắc chắn|lợi nhuận|lãi suất|đầu tư|làm giàu|tích lũy|tích luỹ|nền tảng|trải nghiệm|theo thời gian)(?![\p{L}])/giu;
  var MONEY = /(^|[^\p{L}\p{N}])(\d+([.,]\d+)?|một|hai|ba|bốn|năm|sáu|bảy|tám|chín|mười|vài|mấy|cả|nửa)\s*(đô|đô la|usd|\$|triệu|nghìn|ngàn|trăm nghìn|k\b)(?![\p{L}\p{N}])/iu;
  var CASH_CLAIM = /(^|[^\p{L}\p{N}])(tiền\s*(thật|tươi)|cả\s*(tháng|tuần)\s*lương)(?![\p{L}\p{N}])/iu;
  var DEICTIC = /(^|[^\p{L}])(đây|này|các bác nhìn|kìa|đấy|nhìn xem)(?![\p{L}])/iu;
  var REF_CLOSE = /link|đăng ký|cùng đào|đào với em|rủ nhau|bình luận|Unich Network|mã (mời|của em)/i;
  var CONCLUDE = /((chỗ|nơi|nhà|xưởng|chợ|xóm|quán|phố|làng|người|bác|ai|đứa|cô|chú)(\s+\S+){0,3}\s+(nào|mà)[^.!?]{0,80}(thì|là|cũng)|(^|[^\p{L}])ai\s+[^.!?]{0,45}\s+thì\s|[^.!?]{2,40},\s*[^.!?]{2,40}[,\-–—]\s*[^.!?]{0,60}(thì|là)|(như|kiểu)\s+(xóm|chợ|xưởng|quán|nhà|chỗ|phố|làng|bên)\s+em|(làm|dùng|chơi|tải|cài)\s+(cái\s+)?(này|app này)\s*(thì\s+)?(hợp|tiện|ngon|nhất|là hợp)|hợp\s+(với\s+)?(ai|người|nhà|chỗ)|đáng\s+(làm|thử|tải|cài))/iu;
  var CLOCK_TIME = /(\d+\s*(giờ|h\b)|(một|hai|ba|bốn|năm|sáu|bảy|tám|chín|mười|mười một|mười hai)\s*giờ)/i;
  var validateScript = (s, arc, hidden = false, hookKind = "") => {
    const errs = [];
    const all = JSON.stringify(s);
    const talk0 = (s.shots || []).flatMap((sh) => [...sh.lines || [], ...sh.voLines || []]).map((l) => l.text).join(" ") + " " + (s.monologue || "");
    const banned = talk0.match(BANNED);
    if (banned) errs.push("c\xF3 t\u1EEB c\u1EA5m theo quy \u01B0\u1EDBc Unich: " + Array.from(new Set(banned.map((x) => x.trim().toLowerCase()))).join(", "));
    if (/FC (về|đã về|vừa về)|tiền về/i.test(all)) errs.push('sai c\u01A1 ch\u1EBF: FC kh\xF4ng "v\u1EC1", FC t\u0103ng d\u1EA7n sau khi b\u1EA5m \u0111\xE0o; app ch\u1EC9 NH\u1EAEC \u0110\xC0O');
    (s.shots || []).forEach((sh, i) => {
      if (!sh.showsPhone || sh.vo) return;
      const syl = [...sh.lines || [], ...sh.voLines || []].reduce((t, l) => t + countSyllables(l.text), 0);
      if (syl && syl < 27) errs.push(`c\u1EA3nh ${i + 1} khoe m\xE0n h\xECnh app nh\u01B0ng ch\u1EC9 ${syl} \xE2m ti\u1EBFt \u2014 c\u1EA3nh c\xF3 m\xE0n h\xECnh ph\u1EA3i \u0111\u1EE7 l\u1EDDi cho \xCDT NH\u1EA4T 6 gi\xE2y (t\u1EEB 27 \xE2m ti\u1EBFt tr\u1EDF l\xEAn). Khoe m\xE0n h\xECnh 1-5,9 gi\xE2y l\xE0 v\xF9ng ch\u1EBFt: 8.600 view so v\u1EDBi 105.000 c\u1EE7a c\u1EA3nh gi\u1EEF t\u1EEB 6 gi\xE2y, th\u1EADm ch\xED thua c\u1EA3 video kh\xF4ng khoe m\xE0n h\xECnh l\u1EA7n n\xE0o. Th\xEAm l\u1EDDi v\xE0o c\u1EA3nh n\xE0y, ho\u1EB7c b\u1ECF m\xE0n h\xECnh kh\u1ECFi c\u1EA3nh n\xE0y v\xE0 d\u1ED3n v\xE0o m\u1ED9t c\u1EA3nh kh\xE1c \u0111\u1EE7 d\xE0i`);
    });
    if (hookKind === "su_viec") {
      const firstTalk = (s.shots || []).find((sh) => (sh.lines || []).length || (sh.voLines || []).length);
      const firstLine = firstTalk ? [...firstTalk.lines || [], ...firstTalk.voLines || []][0]?.text || "" : "";
      if (firstLine && !CLOCK_TIME.test(firstLine))
        errs.push(`c\xE2u m\u1EDF "${firstLine.slice(0, 45)}" thi\u1EBFu M\u1ED0C GI\u1EDC \u0110\u1ED2NG H\u1ED2 \u2014 "s\xE1ng / tr\u01B0a / t\u1ED1i / \u0111\xEAm / h\xF4m qua" KH\xD4NG t\xEDnh, ph\u1EA3i c\xF3 s\u1ED1 gi\u1EDD \u0111\u1ECDc \u0111\u01B0\u1EE3c ("hai gi\u1EDD m\u01B0\u1EDDi ba ph\xFAt s\xE1ng nay", "\u0111\xFAng n\u0103m gi\u1EDD chi\u1EC1u"). C\xE2u m\u1EDF c\xF3 gi\u1EDD \u0111\u1ED3ng h\u1ED3 \u0111\u01B0\u1EE3c view g\u1EA5p 9,10 l\u1EA7n; ch\u1EC9 c\xF3 t\u1EEB ch\u1EC9 bu\u1ED5i th\xEC t\u1EF7 l\u1EC7 b\u1EA5m c\xF2n 0,69 l\u1EA7n`);
    }
    const badNum = talk0.split(/(?<=[.!?])\s+|\s*\|\s*/).filter((x) => MONEY.test(x) && !/(theo link|đăng ký|giới thiệu)/i.test(x));
    if (badNum.length) errs.push(`c\xF3 con s\u1ED1 ti\u1EC1n: "${badNum[0].trim().slice(0, 60)}" \u2014 b\u1ECF h\u1EB3n con s\u1ED1, k\u1EC3 c\u1EA3 gi\xE1 FCC. Quy ra th\u1EE9 \u0110\u1EBEM \u0110\u01AF\u1EE2C ("b\u1EB1ng ch\u1EE5c b\xE1t ph\u1EDF", "\u0111\u1EE7 \u0111\u1ED5 x\u0103ng c\u1EA3 th\xE1ng") \u0111\u1EC3 ng\u01B0\u1EDDi nghe t\u1EF1 \u01B0\u1EDBc l\u01B0\u1EE3ng`);
    if (!arc?.allowMoney) {
      const badClaim = talk0.split(/(?<=[.!?])\s+|\s*\|\s*/).filter((x) => CASH_CLAIM.test(x) && !/(mua lại|buyback|thu mua|bán lại cho)/i.test(x));
      if (badClaim.length) errs.push(`c\xE2u "${badClaim[0].trim().slice(0, 55)}" kh\u1EB3ng \u0111\u1ECBnh "ra ti\u1EC1n" ngo\xE0i m\u1EA1ch Buyback \u2014 th\xE0nh l\u1EDDi h\u1EE9a thu nh\u1EADp. Ch\u1EC9 \u0111\u01B0\u1EE3c n\xF3i chuy\u1EC7n ra ti\u1EC1n khi \u0111ang k\u1EC3 vi\u1EC7c FC \u0110\u01AF\u1EE2C MUA L\u1EA0I; ch\u1ED7 kh\xE1c th\xEC k\u1EC3 vi\u1EC7c \u0111ang th\u1EA5y`);
    }
    if (/(^|[^\p{L}])(cờ|quốc kỳ|flag|flags|bunting|pennant)(?![\p{L}])/iu.test(all)) errs.push("c\xF3 nh\u1EAFc t\u1EDBi C\u1EDC trong b\u1ED1i c\u1EA3nh \u2014 \u0110i\u1EC1u 8 Lu\u1EADt Qu\u1EA3ng c\xE1o c\u1EA5m, v\xE0 QC \u1EA3nh s\u1EBD ch\u1EB7n c\u1EE9ng m\u1ECDi khung. T\u1EA3 b\u1EB1ng th\u1EE9 kh\xE1c: bi\u1EC3n hi\u1EC7u, b\xF3ng bay, \xE1o cam, d\xF9 b\u1EA1t");
    if (/\b(trẻ em|trẻ con|em bé|đứa bé|cháu bé|bé gái|bé trai|con nít|child|children|kid|kids|baby|toddler)\b/i.test(all)) errs.push("c\xF3 nh\u1EAFc t\u1EDBi tr\u1EBB em");
    const sceneCount = (s.shots || []).filter((sh) => !sh.vo).length;
    if (sceneCount < 4 || sceneCount > 8) errs.push("k\u1ECBch nhi\u1EC1u c\u1EA3nh ph\u1EA3i c\xF3 4-8 c\u1EA3nh");
    (s.shots || []).forEach((sh) => {
      const dur = sh.duration || SHOT_SECONDS;
      if (sh.block === "action" && !sh.insert && !sh.voInline && !(sh.lines || []).length && !(sh.voLines || []).length) errs.push(`c\u1EA3nh ${sh.id} (action c\xE2m) thi\u1EBFu "vo": l\u1EDDi ng\u01B0\u1EDDi k\u1EC3 ph\u1EA3i ch\u1EA1y li\u1EC1n qua c\u1EA3nh n\xE0y`);
      if (sh.voInline) {
        const sy = (sh.lines || []).reduce((t, l) => t + countSyllables(l.text), 0);
        if (sy > Math.round(5.5 * dur)) errs.push(`c\u1EA3nh ${sh.id}: l\u1EDDi d\u1EABn ${sy} \xE2m ti\u1EBFt qu\xE1 d\xE0i cho ${dur} s (t\u1ED1i \u0111a ${Math.round(5.5 * dur)})`);
      }
      const maxS = Math.round(6 * dur);
      const minS = sh.block === "talk" && !sh.vo ? Math.round(2.5 * dur) : 0;
      const syl = (sh.lines || []).reduce((a, l) => a + countSyllables(l.text), 0);
      if (syl > maxS) errs.push(`c\u1EA3nh ${sh.id}: ${syl} \xE2m ti\u1EBFt tho\u1EA1i > ${maxS} cho ${dur} s`);
      if (syl > 0 && syl < minS) errs.push(`c\u1EA3nh ${sh.id}: ch\u1EC9 ${syl} \xE2m ti\u1EBFt, qu\xE1 \xEDt (c\u1EA7n ${minS}-${maxS} cho ${dur} s, th\xEAm 1-2 c\xE2u)`);
      if (!(sh.lines || []).length && sh.block === "talk") errs.push(`c\u1EA3nh ${sh.id}: c\u1EA3nh n\xF3i m\xE0 kh\xF4ng c\xF3 tho\u1EA1i`);
      (sh.lines || []).forEach((l) => {
        if (l.startSec < 0.25 || l.endSec > dur - 0.3 || l.endSec <= l.startSec) errs.push(`c\u1EA3nh ${sh.id}: m\u1ED1c gi\xE2y tho\u1EA1i "${l.text.slice(0, 20)}" sai (${l.startSec}-${l.endSec})`);
      });
      if (sh.showsPhone && sh.screen && !SCREEN_KEYS.includes(sh.screen)) errs.push(`c\u1EA3nh ${sh.id}: "screen" ph\u1EA3i l\xE0 m\u1ED9t trong ${SCREEN_KEYS.join(" | ")}`);
    });
    if (s.shots?.length) {
      if (hidden && s.shots.some((sh) => !sh.vo && (sh.roles || []).includes("narrator"))) errs.push('ch\u1EBF \u0111\u1ED9 kh\xF4ng l\u1ED9 m\u1EB7t: kh\xF4ng \u0111\u01B0\u1EE3c \u0111\u1EC3 narrator \u0111\u1EE9ng trong khung (b\u1ECF "narrator" kh\u1ECFi "chars"); narrator v\u1EABn \u0111\u01B0\u1EE3c n\xF3i, ti\u1EBFng ph\xE1t ngo\xE0i h\xECnh');
      const secondShots = s.shots.filter((sh) => (sh.roles || []).some((r) => r !== "narrator")).length;
      const secondSpeaks = s.shots.some((sh) => (sh.lines || []).some((l) => l.speaker && l.speaker !== "narrator"));
      if ((arc ? arc.needSecond : true) && secondShots < 2 && !secondSpeaks) errs.push(`vai th\u1EE9 hai ch\u1EC9 tho\xE1ng qua ${secondShots} c\u1EA3nh v\xE0 kh\xF4ng n\xF3i c\xE2u n\xE0o \u2014 video th\xE0nh m\u1ED9t ng\u01B0\u1EDDi n\xF3i m\u1ED9t m\xECnh. Cho h\u1ECD c\xF3 m\u1EB7t \u1EDF \xEDt nh\u1EA5t 2 c\u1EA3nh r\u1EA3i ra, HO\u1EB6C n\xF3i \u0111\xFAng m\u1ED9t c\xE2u c\u1EE7a ch\xEDnh h\u1ECD (h\u1ECFi, tr\u1EA7m tr\u1ED3, c\xE0u nh\xE0u)`);
      if ((arc ? arc.needPhone : true) && !s.shots.some((sh) => sh.showsPhone)) errs.push('ph\u1EA3i c\xF3 c\u1EA3nh nh\xECn m\xE0n h\xECnh app tr\xEAn \u0111i\u1EC7n tho\u1EA1i (showsPhone: true, k\xE8m "screen")');
      const totalSyl = s.shots.reduce((t, sh) => t + [...sh.lines || [], ...sh.voLines || []].reduce((u, l) => u + countSyllables(l.text), 0), 0);
      const tired = TIRED.filter((x) => talk0.toLowerCase().includes(x.toLowerCase()));
      if (tired.length) errs.push(`ch\xE9p nguy\xEAn v\u0103n c\u1EE5m \u0111\xE3 d\xF9ng m\xF2n: ${tired.map((x) => `"${x}"`).join(", ")} \u2014 c\xF9ng \xFD \u0111\xF3 nh\u01B0ng ph\u1EA3i \u0111\u1EB7t c\xE2u kh\xE1c \u0111i, \u0111\u1EEBng \u0111\u1ECDc khu\xF4n`);
      const deictic = s.shots.reduce((t, sh) => t + [...sh.lines || [], ...sh.voLines || []].filter((l) => DEICTIC.test(l.text)).length, 0);
      if (deictic < 1) errs.push('c\u1EA7n \xEDt nh\u1EA5t m\u1ED9t c\xE2u ch\u1EC9 v\xE0o c\xE1i \u0111ang th\u1EA5y ("\u0111\xE2y", "c\xE1c b\xE1c nh\xECn", "k\xECa")');
      const FAKE_FC = /(?<![\p{L}\p{N}])(?!(?:10|5|mười|năm)\s*(?:con\s*)?FC(?![\p{L}]))(\d+|mười|hai mươi|ba mươi|bốn mươi|năm mươi|sáu mươi|bảy mươi|tám mươi|chín mươi|một trăm)\s*(con\s*)?FC(?![\p{L}])/giu;
      const fake = talk0.match(FAKE_FC);
      if (fake) errs.push(`b\u1ECBa s\u1ED1 FC (${Array.from(new Set(fake.map((x) => x.trim()))).join(", ")}): m\xE0n h\xECnh trong video l\xE0 \u1EA2NH CH\u1EE4P TH\u1EACT n\xEAn kh\xF4ng \u0111\u01B0\u1EE3c n\xF3i ra con s\u1ED1 c\u1EE5 th\u1EC3, tr\u1EEB 10 FC / 5 FC c\u1EE7a link m\u1EDDi. Thay b\u1EB1ng c\xE1ch ch\u1EC9 v\xE0o m\xE0n h\xECnh: "c\xE1c b\xE1c nh\xECn n\xF3 nh\xEDch l\xEAn n\xE0y", "s\xE1ng nay h\u01A1n h\xF4m qua r\u1ED3i"`);
      if (s.shots.some((sh) => (sh.roles || []).length > 2)) errs.push("t\u1ED1i \u0111a 2 ng\u01B0\u1EDDi c\xF9ng m\u1ED9t khung");
      const moneySaid = (s.shots || []).flatMap((sh) => [...sh.lines || [], ...sh.voLines || []]).filter((l) => MONEY.test(l.text) && !/(theo link|đăng ký|giới thiệu)/i.test(l.text));
      moneySaid.forEach((l) => errs.push(`c\xE2u "${l.text.slice(0, 55)}" \u0111\u1ECDc ra con s\u1ED1 ti\u1EC1n \u2014 b\u1ECF h\u1EB3n con s\u1ED1, quy ra th\u1EE9 \u0110\u1EBEM \u0110\u01AF\u1EE2C k\xE8m v\u1EBB b\u1EA5t ng\u1EDD ("em t\u01B0\u1EDFng c\xF2n l\xE2u m\u1EDBi \u0111\u01B0\u1EE3c g\xEC, th\u1EBF m\xE0 ch\u1ED7 \u0111\xF3 b\u1EB1ng ch\u1EE5c b\xE1t ph\u1EDF", "\u0111\u1EE7 \u0111\u1ED5 x\u0103ng c\u1EA3 th\xE1ng"). 96% ng\u01B0\u1EDDi b\xE1n chuy\xEAn nghi\u1EC7p kh\xF4ng \u0111\u1ECDc s\u1ED1 gi\xE1, v\xE0 gi\xE1 FCC c\u0169ng KH\xD4NG ph\u1EA3i ngo\u1EA1i l\u1EC7`));
      if ((arc ? arc.close : "ref") === "ref") {
        const spoken = s.shots.filter((sh) => (sh.lines || []).length || (sh.voLines || []).length);
        const tail = spoken.slice(-3).flatMap((sh) => [...sh.lines || [], ...sh.voLines || []]).map((l) => l.text).join(" ");
        const sents = tail.split(/(?<=[.!?])\s+/).filter(Boolean);
        const iRef = sents.findIndex((x) => REF_CLOSE.test(x));
        const iCon = sents.findIndex((x) => CONCLUDE.test(x));
        if (s.ctaKind === "feed" || s.ctaKind === "none") {
          if (iCon < 0) errs.push("ki\u1EC3u ch\u1ED1t n\xE0y kh\xF4ng m\u1EDDi g\xEC c\u1EA3 n\xEAn B\u1EAET BU\u1ED8C c\xF3 c\xE2u k\u1EBFt lu\u1EADn cho ho\xE0n c\u1EA3nh \u1EDF cu\u1ED1i, g\u1ECDi t\xEAn 2-3 ki\u1EC3u ng\u01B0\u1EDDi ho\u1EB7c n\u01A1i ch\u1ED1n");
        } else if (iRef < 0) errs.push("c\u1EA3nh ch\u1ED1t thi\u1EBFu c\xE2u m\u1EDDi (nh\u1EAFc m\xE3 \u1EDF b\xECnh lu\u1EADn ho\u1EB7c t\xEAn \u1EE9ng d\u1EE5ng)");
        else if (iCon < 0 || iCon >= iRef) errs.push('c\xE2u K\u1EBET LU\u1EACN ph\u1EA3i l\xE0 m\u1ED9t c\xE2u RI\xCANG \u0111\u1EE9ng TR\u01AF\u1EDAC c\xE2u m\u1EDDi, kh\xF4ng \u0111\u01B0\u1EE3c g\u1ED9p v\xE0o c\xF9ng c\xE2u m\u1EDDi: g\u1ECDi t\xEAn ki\u1EC3u ng\u01B0\u1EDDi ho\u1EB7c n\u01A1i ch\u1ED1n h\u1EE3p l\xE0m vi\u1EC7c n\xE0y, l\u1EA5y t\u1EEB ch\xEDnh ho\xE0n c\u1EA3nh v\u1EEBa di\u1EC5n ("ch\u1EE3, x\u01B0\u1EDFng, x\xF3m tr\u1ECD \u2014 ch\u1ED7 n\xE0o \u0111\xF4ng ng\u01B0\u1EDDi th\xEC r\u1EE7 nhau l\xE0 \u0111\xE0o nhanh nh\u1EA5t." r\u1ED3i m\u1EDBi "C\xE1c b\xE1c \u0111\u0103ng k\xFD theo link c\u1EE7a em\u2026")');
      }
      const total = s.shots.filter((sh) => !sh.vo).reduce((t, sh) => t + (sh.duration || 0), 0);
      const nSeq = s.shots.filter((sh) => isSeq(sh)).length;
      const estSec = Math.round(totalSyl / 4.7 + 0.45 * nSeq);
      const [dMin, dMax] = arc ? arc.dur : [18, 32];
      if (estSec < dMin || estSec > dMax) errs.push(`video d\u1EF1ng ra s\u1EBD d\xE0i kho\u1EA3ng ${estSec} s (t\xEDnh theo ${totalSyl} \xE2m ti\u1EBFt, v\xEC khi gh\xE9p m\u1ED7i c\u1EA3nh b\u1ECB c\u1EAFt ngay sau khi h\u1EBFt ti\u1EBFng), m\u1EA1ch n\xE0y c\u1EA7n ${dMin}-${dMax} s: ${estSec > dMax ? "b\u1EDBt l\u1EDDi" : "th\xEAm l\u1EDDi"}`);
      const sylMin = Math.round(3.5 * total), sylMax = Math.round(5.6 * total);
      if (totalSyl < sylMin) errs.push(`l\u1EDDi qu\xE1 th\u01B0a: ${totalSyl} \xE2m ti\u1EBFt cho ${total} s (${(totalSyl / Math.max(1, total)).toFixed(1)} \xE2m ti\u1EBFt/gi\xE2y), c\u1EA7n \xEDt nh\u1EA5t ${sylMin} \u2014 reel th\u1EADt n\xF3i 4,5-5,5 \xE2m ti\u1EBFt/gi\xE2y; th\xEAm c\xE2u "vo" k\u1EC3 \u0111\xFAng c\xE1i \u0111ang th\u1EA5y, \u0111\u1EEBng k\xE9o d\xE0i c\u1EA3nh`);
      if (totalSyl > sylMax) errs.push(`l\u1EDDi qu\xE1 d\xE0y: ${totalSyl} \xE2m ti\u1EBFt cho ${total} s, t\u1ED1i \u0111a ${sylMax} \u2014 Omni n\xF3i kh\xF4ng k\u1ECBp, b\u1EDBt c\xE2u ho\u1EB7c th\xEAm c\u1EA3nh`);
    }
    if (!s.roles || !s.roles.length || !s.roles.some((r) => r.role === "narrator")) errs.push("thi\u1EBFu vai narrator");
    (s.shots || []).forEach((sh) => (sh.roles || []).forEach((r) => {
      if (!(s.roles || []).some((x) => x.role === r)) errs.push(`c\u1EA3nh ${sh.id}: vai "${r}" kh\xF4ng c\xF3 trong roles`);
    }));
    return errs;
  };
  var validateMeaning = async (p, sc, s, arc) => {
    const lines = s.shots.map((sh) => `C\u1EA3nh ${sh.id} (${sh.block}): ` + [...sh.lines || [], ...sh.voLines || []].map((l) => (l.speaker && l.speaker !== "narrator" ? l.speaker + ": " : "") + l.text).join(" ")).filter((x) => x.split(": ").slice(1).join("").trim()).join("\n");
    const prompt = `\u0110\xE2y l\xE0 to\xE0n b\u1ED9 tho\u1EA1i (theo th\u1EE9 t\u1EF1) c\u1EE7a m\u1ED9t video ng\u1EAFn v\u1EC1 m\u1ED9t app \u0111\xE0o \u0111i\u1EC3m th\u01B0\u1EDFng t\xEAn FC:
${lines}
C\u01A0 CH\u1EBE \u0110\xDANG: b\u1EA5m \u0111\xE0o th\xEC FC t\u0103ng d\u1EA7n theo th\u1EDDi gian; app ch\u1EC9 NH\u1EAEC \u0111\xE0o 3 l\u1EA7n m\u1ED7i ng\xE0y, kh\xF4ng b\u1EA5m c\u0169ng kh\xF4ng m\u1EA5t g\xEC; hai ng\u01B0\u1EDDi g\u1EB7p nhau ngo\xE0i \u0111\u1EDDi v\xE0 qu\xE9t m\xE3 QR c\u1EE7a nhau th\xEC \u0111\xE0o nhanh h\u01A1n; qu\xE1n treo bi\u1EC3n nh\u1EADn FC th\xEC c\u1EA3 c\u1ED9ng \u0111\u1ED3ng bi\u1EBFt n\xEAn kh\xE1ch t\u1EF1 \u0111\u1EBFn; FC \u0111\u01B0\u1EE3c mua l\u1EA1i b\u1EB1ng ti\u1EC1n th\u1EADt cho ng\u01B0\u1EDDi ho\u1EA1t \u0111\u1ED9ng t\xEDch c\u1EF1c; m\u1EDDi b\u1EA1n theo link th\xEC c\u1EA3 hai c\xF9ng \u0111\u01B0\u1EE3c th\xEAm FC.
KSP c\u1EA7n \u0111\u01B0\u1EE3c th\u1EC3 hi\u1EC7n (\xFD, kh\xF4ng c\u1EA7n nguy\xEAn v\u0103n): ${sc.kspFocus.map((k, i) => `${i + 1}) ${k}`).join("; ")}.
Tr\u1EA3 v\u1EC1 JSON: {"kspCovered":[true/false theo th\u1EE9 t\u1EF1 KSP],"mechanicWrong":["c\xE2u n\xE0o n\xF3i SAI c\u01A1 ch\u1EBF tr\xEAn, v\xED d\u1EE5 b\u1EA3o FC t\u1EF1 v\u1EC1, b\u1EA3o kh\xF4ng b\u1EA5m l\xE0 m\u1EA5t, b\u1EA3o app tr\u1EA3 l\xE3i"],"promise":true/false (c\xF3 h\u1EE9a h\u1EB9n thu nh\u1EADp, l\u1EE3i nhu\u1EADn, \u0111\u1EA3m b\u1EA3o, l\xE0m gi\xE0u),"hasClose":true/false (c\xE2u cu\u1ED1i c\xF3 l\u1EDDi m\u1EDDi th\u1EADt th\xE0 theo link ho\u1EB7c r\u1EE7 c\xF9ng \u0111\xE0o m\u1ED7i ng\xE0y),"hasConclusion":true/false (NGAY TR\u01AF\u1EDAC l\u1EDDi m\u1EDDi c\xF3 m\u1ED9t c\xE2u k\u1EBFt lu\u1EADn cho ho\xE0n c\u1EA3nh, g\u1ECDi t\xEAn ki\u1EC3u ng\u01B0\u1EDDi ho\u1EB7c n\u01A1i ch\u1ED1n h\u1EE3p l\xE0m vi\u1EC7c n\xE0y, v\xED d\u1EE5 "ch\u1ED7 n\xE0o \u0111\xF4ng ng\u01B0\u1EDDi nh\u01B0 ch\u1EE3 em th\xEC\u2026", "ai ng\xE0y n\xE0o c\u0169ng c\u1EA7m \u0111i\u1EC7n tho\u1EA1i th\xEC\u2026"),"listing":true/false (c\xF3 c\xE2u LI\u1EC6T K\xCA t\u1EEB 2 t\xEDnh n\u0103ng tr\u1EDF l\xEAn m\xE0 kh\xF4ng g\u1EAFn v\xE0o vi\u1EC7c \u0111ang th\u1EA5y),"deictic":true/false (c\xF3 \xEDt nh\u1EA5t 2 c\xE2u ch\u1EC9 v\xE0o c\xE1i \u0111ang th\u1EA5y: "\u0111\xE2y", "n\xE0y", "c\xE1c b\xE1c nh\xECn", "k\xECa"),"hookEvent":true/false (c\xE2u \u0110\u1EA6U TI\xCAN k\u1EC3 m\u1ED9t S\u1EF0 VI\u1EC6C c\u1EE5 th\u1EC3 \u0111ang x\u1EA3y ra \u2014 c\xF3 gi\u1EDD / ai / l\xE0m g\xEC \u2014 ch\u1EE9 kh\xF4ng ph\u1EA3i gi\u1EDBi thi\u1EC7u chung),"genericLines":["c\xE2u nghe nh\u01B0 qu\u1EA3ng c\xE1o chung chung ho\u1EB7c v\u0103n vi\u1EBFt"],"otherBrands":["t\xEAn th\u01B0\u01A1ng hi\u1EC7u kh\xE1c n\u1EBFu c\xF3"]}`;
    const parsed = extractJSON(await askText(prompt, "B\u1EA1n l\xE0 ng\u01B0\u1EDDi ki\u1EC3m tra n\u1ED9i dung. Ch\u1EC9 tr\u1EA3 JSON."));
    const errs = [];
    if (!parsed) return errs;
    if (Array.isArray(parsed.kspCovered)) parsed.kspCovered.forEach((ok, i) => {
      if (ok === false && sc.kspFocus[i]) errs.push(`tho\u1EA1i ch\u01B0a th\u1EC3 hi\u1EC7n KSP "${sc.kspFocus[i]}"`);
    });
    if (Array.isArray(parsed.mechanicWrong) && parsed.mechanicWrong.length) errs.push("n\xF3i SAI c\u01A1 ch\u1EBF: " + parsed.mechanicWrong.slice(0, 2).join(" | "));
    if (parsed.promise === true) errs.push("c\xF3 h\u1EE9a h\u1EB9n thu nh\u1EADp / l\u1EE3i nhu\u1EADn \u2014 ch\u1EC9 \u0111\u01B0\u1EE3c k\u1EC3 vi\u1EC7c \u0111\xE3 x\u1EA3y ra");
    if (parsed.hasClose === false && (arc ? arc.close : "ref") === "ref") errs.push("thi\u1EBFu c\xE2u m\u1EDDi th\u1EADt th\xE0 \u1EDF cu\u1ED1i (theo link c\u1EE7a em / \u0111\xE0o v\u1EDBi em m\u1ED7i ng\xE0y)");
    if (parsed.hasConclusion === false) errs.push('c\u1EA3nh ch\u1ED1t thi\u1EBFu C\xC2U K\u1EBET LU\u1EACN CHO HO\xC0N C\u1EA2NH tr\u01B0\u1EDBc c\xE2u m\u1EDDi ("ch\u1ED7 n\xE0o \u0111\xF4ng ng\u01B0\u1EDDi nh\u01B0 ch\u1EE3 em th\xEC r\u1EE7 nhau l\xE0 \u0111\xE0o nhanh nh\u1EA5t") \u2014 \u0111\xE2y l\xE0 ki\u1EC3u ch\u1ED1t \u0103n kh\xE1ch nh\u1EA5t trong 60 reel');
    if (parsed.listing === true) errs.push("\u0111ang LI\u1EC6T K\xCA t\xEDnh n\u0103ng \u2014 m\u1ED7i \xFD ph\u1EA3i n\u1EB1m trong m\u1ED9t vi\u1EC7c \u0111ang th\u1EA5y");
    if (parsed.deictic === false) errs.push('thi\u1EBFu c\xE2u ch\u1EC9 v\xE0o c\xE1i \u0111ang th\u1EA5y ("\u0111\xE2y", "n\xE0y", "c\xE1c b\xE1c nh\xECn")');
    if (parsed.hookEvent === false) errs.push("c\xE2u \u0111\u1EA7u ti\xEAn ph\u1EA3i K\u1EC2 S\u1EF0 VI\u1EC6C \u0111ang hi\u1EC7n tr\xEAn h\xECnh (gi\u1EDD + ai + l\xE0m g\xEC), kh\xF4ng m\u1EDF b\u1EB1ng gi\u1EDBi thi\u1EC7u chung");
    if (Array.isArray(parsed.genericLines) && parsed.genericLines.length) errs.push("c\xE2u chung chung t\xE1ch kh\u1ECFi chuy\u1EC7n: " + parsed.genericLines.slice(0, 2).join(" | "));
    if (Array.isArray(parsed.otherBrands) && parsed.otherBrands.length) errs.push("c\xF3 th\u01B0\u01A1ng hi\u1EC7u kh\xE1c: " + parsed.otherBrands.join(", "));
    return errs;
  };

  // product-factory/v44_orange/merge.ts
  var FONT_URLS = [
    "https://cdn.jsdelivr.net/gh/google/fonts@main/ofl/bevietnampro/BeVietnamPro-Bold.ttf",
    "https://cdn.jsdelivr.net/gh/notofonts/notofonts.github.io@main/fonts/NotoSans/hinted/ttf/NotoSans-Bold.ttf",
    "https://cdn.jsdelivr.net/gh/google/fonts@main/apache/roboto/static/Roboto-Bold.ttf"
  ];
  var fontLoaded = false;
  var resetFont = () => {
    fontLoaded = false;
  };
  var fontFamily = "Be Vietnam Pro";
  var ttfFamilyName = (b) => {
    try {
      const dv = new DataView(b.buffer, b.byteOffset, b.byteLength);
      const num = dv.getUint16(4);
      for (let i = 0; i < num; i++) {
        const o = 12 + i * 16;
        if (String.fromCharCode(b[o], b[o + 1], b[o + 2], b[o + 3]) !== "name") continue;
        const off = dv.getUint32(o + 8);
        const count = dv.getUint16(off + 2), strOff = dv.getUint16(off + 4);
        let best;
        for (let r = 0; r < count; r++) {
          const p = off + 6 + r * 12;
          const plat = dv.getUint16(p), nameId = dv.getUint16(p + 6), len = dv.getUint16(p + 8), so = dv.getUint16(p + 10);
          if (nameId !== 1 && nameId !== 16) continue;
          const s = off + strOff + so;
          let str = "";
          if (plat === 3 || plat === 0) {
            for (let k = 0; k + 1 < len; k += 2) str += String.fromCharCode(dv.getUint16(s + k));
          } else {
            for (let k = 0; k < len; k++) str += String.fromCharCode(b[s + k]);
          }
          str = str.trim();
          if (!str) continue;
          if (nameId === 16) return str;
          best = best || str;
        }
        return best;
      }
    } catch (e) {
      console.warn("[FONT] name table", e);
    }
    return void 0;
  };
  var ensureFont = async (fontBytes, log) => {
    if (fontLoaded) return true;
    const put = async (buf, label) => {
      try {
        await ffmpegService.mkdir("fonts");
      } catch (e) {
      }
      await ffmpegService.writeFile("fonts/font.ttf", buf);
      await ffmpegService.writeFile("font.ttf", buf);
      fontFamily = ttfFamilyName(buf) || fontFamily;
      fontLoaded = true;
      log(`[FONT] ${label} (${Math.round(buf.length / 1024)} KB, h\u1ECD "${fontFamily}")`);
    };
    if (fontBytes && fontBytes.length > 1e4) {
      await put(fontBytes, "d\xF9ng font ng\u01B0\u1EDDi v\u1EADn h\xE0nh t\u1EA3i");
      return true;
    }
    for (const u of FONT_URLS) {
      try {
        const r = await fetch(u);
        if (!r.ok) continue;
        const buf = new Uint8Array(await r.arrayBuffer());
        if (buf.length < 5e4) continue;
        await put(buf, `t\u1EA3i t\u1EEB m\u1EA1ng: ${u.split("/").pop()}`);
        return true;
      } catch (e) {
        console.warn("[FONT] fail", u, e);
      }
    }
    log("[FONT] kh\xF4ng c\xF3 font \u2192 gh\xE9p kh\xF4ng ph\u1EE5 \u0111\u1EC1. T\u1EA3i file .ttf \u1EDF m\xE0n Kh\xF3a \u0111\u1EC3 c\xF3 ph\u1EE5 \u0111\u1EC1.");
    return false;
  };
  var buildCues = (shots, items, cuts) => {
    const cues = [];
    let offset = 0;
    shots.forEach((sh, si) => {
      const it = items[si];
      const dur = cuts[si];
      const s0 = sh.lines.length ? Math.min(...sh.lines.map((l) => l.startSec)) : 1;
      const s1 = sh.lines.length ? Math.max(...sh.lines.map((l) => l.endSec)) : 9;
      const real = !!(it?.hasAudio && it.speechEnd && it.speechEnd > (it.speechStart || 0) + 1);
      const scale = real ? (it.speechEnd - it.speechStart) / Math.max(1, s1 - s0) : 1;
      const map = (t) => Math.max(0, Math.min(dur - 0.05, real ? it.speechStart + (t - s0) * scale : t));
      sh.lines.forEach((l) => {
        const words = l.text.split(/\s+/).filter(Boolean);
        if (!words.length) return;
        const groups = [];
        for (let i = 0; i < words.length; i += 3) groups.push(words.slice(i, i + 3));
        if (groups.length > 1 && groups[groups.length - 1].length === 1) {
          const last = groups.pop();
          groups[groups.length - 1].push(...last);
        }
        const a = map(l.startSec), b = Math.max(a + 0.4, map(l.endSec));
        const per = (b - a) / groups.length;
        groups.forEach((g, gi) => cues.push({ words: g, start: offset + a + gi * per, end: offset + a + (gi + 1) * per - 0.02 }));
      });
      offset += dur;
    });
    return cues;
  };
  var utf8 = (s) => new TextEncoder().encode(s);
  var assTime = (t) => {
    const x = Math.max(0, t);
    const h = Math.floor(x / 3600), m = Math.floor(x % 3600 / 60), s = x % 60;
    return `${h}:${String(m).padStart(2, "0")}:${s.toFixed(2).padStart(5, "0")}`;
  };
  var BS = String.fromCharCode(92);
  var assEscape = (s) => s.split(BS).join("/").replace(/\{/g, "(").replace(/\}/g, ")");
  var buildAss = (cues) => {
    const head = `[Script Info]
ScriptType: v4.00+
PlayResX: 720
PlayResY: 1280
WrapStyle: 2
ScaledBorderAndShadow: yes

[V4+ Styles]
Format: Name, Fontname, Fontsize, PrimaryColour, SecondaryColour, OutlineColour, BackColour, Bold, Italic, Underline, StrikeOut, ScaleX, ScaleY, Spacing, Angle, BorderStyle, Outline, Shadow, Alignment, MarginL, MarginR, MarginV, Encoding
Style: K,${fontFamily},50,&H00FFFFFF,&H00FFFFFF,&H00000000,&H80000000,-1,0,0,0,100,100,0,0,1,4,2,2,40,40,300,1

[Events]
Format: Layer, Start, End, Style, Name, MarginL, MarginR, MarginV, Effect, Text
`;
    const ev = [];
    cues.forEach((c) => {
      const per = (c.end - c.start) / c.words.length;
      c.words.forEach((w, i) => {
        const text = c.words.map((x, k) => k === i ? `{${BS}c&H3DFF3D&}${assEscape(x)}{${BS}c&HFFFFFF&}` : assEscape(x)).join(" ");
        ev.push(`Dialogue: 0,${assTime(c.start + i * per)},${assTime(c.start + (i + 1) * per)},K,,0,0,0,,${text}`);
      });
    });
    return head + ev.join("\n") + "\n";
  };
  var BROLL_START = 5;
  var BROLL_LEN = 2;
  var mergeShots = async (items, shots, settings, fontBytes, log) => {
    await ffmpegService.load();
    const talk = shots.map((sh, i) => ({ sh, it: items[i], i })).filter((x) => isSeq(x.sh));
    if (!talk.length) throw new Error("kh\xF4ng c\xF2n clip n\xF3i n\xE0o \u0111\u1EC3 gh\xE9p");
    if (talk.some((x) => !x.it?.base64)) throw new Error("thi\u1EBFu clip n\xF3i: " + talk.filter((x) => !x.it?.base64).map((x) => x.sh.id).join(", "));
    const broll = shots.map((sh, i) => ({ sh, it: items[i], i })).filter((x) => !isSeq(x.sh) && x.it?.base64);
    const hostIdx = (x) => {
      const k = x.sh.overlayHost ? talk.findIndex((t) => t.sh.id === x.sh.overlayHost) : 0;
      return k < 0 ? 0 : k;
    };
    const written = [];
    for (let i = 0; i < items.length; i++) {
      if (!items[i]?.base64) continue;
      const bytes = Uint8Array.from(atob(items[i].base64), (c) => c.charCodeAt(0));
      await ffmpegService.writeFile(`clip_${i}.mp4`, bytes);
      written.push(`clip_${i}.mp4`);
    }
    try {
      const cuts = talk.map((x) => {
        const it = x.it;
        const dur = it?.clipSeconds || x.sh.duration || SHOT_SECONDS;
        if (it?.fixedCut) return it.fixedCut;
        if (!(x.sh.lines || []).length) return dur;
        return settings.audioMode === "native" && it?.hasAudio && it.speechEnd && it.speechEnd > 1.5 ? Math.min(dur, Math.max(Math.min(4, dur), it.speechEnd + 0.45)) : dur;
      });
      broll.forEach((x) => {
        const k = hostIdx(x);
        const end = (x.sh.overlayAt ?? BROLL_START) + (x.sh.overlayLen ?? BROLL_LEN);
        cuts[k] = Math.min(talk[k].it?.clipSeconds || talk[k].sh.duration || SHOT_SECONDS, Math.max(cuts[k], Math.min(end, cuts[k] + 0.6)));
      });
      const startOf = [];
      {
        let acc = 0;
        talk.forEach((x, k) => {
          startOf[k] = acc;
          acc += cuts[k];
        });
      }
      log(`[MERGE] kh\u1ED1i n\xF3i: ${cuts.map((c) => c.toFixed(1)).join(" / ")} s${broll.length ? ` \xB7 ${broll.length} c\u1EA3nh \u0111\xE8 h\xECnh: ${broll.map((x) => `#${x.sh.id}@${(startOf[hostIdx(x)] + (x.sh.overlayAt ?? BROLL_START)).toFixed(1)}s+${x.sh.overlayLen ?? BROLL_LEN}s`).join(", ")}` : ""} (t\u1ED5ng ${cuts.reduce((a, b) => a + b, 0).toFixed(1)} s)`);
      const wantSubs = settings.subtitles && await ensureFont(fontBytes, log);
      const cues = wantSubs ? buildCues(talk.map((x) => x.sh), talk.map((x) => x.it), cuts) : [];
      if (cues.length) {
        await ffmpegService.writeFile("sub.ass", utf8(buildAss(cues)));
        for (let i = 0; i < cues.length; i++) await ffmpegService.writeFile(`cue_${i}.txt`, utf8(cues[i].words.join(" ")));
      }
      const used = [...talk.map((x) => x.i), ...broll.map((x) => x.i)];
      const inputs = used.map((i) => `-i clip_${i}.mp4`).join(" ").split(" ");
      const inIdx = (i) => used.indexOf(i);
      const n = talk.length;
      const build = (withAudio, subs) => {
        const parts = [];
        const pairs = [];
        talk.forEach((x, k) => {
          const src = inIdx(x.i);
          const cut = cuts[k].toFixed(2);
          parts.push(`[${src}:v]trim=0:${cut},setpts=PTS-STARTPTS,scale=720:1280:force_original_aspect_ratio=decrease,pad=720:1280:(ow-iw)/2:(oh-ih)/2,fps=24,format=yuv420p[v${k}]`);
          if (withAudio) {
            if (x.it?.hasAudio) parts.push(`[${src}:a]atrim=0:${cut},asetpts=PTS-STARTPTS,aresample=48000,aformat=sample_fmts=fltp:channel_layouts=stereo,afade=t=out:st=${Math.max(0, cuts[k] - 0.15).toFixed(2)}:d=0.15[a${k}]`);
            else parts.push(`anullsrc=r=48000:cl=stereo:d=${cut}[a${k}]`);
            pairs.push(`[v${k}][a${k}]`);
          } else pairs.push(`[v${k}]`);
        });
        parts.push(`${pairs.join("")}concat=n=${n}:v=1:a=${withAudio ? 1 : 0}${withAudio ? "[vc][ac]" : "[vc]"}`);
        let cur = "vc";
        broll.forEach((x, k) => {
          const src = inIdx(x.i);
          const st = startOf[hostIdx(x)] + (x.sh.overlayAt ?? BROLL_START + k * BROLL_LEN);
          const len = x.sh.overlayLen ?? BROLL_LEN;
          const h = hostIdx(x);
          const at = x.sh.overlayAt ?? BROLL_START + k * BROLL_LEN;
          const isLast = broll.filter((y) => hostIdx(y) === h).every((y) => (y.sh.overlayAt ?? BROLL_START) + (y.sh.overlayLen ?? BROLL_LEN) <= at + len);
          const lenX = isLast ? Math.max(len, cuts[h] - at) : len;
          const pad = lenX > len + 0.05 ? `,tpad=stop_mode=clone:stop_duration=${(lenX - len).toFixed(2)}` : "";
          parts.push(`[${src}:v]trim=0:${len},setpts=PTS-STARTPTS,fps=24${pad},setpts=PTS+${st}/TB,scale=720:1280:force_original_aspect_ratio=increase,crop=720:1280,format=yuv420p[o${k}]`);
          parts.push(`[${cur}][o${k}]overlay=eof_action=pass:enable='between(t,${st},${(st + lenX).toFixed(2)})'[vo${k}]`);
          cur = `vo${k}`;
        });
        let vchain = `[${cur}]noise=alls=6:allf=t,eq=saturation=0.88:contrast=0.96:brightness=-0.01,unsharp=5:5:-0.35:5:5:0`;
        if (subs === "ass" && cues.length) vchain += `,subtitles=filename=sub.ass:fontsdir=fonts`;
        else if (subs === "drawtext" && cues.length) {
          vchain += "," + cues.map((c, i) => `drawtext=fontfile=font.ttf:textfile=cue_${i}.txt:fontsize=46:fontcolor=white:borderw=4:bordercolor=black:x=(w-text_w)/2:y=h-300:enable='between(t,${c.start.toFixed(2)},${c.end.toFixed(2)})'`).join(",");
        }
        parts.push(`${vchain}[vout]`);
        if (withAudio) parts.push(`[ac]loudnorm=I=-16:TP=-1.5:LRA=11[aout]`);
        const args = [...inputs, "-filter_complex", parts.join(";"), "-map", "[vout]"];
        if (withAudio) args.push("-map", "[aout]", "-c:a", "aac", "-b:a", "128k");
        else args.push("-an");
        args.push("-c:v", "libx264", "-preset", "ultrafast", "-crf", "27", "-movflags", "+faststart", "-y", "out.mp4");
        return args;
      };
      const subsOk = !!(wantSubs && cues.length);
      const native = settings.audioMode === "native";
      const attempts = [
        [native, "ass", "\u0111\u1EE7 ti\u1EBFng + ph\u1EE5 \u0111\u1EC1 karaoke"],
        [native, "drawtext", "\u0111\u1EE7 ti\u1EBFng + ph\u1EE5 \u0111\u1EC1 th\u01B0\u1EDDng"],
        [native, "none", "c\xF3 ti\u1EBFng, kh\xF4ng ph\u1EE5 \u0111\u1EC1"],
        [false, "ass", "c\xE2m + ph\u1EE5 \u0111\u1EC1 karaoke"],
        [false, "drawtext", "c\xE2m + ph\u1EE5 \u0111\u1EC1 th\u01B0\u1EDDng"],
        [false, "none", "c\xE2m, kh\xF4ng ph\u1EE5 \u0111\u1EC1"]
      ].filter((x) => subsOk || x[1] === "none");
      let lastErr = "";
      for (const [aud, s, label] of attempts) {
        try {
          await ffmpegService.exec(build(aud, s));
          const data = await ffmpegService.readFile("out.mp4");
          const arr = data;
          if (!arr || arr.length < 1e3) throw new Error("out.mp4 r\u1ED7ng");
          log(`[MERGE] xong (${label}).`);
          const blob = new Blob([arr.buffer], { type: "video/mp4" });
          return await new Promise((res) => {
            const r = new FileReader();
            r.onloadend = () => res(r.result.split(",")[1]);
            r.readAsDataURL(blob);
          });
        } catch (e) {
          lastErr = String(e?.message || e);
          log(`[MERGE] ki\u1EC3u "${label}" l\u1ED7i: ${lastErr.slice(0, 160)}`);
        }
      }
      throw new Error("Gh\xE9p th\u1EA5t b\u1EA1i: " + lastErr);
    } finally {
      for (const f of written) {
        try {
          await ffmpegService.deleteFile(f);
        } catch (e) {
        }
      }
    }
  };
  var ffLock = makeLimiter(1);
  var composeHost = async (host, hostShot, ins, settings, log, key) => {
    await ffmpegService.load();
    const dur = host.clipSeconds || hostShot.duration || SHOT_SECONDS;
    const native = settings.audioMode === "native";
    let cut = native && host.hasAudio && host.speechEnd && host.speechEnd > 1.5 && (hostShot.lines || []).length ? Math.min(dur, Math.max(Math.min(4, dur), host.speechEnd + 0.45)) : dur;
    const speechCut = cut;
    ins.forEach((x) => {
      cut = Math.min(dur, Math.max(cut, Math.min((x.sh.overlayAt ?? 0) + (x.sh.overlayLen ?? x.sh.duration), speechCut + 0.6)));
    });
    const out = `seg_${key}.mp4`;
    const files = [out];
    const put = async (name, b64) => {
      await ffmpegService.writeFile(name, Uint8Array.from(atob(b64), (c) => c.charCodeAt(0)));
      files.push(name);
    };
    await put(`h_${key}.mp4`, host.base64);
    for (let k = 0; k < ins.length; k++) await put(`i_${key}_${k}.mp4`, ins[k].it.base64);
    const build = (mixInsertAudio, withAudio) => {
      const parts = [];
      const c = cut.toFixed(2);
      parts.push(`[0:v]trim=0:${c},setpts=PTS-STARTPTS,scale=720:1280:force_original_aspect_ratio=decrease,pad=720:1280:(ow-iw)/2:(oh-ih)/2,fps=24,format=yuv420p[v0]`);
      let cur = "v0";
      const mixes = [];
      ins.forEach((x, k) => {
        const st = x.sh.overlayAt ?? 0;
        const len0 = x.sh.overlayLen ?? x.sh.duration;
        const isLast = ins.every((y) => (y.sh.overlayAt ?? 0) + (y.sh.overlayLen ?? y.sh.duration) <= st + len0);
        const len = isLast ? Math.max(len0, cut - st) : len0;
        const pad = len > len0 + 0.05 ? `,tpad=stop_mode=clone:stop_duration=${(len - len0).toFixed(2)}` : "";
        parts.push(`[${k + 1}:v]trim=0:${len0},setpts=PTS-STARTPTS,fps=24${pad},setpts=PTS+${st}/TB,scale=720:1280:force_original_aspect_ratio=increase,crop=720:1280,format=yuv420p[o${k}]`);
        parts.push(`[${cur}][o${k}]overlay=eof_action=pass:enable='between(t,${st},${(st + len).toFixed(2)})'[w${k}]`);
        cur = `w${k}`;
        if (withAudio && mixInsertAudio && x.it.hasAudio && (x.sh.lines || []).length) {
          const ms = Math.round(st * 1e3);
          parts.push(`[${k + 1}:a]atrim=0:${len},asetpts=PTS-STARTPTS,aresample=48000,aformat=sample_fmts=fltp:channel_layouts=stereo,adelay=${ms}|${ms}[ia${k}]`);
          mixes.push(`[ia${k}]`);
        }
      });
      parts.push(`[${cur}]null[vout]`);
      if (withAudio) {
        if (host.hasAudio) parts.push(`[0:a]atrim=0:${c},asetpts=PTS-STARTPTS,aresample=48000,aformat=sample_fmts=fltp:channel_layouts=stereo[a0]`);
        else parts.push(`anullsrc=r=48000:cl=stereo:d=${c}[a0]`);
        if (mixes.length) parts.push(`[a0]${mixes.join("")}amix=inputs=${mixes.length + 1}:duration=first:dropout_transition=0:normalize=0[aout]`);
        else parts.push(`[a0]anull[aout]`);
      }
      const args = ["-i", `h_${key}.mp4`];
      ins.forEach((_, k) => args.push("-i", `i_${key}_${k}.mp4`));
      args.push("-filter_complex", parts.join(";"), "-map", "[vout]");
      if (withAudio) args.push("-map", "[aout]", "-c:a", "aac", "-b:a", "128k");
      else args.push("-an");
      args.push("-c:v", "libx264", "-preset", "ultrafast", "-crf", "23", "-t", c, "-movflags", "+faststart", "-y", out);
      return args;
    };
    const attempts = [[true, native, "ti\u1EBFng ng\u01B0\u1EDDi k\u1EC3 + c\xE2u c\u1EE7a c\u1EA3nh \u0111\xE8"], [false, native, "ti\u1EBFng ng\u01B0\u1EDDi k\u1EC3"], [false, false, "c\xE2m"]];
    let lastErr = "";
    try {
      for (const [mix, aud, label] of attempts) {
        try {
          await ffmpegService.exec(build(mix, aud));
          const arr = await ffmpegService.readFile(out);
          if (!arr || arr.length < 1e3) throw new Error("\u0111o\u1EA1n r\u1ED7ng");
          log(`[SEG] \u0111o\u1EA1n ${hostShot.id}: ${cut.toFixed(1)} s, \u0111\xE8 ${ins.map((x) => `#${x.sh.id}@${x.sh.overlayAt ?? 0}s+${x.sh.overlayLen ?? x.sh.duration}s`).join(", ")} (${label})`);
          const blob = new Blob([arr.buffer], { type: "video/mp4" });
          const b64 = await new Promise((res) => {
            const r = new FileReader();
            r.onloadend = () => res(r.result.split(",")[1]);
            r.readAsDataURL(blob);
          });
          return { base64: b64, cut, audio: aud };
        } catch (e) {
          lastErr = String(e?.message || e);
          log(`[SEG] \u0111o\u1EA1n ${hostShot.id} ki\u1EC3u "${label}" l\u1ED7i: ${lastErr.slice(0, 140)}`);
        }
      }
    } finally {
      for (const f of files) {
        try {
          await ffmpegService.deleteFile(f);
        } catch (e) {
        }
      }
    }
    throw new Error("Gh\xE9p \u0111o\u1EA1n th\u1EA5t b\u1EA1i: " + lastErr);
  };
  var prepMerge = (shots, items) => {
    const outS = [];
    const outI = [];
    shots.forEach((sh, i) => {
      const it = items[i];
      if (sh.insert && sh.overlayHost) {
        const k = shots.findIndex((x) => x.id === sh.overlayHost);
        if (k >= 0 && (items[k]?.compositeBase64 || !items[k]?.base64)) return;
      }
      if (!it?.base64) return;
      if (it?.compositeBase64) {
        outS.push(sh);
        outI.push({ ...it, base64: it.compositeBase64, hasAudio: it.compositeAudio !== false, fixedCut: it.compositeCut });
        return;
      }
      outS.push(sh);
      outI.push(it);
    });
    return { shots: outS, items: outI };
  };

  // product-factory/v44_orange/mau.ts
  var SAMPLE_LINES = `V\u0102N M\u1EAAU (gi\u1ECDng v\xE0 c\xE1ch n\xF3i c\u1EA7n h\u1ECDc, d\u1EF1ng theo \u0111\xFAng c\xF4ng th\u1EE9c r\xFAt t\u1EEB 60 reel b\xE1n h\xE0ng Vi\u1EC7t \u2014 h\u1ECDc NH\u1ECAP v\xE0 C\xC1CH CH\u1EC8 V\xC0O C\xC1I \u0110ANG TH\u1EA4Y, kh\xF4ng ch\xE9p nguy\xEAn c\xE2u):
[M\u1EABu A \u2014 ch\u1EE3 c\xE1 5 gi\u1EDD s\xE1ng, m\u1EA1ch c\xF9ng khai th\xE1c, ng\u01B0\u1EDDi k\u1EC3 kh\xF4ng l\u1ED9 m\u1EB7t] "N\u0103m gi\u1EDD s\xE1ng ch\u1EE3 c\xE1 nh\xE0 em n\xF3 th\u1EBF n\xE0y c\xE1c b\xE1c \u1EA1. C\xE1c c\xF4 v\u1EEBa c\xE2n c\xE1 v\u1EEBa ch\xECa \u0111i\u1EC7n tho\u1EA1i ra cho nhau. \u0110\xE2y, hai ng\u01B0\u1EDDi g\u1EB7p nhau l\xE0 qu\xE9t m\xE3 c\u1EE7a nhau m\u1ED9t c\xE1i. Qu\xE9t xong l\xE0 t\u1ED1c \u0111\u1ED9 \u0111\xE0o n\xF3 nh\xEDch l\xEAn lu\xF4n. N\xEAn s\xE1ng n\xE0o c\u1EA3 ch\u1EE3 c\u0169ng t\xECm nhau, g\u1EB7p \u0111\u01B0\u1EE3c nhi\u1EC1u th\xEC \u0111\xE0o nhanh h\u1EB3n. C\xF4 b\xE1n c\xE1 \u0111\u1EA7u d\xE3y m\u1EDBi c\xE0i h\xF4m qua, em qu\xE9t cho c\xF4 m\u1ED9t c\xE1i. Ch\u1ED7 n\xE0o \u0111\xF4ng ng\u01B0\u1EDDi th\xEC r\u1EE7 nhau nh\u01B0 ch\u1EE3 em, g\u1EB7p l\xE0 \u0111\xE0o nhanh. B\xE1c n\xE0o mu\u1ED1n th\xEC \u0111\u0103ng k\xFD theo link c\u1EE7a em, b\xE1c v\xE0o l\xE0 c\xF3 ngay 10 FC."
[M\u1EABu B \u2014 nh\u1EAFc \u0111\xE0o gi\u1EEFa b\u1EEFa c\u01A1m] "\u0110ang v\xE0 d\u1EDF b\xE1t c\u01A1m th\xEC \u0111i\u1EC7n tho\u1EA1i n\xF3 rung c\xE1c b\xE1c \u1EA1. N\xF3 nh\u1EAFc em v\xE0o \u0111\xE0o \u0111\u1EA5y. Em b\u1ECF \u0111\u0169a, b\u1EA5m c\xE1i n\xFAt cam ba gi\xE2y, r\u1ED3i \u0103n ti\u1EBFp. B\u1EA5m xong l\xE0 FC n\xF3 t\u1EF1 c\u1ED9ng d\u1EA7n, m\xECnh \u0111i l\xE0m g\xEC th\xEC l\xE0m. M\u1ED9t ng\xE0y n\xF3 nh\u1EAFc c\xF3 ba l\u1EA7n th\xF4i, h\xF4m n\xE0o b\u1EADn kh\xF4ng b\u1EA5m c\u0169ng ch\u1EB3ng m\u1EA5t g\xEC. \u0110\xE2y, c\xE1c b\xE1c nh\xECn s\u1ED1 h\xF4m qua v\u1EDBi s\u1ED1 h\xF4m nay n\xE0y. Ai ng\xE0y n\xE0o c\u0169ng c\u1EA7m \u0111i\u1EC7n tho\u1EA1i th\xEC l\xE0m c\xE1i n\xE0y h\u1EE3p, t\xEDch \u0111\u01B0\u1EE3c t\xED n\xE0o hay t\xED \u0111\u1EA5y."
[M\u1EABu C \u2014 Buyback, m\u1EA1ch duy nh\u1EA5t \u0111\u01B0\u1EE3c n\xF3i ti\u1EC1n] "Ba m\u01B0\u01A1i ng\xE0y r\u1ED3i em m\u1EDBi d\xE1m k\u1EC3 chuy\u1EC7n n\xE0y c\xE1c b\xE1c \u1EA1. S\xE1ng nay em m\u1EDF ra th\xEC th\u1EA5y ch\u1ED7 FC c\u1EE7a em \u0111\u01B0\u1EE3c mua l\u1EA1i. N\u0103m m\u01B0\u01A1i \u0111\xF4, g\u1EA7n tri\u1EC7u r\u01B0\u1EE1i. B\u1EB1ng c\u1EA3 tu\u1EA7n em \u0111\u1EE9ng m\xE1y \u1EDF x\u01B0\u1EDFng, m\xE0 em c\xF3 m\u1EA5t g\xEC \u0111\xE2u, ng\xE0y b\u1EA5m ba ph\xFAt. Em ch\xECa cho v\u1EE3 xem, v\u1EE3 em c\u1EE9 t\u01B0\u1EDFng em \u0111\xF9a. \u0110\xE2y, c\xE1c b\xE1c nh\xECn m\xE0n h\xECnh n\xE0y, t\xEAn em n\u1EB1m trong \u0111\u1EE3t mua l\u1EA1i \u0111\xE2y. N\xEAn gi\u1EDD em c\xE0ng ch\u0103m \u0111\xE0o. B\xE1c n\xE0o \u0111\u0103ng k\xFD theo link c\u1EE7a em l\xE0 c\xF3 ngay 10 FC."
C\xC1CH N\xD3I T\u1EF0 NHI\xCAN (b\u1EAFt bu\u1ED9c): (1) KH\xD4NG li\u1EC7t k\xEA t\xEDnh n\u0103ng ki\u1EC3u "\u0111\xE0o nhanh, thanh to\xE1n \u0111\u01B0\u1EE3c, l\u1EA1i c\xF3 Buyback" \u2014 m\u1ED7i \xFD ph\u1EA3i n\u1EB1m trong M\u1ED8T vi\u1EC7c \u0111\u1EDDi th\u01B0\u1EDDng \u0111ang th\u1EA5y trong h\xECnh ("qu\xE9t m\xE3 c\u1EE7a nhau m\u1ED9t c\xE1i l\xE0 t\u1ED1c \u0111\u1ED9 n\xF3 nh\xEDch l\xEAn"); (2) c\xF3 chu\u1ED7i L\xDD DO: ho\xE0n c\u1EA3nh \u2192 "n\u1EBFu kh\xF4ng c\xF3 / tr\u01B0\u1EDBc \u0111\xE2y th\xEC\u2026" \u2192 "n\xEAn em\u2026" \u2192 k\u1EBFt qu\u1EA3; (3) ng\u01B0\u1EDDi k\u1EC3 CH\u1EC8 V\xC0O C\xC1I \u0110ANG TH\u1EA4Y b\u1EB1ng t\u1EEB ch\u1EC9: "\u0111\xE2y", "n\xE0y", "th\u1EBF n\xE0y", "c\xE1c b\xE1c nh\xECn", "k\xECa"; (4) t\u1EEB kh\u1EA9u ng\u1EEF B\u1EAFc: "nh\xEDch l\xEAn", "\u0111\u1EE1 h\u1EB3n", "ch\u1EA3 bao gi\u1EDD", "th\xEDch l\u1EAFm", "\xF4i d\u1ED3i \xF4i", "ch\u1EBFt d\u1EDF"; (5) x\u01B0ng "em", g\u1ECDi "c\xE1c b\xE1c"; (6) m\u1ED7i c\xE2u m\u1ED9t \xFD, 6-14 \xE2m ti\u1EBFt, kh\xF4ng c\xE2u v\u0103n vi\u1EBFt, kh\xF4ng "gi\u1EA3i ph\xE1p", kh\xF4ng "tr\u1EA3i nghi\u1EC7m", kh\xF4ng "n\u1EC1n t\u1EA3ng".`;
  var SKIT_FORMAT = `\u0110\u1ECANH D\u1EA0NG JSON (m\xF4 t\u1EA3 h\xECnh \u1EA3nh b\u1EB1ng TI\u1EBENG ANH, tho\u1EA1i TI\u1EBENG VI\u1EC6T):
{"title":"...",
 "monologue":"to\xE0n b\u1ED9 tho\u1EA1i theo th\u1EE9 t\u1EF1, ghi vai tr\u01B0\u1EDBc m\u1ED7i c\xE2u (narrator: \u2026 / neighbor: \u2026), 100-170 \xE2m ti\u1EBFt",
 "world":{"place":"location A, IN VIETNAM (name the town), 1 sentence, English, typically Vietnamese details","placeB":"location B if used, English, or empty","timeOfDay":"English","light":"real available light, English","details":"3-4 recurring props of A, English","detailsB":"recurring props of B, English, or empty"},
 "roles":[{"role":"narrator","name":"t\xEAn g\u1ECDi ng\u1EAFn","look":"one adult: gender EXACTLY as the cast line above assigns it, exact age, hair, exact clothes and colors, English \u2014 a man is 25-40; a woman is 25-32, good-looking in a natural way, healthy clear skin, thick dark hair, a full balanced figure, wearing decent everyday work clothes that fit without clinging, never short, never low-cut, never bare at the waist, shoulders or back","persona":"2-3 words","voice":"gender, age, northern Vietnamese"},{"role":"neighbor | friend | shopkeeper | spouse | colleague | newcomer","name":"...","look":"one adult aged 25-40 ... English","persona":"...","voice":"gender, age, northern Vietnamese \u2014 always filled, used if this role ever speaks"}],
 "shots":[{"id":1,"block":"action | talk","duration":4,"location":"A","spot":"where in the place, English","chars":["role \u0111\xE3 khai, t\u1ED1i \u0111a 2; [] n\u1EBFu c\u1EA3nh ch\xE8n kh\xF4ng c\xF3 ng\u01B0\u1EDDi"],"framing":"shot size + where EACH char is: left / right of frame, near / far from camera, facing the camera or seen from behind, English","camera":"static / handheld / slow push-in, English","firstFrame":"exact state at second 0: a mid-motion pose, the action about to happen, never already completed, English","action":"what EACH char does, named by role, with rough timing, English","expression":"English","lines":[{"speaker":"role \u0111\xE3 khai (b\u1EAFt bu\u1ED9c)","text":"c\xE2u ti\u1EBFng Vi\u1EC7t","startSec":0.5,"endSec":3.0}],"vo":[{"text":"l\u1EDDi d\u1EABn c\u1EE7a narrator \u0111\xE8 l\xEAn c\u1EA3nh action n\xE0y, ti\u1EBFng Vi\u1EC7t, k\u1EC3 \u0111\xFAng c\xE1i \u0111ang th\u1EA5y","startSec":0.3,"endSec":3.6}],"showsPhone":false,"screen":"","prop":"object held in THIS scene and by whom, English (e.g. neighbor: a bowl of rice) or empty","ambient":"English"}, \u2026 4-8 c\u1EA3nh \u2026]}
Quy t\u1EAFc: "chars" ch\u1EC9 g\u1ED3m role \u0111\xE3 khai, t\u1ED1i \u0111a 2; "showsPhone": true khi c\xF3 \u0111i\u1EC7n tho\u1EA1i m\u1EDF app trong khung, k\xE8m "screen"; "lines" r\u1ED7ng \u1EDF c\u1EA3nh c\xE2m; "vo" ch\u1EC9 \u1EDF c\u1EA3nh action, m\u1ED1c gi\xE2y t\xEDnh t\u1EEB \u0111\u1EA7u c\u1EA3nh \u0111\xF3; c\xE2u \u0111\u1EA7u m\u1ED7i c\u1EA3nh n\xF3i b\u1EAFt \u0111\u1EA7u \u1EDF gi\xE2y 0.3-0.8, c\xE2u cu\u1ED1i k\u1EBFt th\xFAc tr\u01B0\u1EDBc khi h\u1EBFt c\u1EA3nh 0.4 s.`;

  // product-factory/v44_orange/congthuc.ts
  var SKIT_FORMULA = (p, arc, variant, hookKind, hidden = false, ctaText = "", tone = "", situation = "") => `C\xD4NG TH\u1EE8C "K\u1ECACH NHI\u1EC0U C\u1EA2NH" (r\xFAt t\u1EEB 60 reel b\xE1n h\xE0ng Vi\u1EC7t ch\u1EA1y nh\u1EA5t): video 18-32 gi\xE2y g\u1ED3m 4-8 C\u1EA2NH ng\u1EAFn, m\u1ED7i c\u1EA3nh \u0111\xFAng 4 / 6 / 8 / 10 gi\xE2y. \xCDT NH\u1EA4T 2 NH\xC2N V\u1EACT xu\u1EA5t hi\u1EC7n trong h\xECnh (nh\xE2n v\u1EADt ch\xEDnh + h\xE0ng x\xF3m / b\u1EA1n c\xF9ng x\u01B0\u1EDFng / ch\u1EE7 qu\xE1n / v\u1EE3 ch\u1ED3ng / ng\u01B0\u1EDDi m\u1EDBi), t\u1ED1i \u0111a 2 ng\u01B0\u1EDDi c\xF9ng m\u1ED9t khung. D\xC0N VAI C\u1EE6A VIDEO N\xC0Y (\u0111\xE3 b\u1ED1c s\u1EB5n, l\xE0m \u0110\xDANG nh\u01B0 v\u1EADy, kh\xF4ng t\u1EF1 \u0111\u1ED5i): ${pickWeighted([{ t: "ng\u01B0\u1EDDi k\u1EC3 l\xE0 N\u1EEE, vai th\u1EE9 hai c\u0169ng l\xE0 N\u1EEE", w: 40 }, { t: "ng\u01B0\u1EDDi k\u1EC3 l\xE0 N\u1EEE, vai th\u1EE9 hai l\xE0 NAM", w: 35 }, { t: "ng\u01B0\u1EDDi k\u1EC3 l\xE0 NAM, vai th\u1EE9 hai l\xE0 N\u1EEE", w: 15 }, { t: "ng\u01B0\u1EDDi k\u1EC3 l\xE0 NAM, vai th\u1EE9 hai c\u0169ng l\xE0 NAM", w: 10 }], (x) => x.w).t}. Ghi r\xF5 gi\u1EDBi t\xEDnh \u0111\xF3 v\xE0o "look" c\u1EE7a t\u1EEBng vai b\u1EB1ng ch\u1EEF ti\u1EBFng Anh (a woman\u2026 / a man\u2026). VAI N\u1EEE: 25-32 tu\u1ED5i, \u01B0a nh\xECn m\u1ED9t c\xE1ch t\u1EF1 nhi\xEAn \u2014 da d\u1EBB kho\u1EBB s\u1EA1ch, t\xF3c \u0111en d\xE0y bu\u1ED9c g\u1ECDn ho\u1EB7c xo\xE3, d\xE1ng ng\u01B0\u1EDDi \u0111\u1EA7y \u0111\u1EB7n c\xE2n \u0111\u1ED1i, m\u1EB7t t\u01B0\u01A1i t\u1EAFn. Qu\u1EA7n \xE1o L\u1ECACH S\u1EF0 v\xE0 \u0110\u1EDCI TH\u01AF\u1EDCNG c\u1EE7a ngh\u1EC1 \u0111\xF3: \xE1o s\u01A1 mi, \xE1o thun c\u1ED5 tr\xF2n, \xE1o b\xE0 ba, t\u1EA1p d\u1EC1 \u2014 v\u1EEBa v\u1EB7n, kh\xF4ng b\xF3 s\xE1t. C\u1EA4M: \xE1o h\u1EDF c\u1ED5, h\u1EDF eo, h\u1EDF l\u01B0ng, h\u1EDF vai, \xE1o crop, v\xE1y hay qu\u1EA7n tr\xEAn \u0111\u1EA7u g\u1ED1i, \u0111\u1ED3 b\xF3, \u0111\u1ED3 ng\u1EE7, \u0111\u1ED3 t\u1EAFm. C\xF4 \u1EA5y \u0111ang L\xC0M VI\u1EC6C th\u1EADt, kh\xF4ng t\u1EA1o d\xE1ng, kh\xF4ng nh\xECn v\xE0o \u1ED1ng k\xEDnh ch\xE0o m\u1EDDi. VAI NAM: 25-40 tu\u1ED5i, \u0111\u1EDDi th\u01B0\u1EDDng, kh\xF4ng l\xE0m m\u1EABu.  TU\u1ED4I: M\u1ECCI vai \u0111\u1EC1u trong kho\u1EA3ng 25-40 tu\u1ED5i \u2014 tu\u1ED5i \u0111ang \u0111i l\xE0m. C\u1EA4M ng\u01B0\u1EDDi gi\xE0, c\u1EA5m "b\xE1c v\u1EC1 h\u01B0u", "\xF4ng c\u1EE5", "t\u1ED5 h\u01B0u tr\xED"; c\u1EA5m tr\u1EBB em d\u01B0\u1EDBi m\u1ECDi h\xECnh th\u1EE9c. T\u1ED1i \u0111a 2 B\u1ED0I C\u1EA2NH ("location" A v\xE0 B), m\u1ED7i b\u1ED1i c\u1EA3nh gi\u1EEF nguy\xEAn chi ti\u1EBFt \u1EDF m\u1ECDi c\u1EA3nh.
LO\u1EA0I C\u1EA2NH: "talk" = m\u1ED9t ng\u01B0\u1EDDi n\xF3i th\u1EB3ng v\xE0o m\xE1y ho\u1EB7c n\xF3i v\u1EDBi ng\u01B0\u1EDDi kia (6-10 s, tho\u1EA1i 4-5,5 \xE2m ti\u1EBFt/gi\xE2y, TAY lu\xF4n b\u1EADn: \u0111i\u1EC7n tho\u1EA1i, \u0111\u1ED3 \u0111ang l\xE0m d\u1EDF); "action" = c\u1EA3nh h\xE0nh \u0111\u1ED9ng ng\u1EAFn 4-6 s quay ki\u1EC3u ng\u01B0\u1EDDi th\u1EE9 ba (hai ng\u01B0\u1EDDi ch\xECa \u0111i\u1EC7n tho\u1EA1i qu\xE9t m\xE3 cho nhau, b\u1ECF \u0111\u0169a c\u1EA7m \u0111i\u1EC7n tho\u1EA1i, ch\u1EE7 qu\xE1n g\u1EADt \u0111\u1EA7u), c\xF3 th\u1EC3 c\xF3 M\u1ED8T c\xE2u tho\u1EA1i ng\u1EAFn c\u1EE7a b\u1EA5t k\u1EF3 vai n\xE0o.
L\u1EDCI D\u1EAAN "vo" (b\u1EAFt bu\u1ED9c, \u0111\xE2y l\xE0 x\u01B0\u01A1ng s\u1ED1ng c\u1EE7a video nh\u01B0 reel m\u1EABu): m\u1ECDi c\u1EA3nh "action" \u0111\u1EC1u c\xF3 "vo" = l\u1EDDi ng\u01B0\u1EDDi k\u1EC3 (narrator) n\xF3i v\u1EDBi kh\xE1n gi\u1EA3 \u0110\xC8 L\xCAN c\u1EA3nh \u0111\xF3, k\u1EC3 \u0111\xFAng c\xE1i \u0111ang th\u1EA5y trong h\xECnh ("\u0110\xE2y, hai ng\u01B0\u1EDDi g\u1EB7p nhau l\xE0 qu\xE9t m\xE3 c\u1EE7a nhau m\u1ED9t c\xE1i", "C\xE1c b\xE1c nh\xECn s\u1ED1 h\xF4m qua v\u1EDBi s\u1ED1 h\xF4m nay n\xE0y"), 3,5-5 \xE2m ti\u1EBFt/gi\xE2y theo \u0111\u1ED9 d\xE0i c\u1EA3nh; c\u1EA3nh "talk" th\xEC d\xF9ng "lines". T\u1ED5ng l\u1EDDi (vo + lines) 100-170 \xE2m ti\u1EBFt cho c\u1EA3 video, gi\u1ECDng li\u1EC1n t\u1EEB \u0111\u1EA7u \u0111\u1EBFn cu\u1ED1i nh\u01B0 m\u1ED9t ng\u01B0\u1EDDi \u0111ang k\u1EC3 chuy\u1EC7n cho h\xE0ng x\xF3m.
${SAMPLE_LINES}
"action" c\u0169ng d\xF9ng cho C\u1EA2NH CH\xC8N kh\xF4ng c\xF3 ng\u01B0\u1EDDi ("chars": []): c\u1EADn m\xE0n h\xECnh \u0111i\u1EC7n tho\u1EA1i \u0111ang m\u1EDF app ("showsPhone": true, ch\u1EC9 b\xE0n tay, kh\xF4ng m\u1EB7t); \u0111i\u1EC7n tho\u1EA1i n\u1EB1m tr\xEAn b\xE0n s\xE1ng m\xE0n h\xECnh rung b\xE1o. "firstFrame" ph\u1EA3i l\xE0 t\u01B0 th\u1EBF GI\u1EEEA CH\u1EEANG c\u1EE7a h\xE0nh \u0111\u1ED9ng (ng\xF3n c\xE1i s\u1EAFp ch\u1EA1m m\xE0n h\xECnh, hai \u0111i\u1EC7n tho\u1EA1i s\u1EAFp ch\u1EA1m nhau, mi\u1EC7ng v\u1EEBa m\u1EDF) \u2014 kh\xF4ng ph\u1EA3i h\xE0nh \u0111\u1ED9ng \u0111\xE3 xong \u2014 \u0111\u1EC3 clip 4 s c\xF2n ch\u1ED7 chuy\u1EC3n \u0111\u1ED9ng.
${arc ? arc.beats + (variant ? " BI\u1EBEN TH\u1EC2 B\u1EAET BU\u1ED8C: " + variant : "") : ""}
T\u1ED4NG TH\u1EDCI L\u01AF\u1EE2NG B\u1EAET BU\u1ED8C ${arc ? arc.dur[0] : 18}-${arc ? arc.dur[1] : 32} GI\xC2Y: c\u1ED9ng "duration" c\u1EE7a t\u1EA5t c\u1EA3 c\xE1c c\u1EA3nh TR\u01AF\u1EDAC khi vi\u1EBFt, v\xED d\u1EE5 4 + 6 + 4 + 8 + 4 = 26. Qu\xE1 d\xE0i th\xEC b\u1EDBt c\u1EA3nh ch\u1EE9 \u0111\u1EEBng r\xFAt l\u1EDDi, v\xEC l\u1EDDi ng\u1EAFn qu\xE1 c\u0169ng b\u1ECB lo\u1EA1i.
C\u1EA2NH \u0110\u1EA6U vs C\u1EA2NH CH\u1EE8NG MINH (hai vi\u1EC7c kh\xE1c nhau, \u0111o \u0111\u01B0\u1EE3c tr\xEAn 80 reel): c\u1EA3nh \u0110\u1EA6U \u01B0u ti\xEAn h\xECnh L\u1EA0, kh\xF3 \u0111o\xE1n, ng\u01B0\u1EDDi xem ch\u01B0a bi\u1EBFt \u0111ang nh\xECn c\xE1i g\xEC \u2014 \u0111\xF3 l\xE0 th\u1EE9 k\xE9o ng\u01B0\u1EDDi d\u1EEBng l\u1EA1i. T\u1EEB c\u1EA3nh th\u1EE9 hai tr\u1EDF \u0111i th\xEC ng\u01B0\u1EE3c l\u1EA1i: h\xECnh ph\u1EA3i KH\u1EDAP T\u1EEANG CH\u1EEE v\u1EDBi l\u1EDDi \u0111ang n\xF3i, n\xF3i c\xE1i g\xEC th\xEC th\u1EA5y \u0111\xFAng c\xE1i \u0111\xF3 \u2014 \u0111\xF3 l\xE0 th\u1EE9 khi\u1EBFn ng\u01B0\u1EDDi ta tin v\xE0 b\u1EA5m. L\u1EABn l\u1ED9n hai vi\u1EC7c n\xE0y l\xE0 m\u1EA5t c\u1EA3 hai.
C\xC2U M\u1EDE: ${HOOK_RULES[hookKind || "su_viec"] || HOOK_RULES.su_viec}. CH\u1ED0T: ${CLOSE_RULES[arc ? arc.close : "ref"]}${ctaText ? " KI\u1EC2U M\u1EDCI C\u1EE6A VIDEO N\xC0Y (ch\u1EC9 d\xF9ng \u0111\xFAng ki\u1EC3u n\xE0y): " + ctaText : ""}.${hidden ? ' NG\u01AF\u1EDCI K\u1EC2 KH\xD4NG BAO GI\u1EDC L\u1ED8 M\u1EB6T: kh\xF4ng c\xF3 c\u1EA3nh "talk" n\xE0o c\u1EE7a narrator; m\u1ECDi l\u1EDDi c\u1EE7a narrator l\xE0 "vo" \u0111\xE8 l\xEAn c\u1EA3nh action; c\u1EA3nh ch\u1ED1t l\xE0 action c\u1EADn m\xE0n h\xECnh \u0111i\u1EC7n tho\u1EA1i / b\xE0n tay / hai ng\u01B0\u1EDDi qu\xE9t m\xE3, KH\xD4NG th\u1EA5y m\u1EB7t narrator, v\u1EDBi "vo" k\u1EBFt lu\u1EADn.' : ""}
S\u1ED0 \u0110\u01AF\u1EE2C PH\xC9P N\xD3I: HI\u1EC6N GI\u1EDC m\u1ED7i ng\xE0y b\u1EA5m \u0111\xE0o \u0111\u01B0\u1EE3c ${p.fcPerDay} FC \u2014 con s\u1ED1 n\xE0y c\xF3 th\u1EADt v\xE0 \u0111\u01B0\u1EE3c n\xF3i ra, nh\u01B0ng LU\xD4N k\xE8m ch\u1EEF "hi\u1EC7n gi\u1EDD / b\xE2y gi\u1EDD" v\xEC t\u1ED1c \u0111\u1ED9 \u0111\xE0o GI\u1EA2M D\u1EA6N theo th\u1EDDi gian: c\xE0ng v\u1EC1 sau c\xE0ng \u0111\xE0o \u0111\u01B0\u1EE3c \xEDt, ai v\xE0o s\u1EDBm th\xEC m\u1ED7i ng\xE0y \u0111\u01B0\u1EE3c nhi\u1EC1u h\u01A1n ng\u01B0\u1EDDi v\xE0o mu\u1ED9n. \u0110\xE2y l\xE0 l\xFD do th\u1EADt \u0111\u1EC3 s\u1ED1t ru\u1ED9t, n\xF3i m\u1ED9c nh\u01B0 ng\u01B0\u1EDDi trong cu\u1ED9c ("h\u1ED3i em m\u1EDBi v\xE0o c\xF2n \u0111\u01B0\u1EE3c nhi\u1EC1u h\u01A1n b\xE2y gi\u1EDD \u0111\u1EA5y", "v\xE0o ch\u1EADm l\xE0 m\u1ED7i ng\xE0y \xEDt \u0111i ch\u1EE9 kh\xF4ng \u0111\u01B0\u1EE3c th\u1EBF n\xE0y \u0111\xE2u"), KH\xD4NG h\xF9 do\u1EA1, KH\xD4NG \u0111\u1EBFm ng\u01B0\u1EE3c, KH\xD4NG n\xF3i "c\u01A1 h\u1ED9i cu\u1ED1i". ${p.fcc ? `Nh\u01B0ng TUY\u1EC6T \u0110\u1ED0I kh\xF4ng nh\xE2n n\xF3 l\xEAn th\xE0nh thu nh\u1EADp: c\u1EA5m "m\u1ED9t th\xE1ng \u0111\u01B0\u1EE3c bao nhi\xEAu", c\u1EA5m "m\u1ED9t n\u0103m \u0111\u01B0\u1EE3c bao nhi\xEAu", c\u1EA5m m\u1ECDi ph\xE9p t\xEDnh ra ti\u1EC1n theo th\xE1ng/n\u0103m. N\xF3i con s\u1ED1 ng\xE0y l\xE0 \u0111\u1EE7.` : ""}
B\u1EB0NG CH\u1EE8NG: m\xE0n h\xECnh \u0111i\u1EC7n tho\u1EA1i trong video l\xE0 \u1EA2NH CH\u1EE4P TH\u1EACT c\u1EE7a app, k\u1ECBch b\u1EA3n KH\xD4NG bi\u1EBFt con s\u1ED1 tr\xEAn \u0111\xF3. V\xEC v\u1EADy kh\xF4ng \u0111\u1ECDc con s\u1ED1 T\u1ED4NG FC \u0111ang hi\u1EC7n tr\xEAn m\xE0n h\xECnh (c\u1EA5m "em \u0111ang c\xF3 hai m\u01B0\u01A1i hai FC") \u2014 n\xF3i sai so v\u1EDBi h\xECnh l\xE0 l\u1ED9 ngay. C\xE1c con s\u1ED1 \u0110\u01AF\u1EE2C ph\xE9p n\xF3i ra, v\xE0 CH\u1EC8 nh\u1EEFng con s\u1ED1 n\xE0y: ${p.fcPerDay} FC m\u1ED7i ng\xE0y, ${p.refInvitee} FC / ${p.refInviter} FC c\u1EE7a link m\u1EDDi. H\u1EBFt. KH\xD4NG c\xF3 con s\u1ED1 ti\u1EC1n n\xE0o \u0111\u01B0\u1EE3c n\xF3i, k\u1EC3 c\u1EA3 gi\xE1 FCC, k\u1EC3 c\u1EA3 s\u1ED1 ti\u1EC1n nh\u1EADn \u0111\u01B0\u1EE3c khi mua l\u1EA1i \u2014 ch\u1ED7 \u0111\xF3 quy ra th\u1EE9 \u0111\u1EBFm \u0111\u01B0\u1EE3c. Thay v\xE0o \u0111\xF3, \xEDt nh\u1EA5t M\u1ED8T c\xE2u ph\u1EA3i CH\u1EC8 V\xC0O M\xC0N H\xCCNH v\xE0 n\xF3i c\xE1i \u0111ang \u0111\u1ED5i theo ki\u1EC3u \u0111\u1ECBnh t\xEDnh: "c\xE1c b\xE1c nh\xECn n\xF3 nh\xEDch l\xEAn n\xE0y", "s\xE1ng nay nhi\u1EC1u h\u01A1n h\xF4m qua r\u1ED3i", "v\u1EEBa qu\xE9t xong l\xE0 n\xF3 ch\u1EA1y nhanh h\u1EB3n".
M\xC0N H\xCCNH \u0110I\u1EC6N THO\u1EA0I: c\u1EA3nh n\xE0o c\xF3 "showsPhone": true th\xEC ghi th\xEAm "screen" = m\u1ED9t trong ${SCREEN_KEYS.join(" | ")} (dao = m\xE0n \u0111\xE0o, nhac = th\xF4ng b\xE1o nh\u1EAFc \u0111\xE0o, quet = qu\xE9t m\xE3 QR c\u1EE7a nhau, tra = tr\u1EA3 ti\u1EC1n \u1EDF qu\xE1n, buyback = FC \u0111\u01B0\u1EE3c mua l\u1EA1i, moi = m\u1EDDi b\u1EA1n theo link). M\u1EA1ch n\xE0y n\xEAn d\xF9ng: ${arc ? arc.screens.join(", ") : "dao"}. \u1EA2nh m\xE0n h\xECnh l\xE0 \u1EA3nh ch\u1EE5p TH\u1EACT, \u0111\u1EEBng m\xF4 t\u1EA3 ch\u1EEF tr\xEAn m\xE0n h\xECnh. \u0110\u1ED8 D\xC0I B\u1EAET BU\u1ED8C: c\u1EA3nh n\xE0o c\xF3 "showsPhone": true th\xEC t\u1ED5ng l\u1EDDi n\xF3i TRONG CH\xCDNH C\u1EA2NH \u0110\xD3 ph\u1EA3i t\u1EEB 27 \xE2m ti\u1EBFt tr\u1EDF l\xEAn (kho\u1EA3ng 6 gi\xE2y). \u0110\u1EBFm tr\u01B0\u1EDBc khi ghi ra. Gi\u1EEF m\xE0n h\xECnh 1-5,9 gi\xE2y l\xE0 v\xF9ng ch\u1EBFt \u0111o \u0111\u01B0\u1EE3c: 8.600 view so v\u1EDBi 105.000 c\u1EE7a c\u1EA3nh gi\u1EEF t\u1EEB 6 gi\xE2y, thua c\u1EA3 video kh\xF4ng khoe m\xE0n h\xECnh l\u1EA7n n\xE0o. Thi\u1EBFu th\xEC vi\u1EBFt th\xEAm c\xE2u v\xE0o c\u1EA3nh \u0111\xF3, ho\u1EB7c b\u1ECF m\xE0n h\xECnh kh\u1ECFi c\u1EA3nh \u0111\xF3 v\xE0 d\u1ED3n v\xE0o m\u1ED9t c\u1EA3nh kh\xE1c \u0111\u1EE7 d\xE0i \u2014 \u0111\u1EEBng k\xE9o d\xE0i "duration" m\xE0 kh\xF4ng th\xEAm l\u1EDDi.
S\u1ED0 L\u01AF\u1EE2NG L\xC0 B\u1EB0NG CH\u1EE8NG: ch\u1ED7 n\xE0o h\u1EE3p l\xFD th\xEC \u0111\u1EC3 NHI\u1EC0U \u0111i\u1EC7n tho\u1EA1i \u0111ang m\u1EDF m\xE0n / NHI\u1EC0U ng\u01B0\u1EDDi c\xF9ng c\u1EA7m m\xE1y trong m\u1ED9t khung, \u0111\u1EEBng ch\u1EC9 m\u1ED9t c\xE1i m\u1ED9t ng\u01B0\u1EDDi. \u0110O \u0110\u01AF\u1EE2C tr\xEAn 48 reel b\xE1n h\xE0ng: khung c\xF3 c\u1EA3 l\xF4 h\xE0ng \u0111\u1EA1t view trung v\u1ECB 148k, khung ch\u1EC9 m\u1ED9t m\xF3n 67k, khung v\xE0i m\xF3n 10k. V\u1EDBi app th\xEC "c\u1EA3 l\xF4" ngh\u0129a l\xE0 c\u1EA3 d\xE3y ng\u01B0\u1EDDi c\xF9ng b\u1EA5m, c\u1EA3 b\xE0n \u0111\u1EA7y \u0111i\u1EC7n tho\u1EA1i s\xE1ng m\xE0n \u2014 v\xE0 n\xF3 tr\xF9ng lu\xF4n v\u1EDBi b\u1EB1ng ch\u1EE9ng \u0110\xD4NG NG\u01AF\u1EDCI.
VAI TH\u1EE8 HAI PH\u1EA2I TH\u1EACT: h\u1ECD l\xE0 ng\u01B0\u1EDDi \u0111ang c\xF3 vi\u1EC7c ri\xEAng \u1EDF \u0111\xFAng n\u01A1i \u0111\xF3 (\u0111ang kh\xE2u, \u0111ang c\xE2n c\xE1, \u0111ang c\u1EAFt t\xF3c, \u0111ang \u0103n c\u01A1m), kh\xF4ng \u0111\u1EE9ng ch\u1EDD, kh\xF4ng nh\xECn v\xE0o m\xE1y quay, kh\xF4ng ph\u1EA3i ng\u01B0\u1EDDi m\u1EABu minh ho\u1EA1. C\xE1ch h\u1ECD v\xE0o chuy\u1EC7n l\xE0 ng\u1EA9ng l\xEAn h\u1ECFi, ng\xF3 sang, tr\u1EA7m tr\u1ED3, ho\u1EB7c c\xE0u nh\xE0u \u2014 m\u1ED7i l\u1EA7n \u0111\xFAng M\u1ED8T c\xE2u ng\u1EAFn c\u1EE7a ch\xEDnh h\u1ECD, ghi "speaker" l\xE0 vai \u0111\xF3. H\u1ECD n\xEAn c\xF2n \u1EDF trong h\xECnh l\xFAc cu\u1ED1i (\u0111ang l\xE0m vi\u1EC7c c\u1EE7a h\u1ECD \u1EDF h\u1EADu c\u1EA3nh), \u0111\u1EEBng bi\u1EBFn m\u1EA5t sau c\u1EA3nh \u0111\u1EA7u.
LI\xCAN T\u1EE4C: m\u1ED7i vai m\u1EB7c \u0110\xDANG M\u1ED8T b\u1ED9 \u0111\u1ED3 ghi trong "look" \u1EDF m\u1ECDi c\u1EA3nh. Vai th\u1EE9 hai \u0111\u01B0\u1EE3c \u0111\u1EE9ng c\xF9ng khung v\u1EDBi nh\xE2n v\u1EADt ch\xEDnh (\u0111\xE2y l\xE0 n\u1ED9i dung th\xE2n t\xECnh, kh\xF4ng c\xF3 k\u1EBB x\u1EA5u).
GI\u1ECCNG K\u1EC2 C\u1EE6A VIDEO N\xC0Y (b\u1EAFt bu\u1ED9c, \u0111\u1ED5i gi\u1ECDng l\xE0 \u0111\u1ED5i c\u1EA3 c\xE1ch \u0111\u1EB7t c\xE2u): ${tone || "k\u1EC3 t\u1EC9nh b\u01A1 nh\u01B0 thu\u1EADt l\u1EA1i cho h\xE0ng x\xF3m"}.
C\xC1CH M\u1EDE H\xCCNH c\u1EE7a video n\xE0y: ${oneOf(OPEN_SHOTS)}.
${situation ? `T\xCCNH HU\u1ED0NG B\u1EAET BU\u1ED8C c\u1EE7a video n\xE0y (kh\xF4ng \u0111\u01B0\u1EE3c \u0111\u1ED5i sang ch\u1ED7 kh\xE1c, ph\u1EA3i d\u1EF1ng \u0111\xFAng n\u01A1i n\xE0y): ${situation}` : ""}
\u0110\u1EEANG CH\xC9P L\u1EA0I m\u1EA5y c\u1EE5m sau, tool \u0111\xE3 d\xF9ng m\xF2n r\u1ED3i, c\xF9ng \xFD \u0111\xF3 ph\u1EA3i n\xF3i b\u1EB1ng ch\u1EEF kh\xE1c: ${TIRED.map((x) => `"${x}"`).join("; ")}. Vi\u1EBFt nh\u01B0 ng\u01B0\u1EDDi \u0111\xF3 t\u1EF1 ngh\u0129 ra, kh\xF4ng ph\u1EA3i \u0111\u1ECDc khu\xF4n.
V\xCD D\u1EE4 C\xC2U K\u1EBET LU\u1EACN (ch\u1EC9 \u0111\u1EC3 h\xECnh dung nh\u1ECBp, \u0110\u1EEANG ch\xE9p nguy\xEAn v\u0103n): ${oneOf(CLOSE_SAMPLES)}
C\xC1CH M\u1EDCI: t\u1EF1 ngh\u0129 l\u1EA5y c\xE2u ch\u1EEF, KH\xD4NG c\xF3 m\u1EABu s\u1EB5n. Vi\u1EC7c duy nh\u1EA5t c\u1EA7n l\xE0m l\xE0 cho ng\u01B0\u1EDDi xem bi\u1EBFt ch\u1ED7 t\xECm (m\xE3 \u1EDF b\xECnh lu\u1EADn, ho\u1EB7c t\xEAn \u1EE9ng d\u1EE5ng \u0111\u1EC3 t\u1EF1 tra). M\u1ED7i video m\u1ED9t ki\u1EC3u kh\xE1c nhau, l\u1EA7n n\xE0y l\xE0m theo ki\u1EC3u: ${oneOf(['\u0111\u1EC3 ch\xEDnh VAI TH\u1EE8 HAI xin m\xE3 ("cho tao xin c\xE1i m\xE3 v\u1EDBi") thay v\xEC ng\u01B0\u1EDDi k\u1EC3 ch\xE0o m\u1EDDi \u2014 t\u1EF1 nhi\xEAn h\u01A1n h\u1EB3n', "ng\u01B0\u1EDDi k\u1EC3 n\xF3i c\u1ED9c l\u1ED1c m\u1ED9t c\xE2u r\u1ED3i quay \u0111i l\xE0m ti\u1EBFp", "ng\u01B0\u1EDDi k\u1EC3 v\u1EEBa l\xE0m vi\u1EC7c v\u1EEBa n\xF3i v\u1ED1ng l\xEAn, kh\xF4ng nh\xECn v\xE0o m\xE1y quay", "g\u1ED9p l\u1EDDi m\u1EDDi v\xE0o ch\xEDnh vi\u1EC7c \u0111ang l\xE0m (\u0111ang \u0111\u01B0a h\xE0ng, \u0111ang c\u1EAFt t\xF3c) ch\u1EE9 kh\xF4ng d\u1EEBng l\u1EA1i \u0111\u1EC3 m\u1EDDi", "ng\u01B0\u1EDDi k\u1EC3 n\xF3i ki\u1EC3u ng\u1EA1i ng\xF9ng, nh\u01B0 s\u1EE3 phi\u1EC1n ng\u01B0\u1EDDi xem"])}.
NH\u1ECAP N\u1EB0M TRONG KHUNG, KH\xD4NG N\u1EB0M \u1EDE CH\u1ED6 C\u1EAET: m\u1ED7i c\u1EA3nh ph\u1EA3i c\xF3 M\u1ED8T h\xE0nh \u0111\u1ED9ng v\u1EADt l\xFD nh\xECn th\u1EA5y \u0111\u01B0\u1EE3c di\u1EC5n ra tr\u1ECDn v\u1EB9n trong c\u1EA3nh \u0111\xF3 \u2014 b\xF3c, l\u1EADt, g\u1EADp, ch\xECa ra, c\xFAi v\xE0o, \u0111\u1EB7t xu\u1ED1ng, quay m\xE0n h\xECnh l\u1EA1i, hai \u0111i\u1EC7n tho\u1EA1i ch\u1EA1m nhau \u2014 ho\u1EB7c m\u1ED9t c\xFA si\u1EBFt m\xE1y l\u1EA1i g\u1EA7n v\u1EADt. \u0110O \u0110\u01AF\u1EE2C tr\xEAn 48 reel b\xE1n h\xE0ng: 80% l\xE0 M\u1ED8T C\xDA M\xC1Y LI\u1EC0N kh\xF4ng c\u1EAFt nh\xE1t n\xE0o m\xE0 v\u1EABn gi\u1EEF \u0111\u01B0\u1EE3c ng\u01B0\u1EDDi xem, v\xEC nh\u1ECBp do h\xE0nh \u0111\u1ED9ng t\u1EA1o ra. C\u1EA3nh n\xE0o ch\u1EC9 c\xF3 ng\u01B0\u1EDDi \u0111\u1EE9ng n\xF3i m\xE0 tay kh\xF4ng l\xE0m g\xEC l\xE0 c\u1EA3nh ch\u1EBFt.
BI\u1EC2U C\u1EA2M (\u0111o tr\xEAn 140 reel, m\xE3 ho\xE1 m\xF9): c\u1EA3nh M\u1EDE c\u1EA5m c\u01B0\u1EDDi v\xE0 c\u1EA5m nh\xECn th\u1EB3ng m\xE1y \u2014 m\u1EDF b\u1EB1ng n\u1EE5 c\u01B0\u1EDDi ch\xE0o ch\u1EC9 \u0111\u01B0\u1EE3c 10.923 view, m\u1EDF b\u1EB1ng m\u1EB7t \u0111ang c\xFAi l\xE0m d\u1EDF \u0111\u01B0\u1EE3c 148.205, kh\xF4ng l\u1ED9 m\u1EB7t \u0111\u01B0\u1EE3c 272.641. C\u1EA3m x\xFAc b\xE1n \u0111\u01B0\u1EE3c nh\u1EA5t l\xE0 S\u1EE2 M\u1EA4T (0,78) v\xE0 B\u1EA4T NG\u1EDC (0,71); "vui" l\xE0 lo\u1EA1i b\u1ECB d\xF9ng nhi\u1EC1u nh\u1EA5t m\xE0 y\u1EBFu nh\u1EA5t (0,49). Di\u1EC5n qu\xE1 c\u0169ng ch\u1EBFt g\u1EA7n b\u1EB1ng \u0111\u01A1 m\u1EB7t (h\u1EBFt c\u1EE1 0,42 \xB7 \u0111\u01A1 0,30 \xB7 v\u1EEBa ph\u1EA3i 0,65). Ghi "expression" b\u1EB1ng ti\u1EBFng Anh, t\u1EA3 m\u1EAFt \u0111ang nh\xECn \u0111\xE2u v\xE0 mi\u1EC7ng \u0111ang l\xE0m g\xEC, KH\xD4NG ghi chung chung ki\u1EC3u "natural"/"friendly". Nh\xE2n v\u1EADt ch\xEDnh l\xE0 "narrator", n\xF3i gi\u1ECDng ${p.voice}.
TAY V\xC0 M\u1EAET (bi\u1EBFn c\xF3 ch\xEAnh l\u1EDBn nh\u1EA5t trong to\xE0n b\u1ED9 nghi\xEAn c\u1EE9u): tay \u0111\u1ED5i \u0111\u1ED9ng t\xE1c t\u1EEB 4 l\u1EA7n tr\u1EDF l\xEAn trong 10 gi\xE2y \u0111\u01B0\u1EE3c 0,58, gi\u1EEF nguy\xEAn m\u1ED9t t\u01B0 th\u1EBF ch\u1EC9 0,18. M\u1EAFt ph\u1EA3i B\xC1M TH\u1EE8 TAY \u0110ANG L\xC0M (0,64-0,71), kh\xF4ng b\xE1m \u1ED1ng k\xEDnh (0,34-0,45). "K\xE9o v\u1EADt l\u1EA1i soi k\u1EF9" (0,74) th\u1EAFng "ch\xECa ra s\xE1t \u1ED1ng k\xEDnh" (0,49) \u2014 \u0111\u1ED9ng t\xE1c ch\xECa \u0111\xE3 b\xE3o ho\xE0, 60% video ngo\xE0i kia d\xF9ng r\u1ED3i. Vi\u1EBFt v\xE0o "action" cho r\xF5 tay l\xE0m g\xEC v\xE0 \u0111\u1ED5i m\u1EA5y l\u1EA7n.
NH\xC2N V\u1EACT PH\u1EA2I \u0110ANG L\xC0M D\u1EDE M\u1ED8T VI\u1EC6C TH\u1EACT: hai video c\xF9ng ngh\u1EC1 c\xF4ng nh\xE2n ch\xEAnh 34 l\u1EA7n (502k so v\u1EDBi 14,6k) \u2014 ng\u01B0\u1EDDi th\u1EAFng \u0111ang thao t\xE1c gi\u1EEFa d\xE2y chuy\u1EC1n \u0111ang ch\u1EA1y, ng\u01B0\u1EDDi thua ch\u1EC9 \u0111\u1EE9ng c\u1EA7m s\u1EA3n ph\u1EA9m gi\u01A1 l\xEAn c\xF2n x\u01B0\u1EDFng l\xE0 ph\xF4ng n\u1EC1n. Ngh\u1EC1 kh\xF4ng k\xE9o ng\u01B0\u1EDDi xem, VI\u1EC6C \u0110ANG L\xC0M m\u1EDBi k\xE9o.
HAI NG\u01AF\u1EDCI TRONG KHUNG: c\xF3 th\xEAm m\u1ED9t c\u01A1 th\u1EC3 th\xEC h\u01A1n (m\u1ED9t ng\u01B0\u1EDDi 0,44 \u2192 hai ng\u01B0\u1EDDi 0,57), nh\u01B0ng KH\xD4NG ph\u1EA3i v\xEC h\u1ECD tr\u1EA7m tr\u1ED3 \u2014 c\xF3 ph\u1EA3n \u1EE9ng 0,56 v\xE0 kh\xF4ng ph\u1EA3n \u1EE9ng 0,57 l\xE0 ngang nhau. V\xE0 c\u1EA3nh hai ng\u01B0\u1EDDi \u0110\u1EE8NG \u0110\u1ED0I DI\u1EC6N N\xD3I CHUY\u1EC6N V\u1EDAI NHAU l\xE0 ki\u1EC3u t\u1EC7 nh\u1EA5t \u0111o \u0111\u01B0\u1EE3c (0,22): ph\u1EA3i c\xF9ng c\xFAi v\xE0o m\u1ED9t vi\u1EC7c, \u0111\u01B0a \u0111\u1ED3 cho nhau, m\u1ED9t ng\u01B0\u1EDDi l\xE0m m\u1ED9t ng\u01B0\u1EDDi ng\xF3 sang.
TRANG PH\u1EE4C: \u0111\u1ED3 th\u01B0\u1EDDng ng\xE0y c\u1EE7a ngh\u1EC1 \u0111\xF3, b\u1EA1c m\xE0u, c\xF3 v\u1EBFt. KH\xD4NG \u0111\u1ED3ng ph\u1EE5c c\xF4ng ty, KH\xD4NG \xE1o polo c\xF3 logo, KH\xD4NG \xE1o b\u1EA3o h\u1ED9 ph\u1EA3n quang, KH\xD4NG th\u1EBB nh\xE2n vi\xEAn (\u0111o tr\xEAn 60 reel: \xE1o thun \u0111\u1EDDi th\u01B0\u1EDDng 75.813 view \xB7 polo \u0111\u1ED3ng ph\u1EE5c 16.088 \xB7 b\u1EA3o h\u1ED9 9.974). Ri\xEAng m\u1EA1ch Orange U Day th\xEC \xE1o cam l\xE0 chuy\u1EC7n c\u1EE7a s\u1EF1 ki\u1EC7n, kh\xF4ng t\xEDnh l\xE0 \u0111\u1ED3ng ph\u1EE5c.
HAI C\u1EA2NH CU\u1ED0I v\u1EABn ph\u1EA3i c\xF2n h\xE0nh \u0111\u1ED9ng \u0111ang di\u1EC5n ra, kh\xF4ng ph\u1EA3i ng\u01B0\u1EDDi \u0111\u1EE9ng n\xF3i n\u1ED1t cho h\u1EBFt l\u1EDDi.
B\u1ED0I C\u1EA2NH: \u1EDF VI\u1EC6T NAM, nh\xECn l\xE0 bi\u1EBFt Vi\u1EC7t Nam (m\xE1i t\xF4n, t\u01B0\u1EDDng g\u1EA1ch, xe m\xE1y, gh\u1EBF nh\u1EF1a, bi\u1EC3n hi\u1EC7u kh\xF4ng ch\u1EEF); \xE1nh s\xE1ng th\u1EADt. C\u1EA3nh \u0111\xEAm th\xEC s\xE1ng nh\u1EDD \u0111\xE8n \u0111\u01B0\u1EDDng, \u0111\xE8n qu\xE1n v\xE0 \xE1nh m\xE0n h\xECnh. Kh\xF4ng vi\u1EBFt ch\u1EEF c\xE1i A / B v\xE0o m\xF4 t\u1EA3 h\xECnh (ch\u1EC9 d\xF9ng trong tr\u01B0\u1EDDng "location").`;

  // product-factory/v44_orange/luat.ts
  var DOCTRINE = `LU\u1EACT N\u1ED8I DUNG UNICH (sai l\xE0 b\u1ECF k\u1ECBch b\u1EA3n):
 - FC KH\xD4NG "v\u1EC1". B\u1EA5m \u0111\xE0o th\xEC FC T\u0102NG D\u1EA6N theo th\u1EDDi gian. App ch\u1EC9 g\u1EEDi TH\xD4NG B\xC1O NH\u1EAEC \u0110\xC0O, m\u1ED7i ng\xE0y 3 l\u1EA7n; kh\xF4ng b\u1EA5m c\u0169ng KH\xD4NG m\u1EA5t g\xEC. C\u1EA5m vi\u1EBFt "FC v\u1EC1", "ti\u1EC1n v\u1EC1". C\u1EE5m "t\u0103ng d\u1EA7n theo th\u1EDDi gian" l\xE0 c\xE1ch m\xF4 t\u1EA3 c\u01A1 ch\u1EBF CHO BI\xCAN K\u1ECACH, c\u1EA5m \u0111\u01B0a nguy\xEAn v\u0103n v\xE0o tho\u1EA1i \u2014 trong l\u1EDDi ph\u1EA3i n\xF3i kh\u1EA9u ng\u1EEF: "n\xF3 c\u1EE9 t\u1EF1 l\xEAn d\u1EA7n", "\u0111\u1EC3 \u0111\u1EA5y n\xF3 t\u1EF1 nh\xEDch". C\u1EA5m lu\xF4n trong tho\u1EA1i: "t\xEDch l\u0169y", "t\xEDch lu\u1EF9", "k\u1EBFt n\u1ED1i m\u1ECDi ng\u01B0\u1EDDi", "trung ni\xEAn", "thanh ni\xEAn", "n\u1EC1n t\u1EA3ng", "tr\u1EA3i nghi\u1EC7m", "\u1EA3nh h\u01B0\u1EDFng \u0111\u1EBFn c\xF4ng vi\u1EC7c". C\u1EA5m n\xF3i ra con s\u1ED1 FC c\u1EE5 th\u1EC3 (m\xE0n h\xECnh l\xE0 \u1EA3nh ch\u1EE5p th\u1EADt, k\u1ECBch b\u1EA3n kh\xF4ng bi\u1EBFt s\u1ED1 tr\xEAn \u0111\xF3).
 - \u0110\u01B0\u1EE3c n\xF3i S\u1ED0 TI\u1EC0N th\u1EADt khi \u0111ang k\u1EC3 vi\u1EC7c FC \u0110\u01AF\u1EE2C MUA L\u1EA0I (Buyback) \u2014 k\u1EC3 c\u1EA3 \u1EDF m\u1EA1ch kh\xE1c, v\xED d\u1EE5 h\xE0ng x\xF3m k\u1EC3 l\u1EA1i "\u0111\u1EE3t r\u1ED3i c\xF3 ng\u01B0\u1EDDi \u0111\u01B0\u1EE3c mua l\u1EA1i c\u1EA3 tri\u1EC7u b\u1EA1c". Ngo\xE0i chuy\u1EC7n mua l\u1EA1i th\xEC c\u1EA5m m\u1ECDi con s\u1ED1 ti\u1EC1n, c\u1EA5m "m\u1ED9t th\xE1ng \u0111\u01B0\u1EE3c bao nhi\xEAu", c\u1EA5m h\u1EE9a thu nh\u1EADp.
 - C\u1EA5m h\u1EE9a h\u1EB9n: kh\xF4ng "\u0111\u1EA3m b\u1EA3o", "ch\u1EAFc ch\u1EAFn", "l\u1EE3i nhu\u1EADn", "l\xE3i su\u1EA5t", "\u0111\u1EA7u t\u01B0", "x l\u1EA7n", "l\xE0m gi\xE0u", "ki\u1EBFm ti\u1EC1n mi\u1EC5n ph\xED". K\u1EC3 vi\u1EC7c \u0111\xE3 x\u1EA3y ra, kh\xF4ng h\u1EE9a vi\u1EC7c s\u1EBD x\u1EA3y ra.
 - C\u1EA5m d\xF9ng t\u1EEB "user", "match", "reward" trong tho\u1EA1i; n\xF3i ti\u1EBFng Vi\u1EC7t \u0111\u1EDDi th\u01B0\u1EDDng ("ng\u01B0\u1EDDi d\xF9ng app" th\xEC g\u1ECDi l\xE0 "c\xE1c b\xE1c", "ng\u01B0\u1EDDi trong x\xF3m").
 - L\xFD do \u0111\xE1m \u0111\xF4ng: hai ng\u01B0\u1EDDi G\u1EB6P NHAU ngo\xE0i \u0111\u1EDDi v\xE0 QU\xC9T M\xC3 QR c\u1EE7a nhau th\xEC t\u1ED1c \u0111\u1ED9 \u0111\xE0o t\u0103ng. L\xFD do qu\xE1n nh\u1EADn FC: c\u1ED9ng \u0111\u1ED3ng \u0111\xE3 k\u1EBFt n\u1ED1i n\xEAn qu\xE1n treo bi\u1EC3n l\xE0 c\u1EA3 c\u1ED9ng \u0111\u1ED3ng bi\u1EBFt ngay.
 - M\xE0n h\xECnh \u0111i\u1EC7n tho\u1EA1i trong video l\xE0 \u1EA2NH CH\u1EE4P TH\u1EACT do ng\u01B0\u1EDDi v\u1EADn h\xE0nh ch\u1ECDn; kh\xF4ng m\xF4 t\u1EA3 ch\u1EEF \u0111\u1ECDc \u0111\u01B0\u1EE3c tr\xEAn m\xE0n h\xECnh.
 - KH\xD4NG BAO GI\u1EDC \u0110\u1ECCC RA M\u1ED8T CON S\u1ED0 TI\u1EC0N (c\u1EA5m "n\u0103m m\u01B0\u01A1i \u0111\xF4", "m\u1ED9t tri\u1EC7u t\xE1m", "g\u1EA7n tri\u1EC7u r\u01B0\u1EE1i", "\u0111\u01B0\u1EE3c bao nhi\xEAu ti\u1EC1n"). \u0110o tr\xEAn 136 reel b\xE1n h\xE0ng Vi\u1EC7t: 96,3% ng\u01B0\u1EDDi b\xE1n chuy\xEAn nghi\u1EC7p kh\xF4ng \u0111\u1ECDc con s\u1ED1 gi\xE1, ri\xEAng nh\xF3m l\xE0m n\u1ED9i dung ti\u1EC1n s\u1ED1 l\xE0 0/29. Thay v\xE0o \u0111\xF3 QUY RA M\u1ED8T KHO\u1EA2N CHI \u0110\u1EDCI TH\u01AF\u1EDCNG m\xE0 ai c\u0169ng h\xECnh dung \u0111\u01B0\u1EE3c, v\xE0 n\xF3i k\xE8m v\u1EBB B\u1EA4T NG\u1EDC v\xEC m\xECnh v\u1ED1n kh\xF4ng k\u1EF3 v\u1ECDng: "em t\u01B0\u1EDFng c\xF2n l\xE2u m\u1EDBi \u0111\u01B0\u1EE3c g\xEC, th\u1EBF m\xE0 th\xE1ng r\u1ED3i ch\u1ED7 \u0111\u01B0\u1EE3c mua l\u1EA1i c\u0169ng \u0110\u1EE6 TR\u1EA2 TI\u1EC0N TR\u1ECC", "em c\u1EE9 ngh\u0129 vui th\xF4i, ai ng\u1EDD \u0111\u1EE7 \u0111\xF3ng ti\u1EC1n \u0111i\u1EC7n c\u1EA3 th\xE1ng". C\xE1ch n\xE0y v\u1EEBa \u0111\xFAng ngh\u1EC1, v\u1EEBa d\u1EC5 h\xECnh dung v\u1EDBi ng\u01B0\u1EDDi ch\u01B0a bi\u1EBFt g\xEC, v\u1EEBa kh\xF4ng th\xE0nh l\u1EDDi h\u1EE9a thu nh\u1EADp.
 - KH\xD4NG C\xD3 NGO\u1EA0I L\u1EC6 N\xC0O, K\u1EC2 C\u1EA2 FCC. C\u1EA5m \u0111\u1ECDc ra gi\xE1 c\u1EE7a m\u1ED9t FC d\u01B0\u1EDBi m\u1ECDi d\u1EA1ng: c\u1EA5m "b\u1EA3y \u0111\xF4", c\u1EA5m "g\u1EA7n hai tr\u0103m ngh\xECn m\u1ED9t con", c\u1EA5m nh\xE2n l\xEAn ("n\u0103m FC l\xE0 ba m\u01B0\u01A1i l\u0103m \u0111\xF4"), c\u1EA5m quy sang ti\u1EC1n Vi\u1EC7t. FCC v\u1EABn \u0111\u01B0\u1EE3c NH\u1EAEC T\u1EDAI nh\u01B0 m\u1ED9t c\u01A1 ch\u1EBF, t\u1EF1 ngh\u0129 l\u1EA5y c\xE2u ch\u1EEF, KH\xD4NG k\xE8m con s\u1ED1.
 - C\xC1CH N\xD3I L\xC1I \u0110\xDANG: quy ra m\u1ED9t th\u1EE9 \u0110\u1EBEM \u0110\u01AF\u1EE2C trong \u0111\u1EDDi s\u1ED1ng m\xE0 ai c\u0169ng \u01B0\u1EDBc l\u01B0\u1EE3ng \u0111\u01B0\u1EE3c \u2014 "b\u1EB1ng ch\u1EE5c b\xE1t ph\u1EDF", "\u0111\u1EE7 \u0111\u1ED5 x\u0103ng c\u1EA3 th\xE1ng", "b\u1EB1ng m\u1EA5y ch\u1EE5c c\u1ED1c c\xE0 ph\xEA s\xE1ng", "\u0111\u1EE7 mua g\u1EA1o c\u1EA3 th\xE1ng". Ng\u01B0\u1EDDi nghe t\u1EF1 quy ra ti\u1EC1n trong \u0111\u1EA7u, m\xECnh kh\xF4ng ph\u1EA3i n\xF3i con s\u1ED1 n\xE0o.
 - NG\u01AF\u1EDCI XEM CH\u01AFA BI\u1EBET G\xCC V\u1EC0 TI\u1EC0N S\u1ED0. C\u1EA5m s\u1EA1ch t\u1EEB chuy\xEAn ng\xE0nh trong tho\u1EA1i: blockchain, v\xED, token, coin, s\xE0n, airdrop, staking, stake, mining, node, whitepaper, d\u1EF1 \xE1n, h\u1EC7 sinh th\xE1i, c\u1ED9ng \u0111\u1ED3ng crypto, x l\u1EA7n, \u0111u \u0111\u1EC9nh. M\u1ECDi th\u1EE9 ph\u1EA3i gi\u1EA3i th\xEDch b\u1EB1ng vi\u1EC7c \u0111\u1EDDi th\u01B0\u1EDDng: "b\u1EA5m c\xE1i n\xFAt cam", "qu\xE9t m\xE3 c\u1EE7a nhau", "\u0111\u01B0\u1EE3c mua l\u1EA1i b\u1EB1ng ti\u1EC1n".
 - B\u1ED0N B\u1EB0NG CH\u1EE8NG l\xE0 th\u1EE9 ng\u01B0\u1EDDi m\u1EDBi c\u1EA7n, theo \u0111\xFAng th\u1EE9 t\u1EF1 s\u1EE9c n\u1EB7ng: (1) \u0110\xD4NG NG\u01AF\u1EDCI \u2014 nhi\u1EC1u ng\u01B0\u1EDDi l\xE0m ngh\u0129a l\xE0 th\u1EADt; (2) TI\xCAU \u0110\u01AF\u1EE2C \u1EDF qu\xE1n ngo\xE0i \u0111\u1EDDi \u2014 ngh\u0129a l\xE0 ra ti\u1EC1n \u0111\u01B0\u1EE3c; (3) NH\u1EACN \u0110\u01AF\u1EE2C TI\u1EC0N TH\u1EACT t\u1EEB vi\u1EC7c mua l\u1EA1i \u2014 ngh\u0129a l\xE0 ki\u1EC3m ch\u1EE9ng \u0111\u01B0\u1EE3c; (4) TIN VUI \u0110\u1EC0U \u0110\u1EB6N \u2014 ngh\u0129a l\xE0 c\u1ED9ng \u0111\u1ED3ng c\xF2n m\u1EA1nh, \u0111\xE1ng ki\xEAn tr\xEC. M\u1ED7i video ch\u1EC9 g\xE1nh M\u1ED8T b\u1EB1ng ch\u1EE9ng, k\u1EC3 cho th\u1EADt k\u1EF9, \u0111\u1EEBng \xF4m c\u1EA3 b\u1ED1n.
 - C\u01A1 ch\u1EBF (qu\xE9t m\xE3 t\u0103ng t\u1ED1c, nh\u1EAFc \u0111\xE0o 3 l\u1EA7n, gi\u1EDD mua l\u1EA1i, FCC) l\xE0 TH\xD4NG TIN PH\u1EE4 n\xF3i th\xEAm cho r\xF5, KH\xD4NG ph\u1EA3i th\u1EE9 \u0111\u1EC3 b\xE1n. \u0110\u1EEBng m\u1EDF \u0111\u1EA7u b\u1EB1ng c\u01A1 ch\u1EBF.
 - "FC" v\xE0 "FCC" l\xE0 hai th\u1EE9 kh\xE1c nhau: FC l\xE0 th\u1EE9 \u0111\xE0o \u0111\u01B0\u1EE3c, FCC l\xE0 GI\xC1 T\u1EF0 DO \u0110\u1ED2NG THU\u1EACN c\u1EE7a m\u1ED9t FC. C\u1EA3 hai gi\u1EEF nguy\xEAn ch\u1EEF vi\u1EBFt t\u1EAFt \u1EDF m\u1ECDi th\u1EE9 ti\u1EBFng, ch\u1EC9 d\u1ECBch ph\u1EA7n ngh\u0129a \u0111i k\xE8m.`;

  // product-factory/v44_orange/doctrine.ts
  var productSystem = (p, formulaOnly = false, arc, variant, hookKind, hidden = false, ctaText = "", tone = "", situation = "", audience = "ngoai") => `B\u1EA1n l\xE0 bi\xEAn k\u1ECBch video ng\u1EAFn cho Facebook Reels / TikTok t\u1EA1i Vi\u1EC7t Nam. B\u1EA1n ch\u1EC9 vi\u1EBFt v\u1EC1 M\u1ED8T th\u1EE9:
S\u1EA2N PH\u1EA8M: ${p.name}. Trong tho\u1EA1i g\u1ECDi l\xE0 "${p.shortName}".
KEY SELLING POINTS (ch\u1EC9 d\xF9ng nh\u1EEFng \xFD n\xE0y, n\xF3i b\u1EB1ng l\u1EE3i \xEDch \u0111\u1EDDi th\u01B0\u1EDDng, kh\xF4ng th\xF4ng s\u1ED1):
${p.ksps.map((k, i) => `${i + 1}. ${k}`).join("\n")}
GI\u1ECCNG: ${p.voice}. CTA m\u1EABu: ${p.cta}.
${p.fcc ? `FCC \u2014 GI\xC1 T\u1EF0 DO \u0110\u1ED2NG THU\u1EACN (\u0111\u01B0\u1EE3c nh\u1EAFc, KH\xD4NG \u0111\u01B0\u1EE3c \u0111\u1ECDc s\u1ED1): FCC l\xE0 c\xE1i gi\xE1 do ch\xEDnh C\u1ED8NG \u0110\u1ED2NG t\u1EF1 ch\u1EA5p nh\u1EADn v\u1EDBi nhau, kh\xF4ng ai \xE1p \u0111\u1EB7t; n\xF3 hi\u1EC7n ngay m\xE0n h\xECnh ch\xEDnh c\u1EE7a app, l\xE0 c\u0103n c\u1EE9 \u0111\u1EC3 Unich mua l\u1EA1i FC, v\xE0 L\xCAN XU\u1ED0NG theo c\u1ED9ng \u0111\u1ED3ng vote. N\xF3i \u0111\u01B0\u1EE3c chuy\u1EC7n "n\xF3 hi\u1EC7n ngay tr\xEAn m\xE0n h\xECnh, do m\u1ECDi ng\u01B0\u1EDDi t\u1EF1 vote" l\xE0 r\u1EA5t \u0111\xE1ng n\xF3i v\xEC ng\u01B0\u1EDDi xem t\u1EF1 ki\u1EC3m ch\u1EE9ng \u0111\u01B0\u1EE3c. NH\u01AFNG TUY\u1EC6T \u0110\u1ED0I KH\xD4NG \u0110\u1ECCC RA CON S\u1ED0: c\u1EA5m n\xF3i m\u1ED9t FC b\u1EB1ng bao nhi\xEAu \u0111\xF4, bao nhi\xEAu ngh\xECn, v\xE0 c\u1EA5m nh\xE2n l\xEAn th\xE0nh t\u1ED5ng. Mu\u1ED1n cho th\u1EA5y n\xF3 \u0111\xE1ng gi\xE1 th\xEC QUY RA TH\u1EE8 \u0110\u1EBEM \u0110\u01AF\u1EE2C ("ch\u1ED7 \u0111\u01B0\u1EE3c mua l\u1EA1i th\xE1ng r\u1ED3i b\u1EB1ng ch\u1EE5c b\xE1t ph\u1EDF ch\u1EE9 ch\u1EB3ng \xEDt", "\u0111\u1EE7 \u0111\u1ED5 x\u0103ng c\u1EA3 th\xE1ng"). C\xE1ch g\u1ECDi XOAY V\xD2NG, \u0111\u1EEBng video n\xE0o c\u0169ng \u0111\u1ECDc \u0111\u1EE7 c\xF4ng th\u1EE9c: ${oneOf(['l\u1EA7n n\xE0y g\u1ECDi \u0111\u1EE7 "gi\xE1 t\u1EF1 do \u0111\u1ED3ng thu\u1EADn, g\u1ECDi t\u1EAFt l\xE0 FCC" \u0111\xFAng m\u1ED9t l\u1EA7n r\u1ED3i th\xF4i', 'l\u1EA7n n\xE0y ch\u1EC9 n\xF3i "c\xE1i gi\xE1 c\u1ED9ng \u0111\u1ED3ng t\u1EF1 vote ra" m\xE0 KH\xD4NG c\u1EA7n nh\u1EAFc ch\u1EEF FCC', 'l\u1EA7n n\xE0y ch\u1EC9 n\xF3i g\u1ECDn "FCC" nh\u01B0 th\u1EC3 ng\u01B0\u1EDDi xem \u0111\xE3 bi\u1EBFt r\u1ED3i, kh\xF4ng gi\u1EA3i th\xEDch', "l\u1EA7n n\xE0y kh\u1ECFi nh\u1EAFc gi\xE1 lu\xF4n, k\u1EC3 chuy\u1EC7n kh\xE1c"])}. "FCC" l\xE0 ch\u1EEF vi\u1EBFt t\u1EAFt gi\u1EEF nguy\xEAn \u1EDF m\u1ECDi th\u1EE9 ti\u1EBFng, ch\u1EC9 d\u1ECBch ph\u1EA7n ngh\u0129a. TUY\u1EC6T \u0110\u1ED0I kh\xF4ng h\u1EE9a gi\xE1 s\u1EBD l\xEAn, kh\xF4ng b\u1EA3o mua v\xE0o, kh\xF4ng so s\xE1nh v\u1EDBi l\xE3i su\u1EA5t.
GI\u1EDC MUA L\u1EA0I: Unich mua l\u1EA1i FC m\u1ED7i ng\xE0y l\xFAc 10 gi\u1EDD UTC, t\u1EE9c ${(10 + p.tzOffset) % 24} gi\u1EDD gi\u1EDD \u0111\u1ECBa ph\u01B0\u01A1ng${(10 + p.tzOffset) % 24 >= 12 && (10 + p.tzOffset) % 24 < 18 ? " (chi\u1EC1u)" : ""} \u2014 d\xF9ng \u0111\u01B0\u1EE3c l\xE0m m\u1ED1c th\u1EDDi gian c\xF3 th\u1EADt cho c\xE2u m\u1EDF ("c\u1EE9 ${(10 + p.tzOffset) % 24} gi\u1EDD h\xE0ng ng\xE0y l\xE0 em l\u1EA1i m\u1EDF ra xem").
LINK M\u1EDCI: ng\u01B0\u1EDDi \u0110\u01AF\u1EE2C M\u1EDCI nh\u1EADn ${p.refInvitee} FC NGAY khi v\xE0o, KH\xD4NG ph\u1EA3i x\xE1c minh gi\u1EA5y t\u1EDD, kh\xF4ng ph\u1EA3i n\u1ED9p g\xEC c\u1EA3 \u2014 chi ti\u1EBFt n\xE0y \u0111\xE1ng n\xF3i v\xEC ng\u01B0\u1EDDi m\u1EDBi s\u1EE3 nh\u1EA5t l\xE0 ph\u1EA3i \u0111\u01B0a c\u0103n c\u01B0\u1EDBc. Ng\u01B0\u1EDDi m\u1EDDi nh\u1EADn ${p.refInviter} FC. Khi mu\u1ED1n cho ng\u01B0\u1EDDi xem h\xECnh dung ch\u1ED7 FC \u0111\xF3 \u0111\xE1ng bao nhi\xEAu th\xEC QUY RA M\u1ED8T KHO\u1EA2N CHI \u0110\u1EDCI TH\u01AF\u1EDCNG k\xE8m ch\u1EEF "n\u1EBFu" ("ch\u1EEBng \u0111\xF3 n\u1EBFu mai n\xE0y l\xEAn s\xE0n c\u0169ng \u0111\u1EE7 tr\u1EA3 ti\u1EC1n tr\u1ECD m\u1ED9t th\xE1ng"), TUY\u1EC6T \u0110\u1ED0I kh\xF4ng \u0111\u1ECDc s\u1ED1 ti\u1EC1n.` : ""}
VIDEO N\xC0Y \u0110\u0102NG CHO AI (quy\u1EBFt \u0111\u1ECBnh to\xE0n b\u1ED9 c\xE1ch vi\u1EBFt):
${AUDIENCE_RULES[audience] || AUDIENCE_RULES.ngoai}
${DOCTRINE}${p.avoidTopics ? `
C\u1EA4M NH\u1EAEC \u1EDE TH\u1ECA TR\u01AF\u1EDCNG N\xC0Y (kh\xF4ng k\u1EC3, kh\xF4ng d\u1EF1ng h\xECnh, kh\xF4ng \xE1m ch\u1EC9):
${p.avoidTopics.split("\n").filter(Boolean).map((x) => " - " + x.trim()).join("\n")}` : ""}
${SKIT_FORMULA(p, arc, variant, hookKind, hidden, ctaText, tone, situation)}
LU\u1EACT C\u1EE8NG: m\u1ED7i vai ch\u1EC9 c\u1EA7m th\u1EE9 c\u1EA3nh \u0111\xF3 c\u1EA7n (\u0111i\u1EC7n tho\u1EA1i, ho\u1EB7c \u0111\u1ED3 \u0111ang l\xE0m d\u1EDF nh\u01B0 b\xE1t c\u01A1m, m\u1EDB rau, c\xE1i k\xE9o) ghi v\xE0o "prop" k\xE8m t\xEAn vai \u2014 kh\xF4ng n\xF3n, kh\xF4ng c\u1ED1c, kh\xF4ng \u0111\u1ED3 th\u1EEBa; m\u1ECDi nh\xE2n v\u1EADt trong \u0111\u1ED9 tu\u1ED5i 25-40 (tu\u1ED5i lao \u0111\u1ED9ng), kh\xF4ng ng\u01B0\u1EDDi gi\xE0, kh\xF4ng tr\u1EBB em d\u01B0\u1EDBi b\u1EA5t k\u1EF3 h\xECnh th\u1EE9c n\xE0o; kh\xF4ng t\xEAn ng\u01B0\u1EDDi th\u1EADt, kh\xF4ng th\u01B0\u01A1ng hi\u1EC7u kh\xE1c, kh\xF4ng n\xF3i d\u1ED1i t\xEDnh n\u0103ng; CH\u1EEE TRONG H\xCCNH: ch\u1EC9 \u0111\u01B0\u1EE3c ph\xE9p \u0111\xFAng nh\u1EEFng chu\u1ED7i sau, vi\u1EBFt y nguy\xEAn t\u1EEBng ch\u1EEF c\xE1i \u2014 ${p.allowedText.split("\n").filter(Boolean).map((x) => `"${x.trim()}"`).join(", ")} \u2014 \u0111\u1EB7t v\xE0o ch\u1ED7 t\u1EF1 nhi\xEAn c\u1EE7a b\u1ED1i c\u1EA3nh (bi\u1EC3n treo tr\u01B0\u1EDBc qu\xE1n, t\u1EA5m b\u1EA3ng nh\u1ECF tr\xEAn qu\u1EA7y, logo in tr\xEAn \xE1o). Ngo\xE0i danh s\xE1ch \u0111\xF3 th\xEC KH\xD4NG ch\u1EEF n\xE0o kh\xE1c trong h\xECnh: kh\xF4ng gi\xE1 ti\u1EC1n, kh\xF4ng s\u1ED1 \u0111i\u1EC7n tho\u1EA1i, kh\xF4ng t\xEAn ri\xEAng, kh\xF4ng ch\u1EEF ch\u1EA1y, kh\xF4ng overlay, kh\xF4ng link; c\u1EA3nh "talk" 6-10 s: 3,5-5,5 \xE2m ti\u1EBFt/gi\xE2y chia c\xE2u ng\u1EAFn 8-14 \xE2m ti\u1EBFt, n\xF3i li\u1EC1n m\u1EA1ch, kh\xF4ng ngh\u1EC9 qu\xE1 1 gi\xE2y; c\u1EA3nh "action" 4-6 s: kh\xF4ng tho\u1EA1i ho\u1EB7c \u0111\xFAng M\u1ED8T c\xE2u \u2264 12 \xE2m ti\u1EBFt c\u1EE7a m\u1ED9t vai; \u1EDF m\u1ECDi c\u1EA3nh c\xF3 tho\u1EA1i, c\xE2u \u0111\u1EA7u b\u1EAFt \u0111\u1EA7u \u1EDF gi\xE2y 0.3-0.8 v\xE0 c\xE2u cu\u1ED1i k\u1EBFt th\xFAc tr\u01B0\u1EDBc khi h\u1EBFt c\u1EA3nh 0.4 s.
KHO T\xCCNH HU\u1ED0NG G\u1EE2I \xDD (\u0111\u01B0\u1EE3c ch\u1ECDn ho\u1EB7c t\u1EF1 ngh\u0129 c\xE1i kh\xE1c c\xF9ng logic "n\u01A1i \u0111\xF4ng ng\u01B0\u1EDDi ho\u1EB7c vi\u1EC7c \u0111\u1EDDi th\u01B0\u1EDDng + ai nh\xECn th\u1EA5y + m\xE0n h\xECnh ch\u1EE9ng minh"):
${p.situations.map((s) => "- " + s).join("\n")}
${formulaOnly ? "" : SKIT_FORMAT}
Ch\u1EC9 tr\u1EA3 v\u1EC1 JSON h\u1EE3p l\u1EC7, kh\xF4ng markdown, kh\xF4ng l\u1EDDi d\u1EABn.`;

  // product-factory/v44_orange/script.ts
  var generateScenarios = async (p, avoid, seed, n = 5) => {
    const usedArcs = avoid.map((x) => x.split("|")[0]).filter(Boolean);
    const arcs = pickArcs(n, usedArcs.slice(-Math.max(1, arcsFor(p).length - n)), p);
    const usedPlaces = avoid.map((x) => x.split("|")[1] || "").filter(Boolean);
    const pool = p.situations.filter((s) => !usedPlaces.some((u) => u && s.toLowerCase().includes(u.toLowerCase().split(" ")[0])));
    const sits = [];
    const src = (pool.length >= n ? pool : p.situations).slice();
    while (sits.length < n && src.length) sits.push(src.splice(Math.floor(Math.random() * src.length), 1)[0]);
    const placeOf3 = (s) => (s || "").split(/[,:]/)[0].trim();
    const arcLines = arcs.map((x, i) => `T\xECnh hu\u1ED1ng ${i + 1} PH\u1EA2I theo m\u1EA1ch "${x.label}": ${x.beats.slice(0, 260)}\u2026${sits[i] ? ` \u0110\u1EB7t \u1EDF N\u01A0I n\xE0y (ch\u1EC9 l\u1EA5y n\u01A1i ch\u1ED1n, s\u1EF1 vi\u1EC7c v\u1EABn ph\u1EA3i theo \u0111\xFAng m\u1EA1ch tr\xEAn): ${placeOf3(sits[i])}` : ""}`).join("\n");
    const prompt = `Seed ng\u1EABu nhi\xEAn: ${seed}. H\xE3y \u0111\u1EC1 xu\u1EA5t ${n} t\xECnh hu\u1ED1ng video KH\xC1C NHAU v\u1EC1 n\u01A1i ch\u1ED1n, ng\u01B0\u1EDDi k\u1EC3 v\xE0 vi\u1EC7c \u0111ang di\u1EC5n ra, m\u1ED7i t\xECnh hu\u1ED1ng theo \u0111\xFAng M\u1EA0CH \u0111\u01B0\u1EE3c giao b\xEAn d\u01B0\u1EDBi. Tr\xE1nh l\u1EB7p c\xE1c t\xECnh hu\u1ED1ng \u0111\xE3 d\xF9ng (m\u1EA1ch | n\u01A1i | c\xE2u m\u1EDF): ${avoid.length ? avoid.join(" | ") : "ch\u01B0a c\xF3"}.
${arcLines}
Tr\u1EA3 v\u1EC1 JSON: {"scenarios":[{"title":"t\xEAn ng\u1EAFn 4-7 t\u1EEB","place":"n\u01A1i c\u1EE5 th\u1EC3 (ti\u1EBFng Vi\u1EC7t)","worry":"c\xE1i khi\u1EBFn ng\u01B0\u1EDDi xem quan t\xE2m, m\u1ED9t c\xE2u (t\xF2 m\xF2, ti\u1EBFc, mu\u1ED1n th\u1EED)","event":"S\u1EF0 VI\u1EC6C hai v\u1EBF, ti\u1EBFng Vi\u1EC7t: (a) ai \u0111ang l\xE0m g\xEC, \u1EDF \u0111\xE2u, l\xFAc m\u1EA5y gi\u1EDD; (b) m\xE0n h\xECnh app ch\u1EE9ng minh \u0111i\u1EC1u g\xEC (t\u1ED1c \u0111\u1ED9 \u0111\xE0o t\u0103ng / s\u1ED1 FC h\xF4m nay / thanh to\xE1n xong / \u0111\u01B0\u1EE3c mua l\u1EA1i)","narrator":"nh\xE2n v\u1EADt ch\xEDnh: gi\u1EDBi t\xEDnh, TU\u1ED4I T\u1EEA 25 \u0110\u1EBEN 40, ngh\u1EC1, qu\u1EA7n \xE1o (ti\u1EBFng Vi\u1EC7t)","kspFocus":["2-3 KSP \u0111\u01B0\u1EE3c ch\u1EE9ng minh, vi\u1EBFt ng\u1EAFn"],"hook":"c\xE2u K\u1EBET / c\xE2u m\u1EDDi th\u1EADt th\xE0 c\u1EE7a nh\xE2n v\u1EADt ch\xEDnh, 6-12 \xE2m ti\u1EBFt (vd: G\u1EB7p nhau qu\xE9t m\xE3 l\xE0 \u0111\xE0o nhanh h\u01A1n c\xE1c b\xE1c \u1EA1)"}]}`;
    const parsed = extractJSON(await askText(prompt, productSystem(p, true)));
    const arr = Array.isArray(parsed?.scenarios) ? parsed.scenarios : [];
    return arr.slice(0, n).map((x, i) => {
      const arc = arcs[i];
      const variant = arc && arc.variants.length ? arc.variants[Math.floor(Math.random() * arc.variants.length)] : void 0;
      return { id: i + 1, title: String(x.title || `T\xECnh hu\u1ED1ng ${i + 1}`), place: String(x.place || ""), worry: String(x.worry || ""), event: String(x.event || x.worry || ""), narrator: String(x.narrator || ""), kspFocus: Array.isArray(x.kspFocus) ? x.kspFocus.map(String) : [], hook: String(x.hook || ""), arc: arc?.key, variant: variant?.key, hookKind: arc && arc.hooks.length ? pickWeighted(arc.hooks, (h) => h.w).k : void 0 };
    });
  };
  var HOST_PROPS = [
    "a chipped enamel mug of tea",
    "a small cloth being folded and refolded",
    "a bunch of keys",
    "a motorbike helmet held by the strap",
    "a folded newspaper",
    "a plastic bag of shopping",
    "a worn notebook and a pen",
    "a pair of work gloves",
    "a bottle of water with the label peeling",
    "a handful of small change being counted",
    "a cheap lighter being turned over",
    "a hand towel over one shoulder"
  ];
  var applyVoiceOver = (shots, mode = "host") => {
    const out = [];
    let nextId = 1;
    let i = 0;
    const hasVo = (sh) => sh.block !== "talk" && !!(sh.voLines && sh.voLines.length) && !(sh.lines && sh.lines.length);
    if (mode === "inline") return shots.map((sh, k) => hasVo(sh) ? { ...sh, id: k + 1, lines: (sh.voLines || []).map((l) => ({ ...l, speaker: "narrator" })), voInline: true, voLines: void 0 } : { ...sh, id: k + 1, voLines: void 0 });
    while (i < shots.length) {
      if (!hasVo(shots[i])) {
        out.push({ ...shots[i], id: nextId++, voLines: void 0 });
        i++;
        continue;
      }
      const sylOf = (g) => (g.voLines || []).reduce((u, l) => u + countSyllables(l.text), 0);
      const needFor = (sy) => Math.ceil(sy / 4.5 + 0.8);
      const group = [];
      let total = 0;
      let syl = 0;
      while (i < shots.length && hasVo(shots[i]) && total + shots[i].duration <= 10 && (!group.length || needFor(syl + sylOf(shots[i])) <= 10)) {
        group.push(shots[i]);
        total += shots[i].duration;
        syl += sylOf(shots[i]);
        i++;
      }
      const needSyl = needFor(syl);
      const dur = [4, 6, 8, 10].find((d) => d >= Math.max(total, needSyl)) || 10;
      const lines = [];
      let off = 0;
      group.forEach((g) => {
        (g.voLines || []).forEach((l) => {
          const st = Math.max(0.3, Math.min(dur - 0.8, off + l.startSec));
          lines.push({ speaker: "narrator", text: l.text, startSec: st, endSec: Math.max(st + 0.4, Math.min(dur - 0.3, off + l.endSec)) });
        });
        off += g.duration;
      });
      const host = { id: nextId++, block: "talk", duration: dur, location: group[0].location || "A", vo: true, prop: oneOf(HOST_PROPS), expression: "engaged, telling the story to the audience", camera: "static phone camera at chest height", framing: "tight medium close-up on the upper body: the head takes up roughly the top third of a vertical frame and the person fills most of its width \u2014 not a wide shot, not a full-length shot", firstFrame: "the narrator already mid-gesture, one hand raised holding the object, mouth opening to speak", action: "the narrator talks to the camera while the hands stay busy with the object the whole time: turn it over, set it down, pick it up again, point with it, wipe a hand on the shirt \u2014 the hands change what they are doing at least four times and are never left hanging at the sides", lines, ambient: "quiet room tone", showsPhone: false, roles: ["narrator"], spot: "in the middle of the place" };
      out.push(host);
      let at = 0;
      group.forEach((g, gi) => {
        const len = gi === group.length - 1 ? Math.max(3, dur - at) : Math.min(g.duration, 3);
        out.push({ ...g, id: nextId++, insert: true, overlayHost: host.id, overlayAt: at, overlayLen: len, voLines: void 0 });
        at += len;
      });
    }
    return out;
  };
  var generateScript = async (p, sc, seed, feedback = [], locked = {}, voMode = "host", narratorMode = "hidden", audience = "ngoai") => {
    const arc = arcOf(sc.arc);
    const variant = arc?.variants.find((v) => v.key === sc.variant)?.text;
    const hookKind = sc.hookKind || (arc && arc.hooks.length ? pickWeighted(arc.hooks, (h) => h.w).k : "su_viec");
    const hidden = narratorMode === "hidden" || narratorMode !== "talk" && !!arc?.hidden;
    const tone = oneOf(TONES);
    const situation = sc.place || "";
    const FEED_CTA = [
      'r\u1EE7 \u0111\xFAng M\u1ED8T vi\u1EC7c l\xE0m \u0111\u01B0\u1EE3c h\xF4m nay: k\xE9o th\xEAm m\u1ED9t ng\u01B0\u1EDDi trong nh\xE0 c\xF9ng \u0111\xE0o ("t\u1ED1i nay em b\u1EA3o b\xE0 x\xE3 c\xE0i lu\xF4n")',
      'r\u1EE7 mang m\xE3 \u0111i g\u1EB7p m\u1ED9t ng\u01B0\u1EDDi m\u1EDBi ngo\xE0i \u0111\u1EDDi ("mai em ra ch\u1EE3 qu\xE9t cho m\u1EA5y c\xF4 b\xE1n rau")',
      'r\u1EE7 k\u1EC3 l\u1EA1i chuy\u1EC7n n\xE0y cho m\u1ED9t ng\u01B0\u1EDDi ch\u01B0a bi\u1EBFt ("b\xE1c n\xE0o ch\u01B0a nghe th\xEC k\u1EC3 l\u1EA1i gi\xFAp em")',
      'r\u1EE7 th\u1EE9 B\u1EA3y m\u1EB7c \xE1o cam \u0111i ra ch\u1ED7 \u0111\xF4ng ("th\u1EE9 B\u1EA3y n\xE0y c\u1EA3 x\xF3m m\xECnh l\u1EA1i ra nh\xE9")',
      "kh\xF4ng r\u1EE7 g\xEC c\u1EA3, ch\u1EC9 khoe chuy\u1EC7n vui c\u1EE7a c\u1ED9ng \u0111\u1ED3ng r\u1ED3i d\u1EEBng"
    ];
    const cta = audience === "feed" ? { k: "feed", w: 1, text: oneOf(FEED_CTA) } : pickWeighted(CTA_KINDS, (x) => x.w);
    const ctaText = cta.text.replace(/\$\{n\}/g, String(p.refInvitee)).replace(/\$\{anchor\}/g, oneOf(VALUE_ANCHORS));
    const lockedLines = Object.values(locked).map((c) => `- ${c.role}: ${c.look}`).join("\n");
    const prompt = `Seed: ${seed}. Vi\u1EBFt k\u1ECBch b\u1EA3n K\u1ECACH NHI\u1EC0U C\u1EA2NH (4-8 c\u1EA3nh, 2 nh\xE2n v\u1EADt) cho t\xECnh hu\u1ED1ng: "${sc.title}" \u2014 n\u01A1i: ${sc.place}; \u0111i\u1EC1u khi\u1EBFn ng\u01B0\u1EDDi xem quan t\xE2m: ${sc.worry}; S\u1EF0 VI\u1EC6C (c\u1EA3nh \u0111\u1EA7u = vi\u1EC7c \u0111\u1EDDi th\u01B0\u1EDDng \u0111ang di\u1EC5n ra; c\u1EA3nh ch\u1EE9ng minh = m\xE0n h\xECnh app th\u1EADt / hai ng\u01B0\u1EDDi qu\xE9t m\xE3 c\u1EE7a nhau): ${sc.event}; ng\u01B0\u1EDDi k\u1EC3: ${sc.narrator}; KSP c\u1EA7n ch\u1EE9ng minh: ${sc.kspFocus.join("; ")}; c\xE2u ch\u1ED1t g\u1EE3i \xFD: "${sc.hook}".
${lockedLines ? `VAI \u0110\xC3 KH\xD3A (d\xF9ng NGUY\xCAN V\u0102N cho look c\u1EE7a vai \u0111\xF3, kh\xF4ng \u0111\u1ED5i ngo\u1EA1i h\xECnh, vi\u1EBFt k\u1ECBch b\u1EA3n cho \u0111\xFAng ng\u01B0\u1EDDi n\xE0y):
${lockedLines}` : ""}
${feedback.length ? "B\u1EA3n tr\u01B0\u1EDBc b\u1ECB lo\u1EA1i v\xEC: " + feedback.join("; ") + ". S\u1EEDa cho \u0111\xFAng." : ""}
Tr\u1EA3 v\u1EC1 JSON \u0111\xFAng \u0110\u1ECANH D\u1EA0NG JSON \u0111\xE3 cho trong h\u01B0\u1EDBng d\u1EABn h\u1EC7 th\u1ED1ng.`;
    const parsed = extractJSON(await askText(prompt, productSystem(p, false, arc, variant, hookKind, hidden, ctaText, tone, situation, audience), [], 15e4));
    if (!parsed || !Array.isArray(parsed.shots)) throw new Error("Gemini kh\xF4ng tr\u1EA3 JSON k\u1ECBch b\u1EA3n h\u1EE3p l\u1EC7");
    const secondRole = (Array.isArray(parsed.roles) ? parsed.roles.map((r) => String(r.role || "")).find((r) => r && r !== "narrator") : "") || "neighbor";
    const shotsRaw = parsed.shots.slice(0, 12).map((x, i) => {
      const blockRaw = String(x.block || "").toLowerCase();
      const block = blockRaw === "talk" ? "talk" : blockRaw === "action" ? "action" : Array.isArray(x.lines) && x.lines.length ? "talk" : "action";
      const dur0 = [4, 6, 8, 10].includes(Number(x.duration)) ? Number(x.duration) : block === "talk" ? 8 : 4;
      const chars = Array.isArray(x.chars) ? x.chars.map(String).filter(Boolean).slice(0, 2) : ["narrator"];
      const voLines = block === "talk" || !Array.isArray(x.vo) ? [] : x.vo.map((l) => {
        const st = Math.max(0, Math.min(dur0 - 1, Number.isFinite(Number(l.startSec)) ? Number(l.startSec) : 0.3));
        const en = Math.max(st + 0.4, Math.min(dur0 - 0.2, Number.isFinite(Number(l.endSec)) ? Number(l.endSec) : Math.max(1.5, dur0 - 0.4)));
        return { speaker: "narrator", text: String(l.text || "").trim(), startSec: st, endSec: en };
      }).filter((l) => l.text);
      const clampLine = (a, b) => {
        const st = Math.max(0.3, Math.min(dur0 - 0.8, a));
        return { st, en: Math.max(st + 0.4, Math.min(dur0 - 0.35, b)) };
      };
      const lines = !Array.isArray(x.lines) ? [] : x.lines.map((l) => {
        const c = clampLine(Number.isFinite(Number(l.startSec)) ? Number(l.startSec) : 0.6, Number.isFinite(Number(l.endSec)) ? Number(l.endSec) : Math.max(2, dur0 - 1));
        return { speaker: String(l.speaker || chars[0] || "narrator"), text: String(l.text || "").trim(), startSec: c.st, endSec: c.en };
      }).filter((l) => l.text);
      const location = String(x.location || "A").trim().toUpperCase().startsWith("B") ? "B" : "A";
      const screenRaw = String(x.screen || "").trim().toLowerCase();
      return {
        id: i + 1,
        block,
        location,
        // Đường cong chữ U (kho nongtrai n=60): giữ màn hình >= 6 giây được 105k view / bấm 1,01;
        // giữ 1-5,9 giây chỉ 8,6k / 0,79, TỆ HƠN cả không khoe màn hình. Nên cảnh có màn hình thì
        // KÉO DÀI lên 6 giây, không phải bỏ màn hình đi (bỏ đi là mất luôn bằng chứng).
        duration: block === "talk" ? [4, 6, 8, 10].find((d) => d >= Math.max(dur0, Math.ceil(lines.reduce((t, l) => t + countSyllables(l.text), 0) / 4.5 + 0.8))) || 10 : dur0,
        prop: String(x.prop || "").replace(/^(none|no|null|-|n\/a)$/i, "").trim(),
        // Mặc định cũ 'natural' sinh ra đúng kiểu mở TỆ NHẤT đo được (cười chào ống kính 10.923 view
        // so với không lộ mặt 272.641). Thiếu thì bốc từ kho theo block; cảnh 1 lọc sạch từ chỉ nụ cười.
        expression: (() => {
          const raw = String(x.expression || "").trim();
          const bank = EXPRESSIONS[i === 0 ? "hook" : block === "action" ? "action" : i % 2 ? "talkB" : "talkA"] || EXPRESSIONS.hook;
          const clean = i === 0 && /smil|grin|beam|friendly|cheer|welcom/i.test(raw) ? "" : raw;
          return clean || oneOf(bank);
        })(),
        camera: String(x.camera || ""),
        framing: String(x.framing || ""),
        firstFrame: String(x.firstFrame || ""),
        action: String(x.action || ""),
        lines,
        // 'natural ambient sound of the place' đo ra là nhóm view THẤP NHẤT (42,7) — bốc kho có tiếng rời rạc có tên.
        ambient: String(x.ambient || "").trim() || oneOf(AMBIENTS),
        showsPhone: !!x.showsPhone,
        screen: SCREEN_KEYS.includes(screenRaw) ? screenRaw : x.showsPhone ? arc ? arc.screens[0] : "dao" : void 0,
        roles: chars,
        spot: stripLoc(String(x.spot || "")),
        voLines
      };
    }).map((sh) => ({ ...sh, framing: stripLoc(sh.framing), firstFrame: stripLoc(sh.firstFrame || ""), action: stripLoc(sh.action) }));
    const worldTime = String(parsed.world?.timeOfDay || "daytime");
    const eventNight = /\bnight\b|ban đêm|\bđêm\b|nửa đêm|rạng sáng|\b(0?[1-5]|1[0-2])[:.]\d\d\s*(am|sáng)\b/i.test(worldTime + " " + sc.event);
    const shots = shotsRaw.map((sh) => ({ ...sh, timeOfDay: (sh.location || "A") === "A" && eventNight ? "night, lit by street lamps, shop lights and phone screens, dark sky" : void 0 }));
    const rawRoles = Array.isArray(parsed.roles) && parsed.roles.length ? parsed.roles : [{ role: "narrator" }];
    const roles = rawRoles.map((r, i) => {
      const role = String(r.role || (i === 0 ? "narrator" : `role${i + 1}`));
      const lk = locked[role];
      return lk ? { ...lk, persona: String(r.persona || lk.persona) } : { role, name: String(r.name || role), look: String(r.look || "a Vietnamese adult aged about 30"), persona: String(r.persona || "calm, friendly"), voice: String(r.voice || "adult, northern Vietnamese"), version: 0, saveToLibrary: role === "narrator" };
    });
    if (!roles.some((r) => r.role === "narrator")) roles.unshift({ role: "narrator", name: "Nguoi ke", look: "a man in his late thirties, short black hair, dark polo shirt", persona: "calm, friendly", voice: "male, late thirties, northern Vietnamese", version: 0, saveToLibrary: true });
    if (!roles.some((r) => r.role !== "narrator")) roles.push({ role: secondRole, name: "Hang xom", look: "a Vietnamese woman in her early thirties, hair tied back, a plain floral shirt", persona: "curious, friendly", voice: "female, forties, northern Vietnamese", version: 0, saveToLibrary: false });
    const shotsH = hidden ? shots.map((sh) => {
      const others = (sh.roles || []).filter((r) => r !== "narrator");
      const narratorOnly = (sh.lines || []).length > 0 && (sh.lines || []).every((l) => !l.speaker || l.speaker === "narrator");
      if (sh.block === "talk" && narratorOnly && !others.length) return { ...sh, block: "action", voLines: sh.lines.map((l) => ({ ...l, speaker: "narrator" })), lines: [], roles: [], framing: sh.showsPhone ? "close-up of a phone screen held in one hand, no face" : sh.framing };
      return (sh.roles || []).includes("narrator") ? { ...sh, roles: others } : sh;
    }) : shots;
    const finalShots = applyVoiceOver(shotsH, voMode);
    return {
      title: String(parsed.title || sc.title),
      ctaKind: cta.k,
      monologue: parsed.monologue ? String(parsed.monologue) : void 0,
      world: { place: stripLoc(String(parsed.world?.place || sc.place)), timeOfDay: stripLoc(worldTime), light: stripLoc(String(parsed.world?.light || "natural available light")), details: stripLoc(String(parsed.world?.details || "")), placeB: parsed.world?.placeB ? stripLoc(String(parsed.world.placeB)) : void 0, detailsB: parsed.world?.detailsB ? stripLoc(String(parsed.world.detailsB)) : void 0 },
      roles,
      shots: finalShots
    };
  };
  var generateValidScript = async (p, sc, seed, log, locked = {}, voMode = "host", narratorMode = "hidden", audience = "auto") => {
    const aud = rollAudience(audience);
    log(aud === "feed" ? "Tuy\u1EBFn: FEED c\u1ED9ng \u0111\u1ED3ng (ch\u1ED1t k\u1EBFt lu\u1EADn, \u0103n chia s\u1EBB)" : "Tuy\u1EBFn: NGO\xC0I m\u1EA1ng (ch\u1ED1t m\u1EC7nh l\u1EC7nh, \u0103n b\xECnh lu\u1EADn)");
    const arc = arcOf(sc.arc);
    const hidden = narratorMode === "hidden" || narratorMode !== "talk" && !!arc?.hidden;
    if (arc) log(`[ARC] ${arc.label}${sc.variant ? " \xB7 " + sc.variant : ""} \xB7 m\u1EDF ${sc.hookKind || "?"} \xB7 ch\u1ED1t ${arc.close}${hidden ? " \xB7 kh\xF4ng l\u1ED9 m\u1EB7t" : ""}`);
    let feedback = [];
    let best = null;
    let bestErrs = [];
    let bestAt = 0;
    for (let attempt = 0; attempt < 4; attempt++) {
      const s = await generateScript(p, sc, seed + "-" + attempt, feedback, locked, voMode, narratorMode, aud);
      const errs = validateScript(s, arc, hidden, sc.hookKind || "");
      if (!errs.length) {
        try {
          errs.push(...await validateMeaning(p, sc, s, arc));
        } catch (e) {
          log("Ki\u1EC3m tra \xFD b\u1ECB l\u1ED7i, b\u1ECF qua: " + (e?.message || e));
        }
      }
      if (!errs.length) return s;
      if (!best || errs.length < bestErrs.length) {
        best = s;
        bestErrs = errs;
        bestAt = attempt + 1;
      }
      log(`K\u1ECBch b\u1EA3n l\u1EA7n ${attempt + 1} b\u1ECB lo\u1EA1i: ${errs.join("; ")}`);
      feedback = errs;
    }
    log(`Kh\xF4ng b\u1EA3n n\xE0o s\u1EA1ch sau 4 l\u1EA7n. D\xF9ng b\u1EA3n l\u1EA7n ${bestAt} (\xEDt l\u1ED7i nh\u1EA5t, c\xF2n ${bestErrs.length} l\u1ED7i): ${bestErrs.join("; ")}`);
    return best;
  };
  var describeCast = async (base64, mimeType) => {
    const parsed = extractJSON(await askText('Describe this adult person for a video prompt. Return JSON {"look":"gender, approximate age (this person is aged 25-40), hair, exact clothes and colors, build \u2014 one sentence, English","voice":"gender, age range, northern Vietnamese"}', "You describe people in photos precisely and neutrally. JSON only.", [{ base64, mimeType }]));
    return { look: String(parsed?.look || "an adult person as shown in the character sheet"), voice: String(parsed?.voice || "adult, northern Vietnamese") };
  };

  // product-factory/v44_orange/ui.tsx
  var import_react = __toESM(__require("react"));
  var SectionLabel = ({ children }) => /* @__PURE__ */ import_react.default.createElement("div", { className: "flex items-center px-2" }, /* @__PURE__ */ import_react.default.createElement("span", { className: "text-[11px] font-medium text-[rgba(218,220,224,0.9)] tracking-[0.1px] normal-case" }, children));
  var PillButton = ({ icon, children, variant = "filled", onClick, disabled, className = "" }) => {
    const base = "flex items-center gap-[2px] justify-center h-[34px] rounded-xl font-medium tracking-[0.1px] transition-all cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed";
    const variants = {
      filled: "bg-[#969696] hover:bg-[#a6a6a6] active:bg-[#868686] text-black text-[11px] pl-[8px] pr-[24px] py-1 select-none",
      outline: "border border-[#595959] hover:bg-white/5 active:bg-white/10 backdrop-blur-[40px] text-[12px] pl-[8px] pr-[16px] py-2 text-white select-none",
      solid: "bg-white hover:bg-gray-200 active:bg-gray-300 text-black text-[12px] pl-[8px] pr-[16px] py-2 select-none"
    };
    return /* @__PURE__ */ import_react.default.createElement("button", { className: `${base} ${variants[variant]} ${className}`, onClick, disabled }, icon && /* @__PURE__ */ import_react.default.createElement("span", { className: "flex items-center justify-center w-6 h-6" }, icon), /* @__PURE__ */ import_react.default.createElement("span", null, children));
  };
  var TextInput = ({ value, onChange, placeholder, label, rows = 2 }) => /* @__PURE__ */ import_react.default.createElement("div", { className: "flex flex-col gap-1.5 w-full" }, label && /* @__PURE__ */ import_react.default.createElement("p", { className: "text-[11px] font-medium text-[rgba(255,255,255,0.35)] tracking-[0.1px] px-2" }, label), /* @__PURE__ */ import_react.default.createElement(
    "textarea",
    {
      value,
      onChange: (e) => onChange(e.target.value),
      placeholder,
      rows,
      className: "border border-[#595959] hover:border-[#7a7a7a] focus:border-[#969696] rounded-xl w-full px-3 py-2.5 resize-none bg-transparent text-[11px] font-medium text-white placeholder-[rgba(218,220,224,0.3)] tracking-[0.1px] focus:outline-none transition-colors"
    }
  ));
  var LoadingSpinner = ({ size = "24px" }) => /* @__PURE__ */ import_react.default.createElement("div", { className: "border-2 border-white/10 border-t-white rounded-full animate-spin", style: { width: size, height: size } });
  var Choice = ({ label, options, value, onPick }) => /* @__PURE__ */ import_react.default.createElement("div", { className: "flex flex-col gap-1.5" }, /* @__PURE__ */ import_react.default.createElement("p", { className: "text-[11px] font-medium text-white/35 px-2" }, label), /* @__PURE__ */ import_react.default.createElement("div", { className: "flex gap-1 bg-black/40 p-1 rounded-xl" }, options.map((o) => /* @__PURE__ */ import_react.default.createElement("button", { key: o.v, onClick: () => onPick(o.v), className: `flex-1 py-2 px-2 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all ${value === o.v ? "bg-white text-black" : "text-white/40 hover:bg-white/5"}` }, o.l))));
  var StepIndicator = ({ currentStep }) => {
    const steps = [
      { id: "product", label: "App", icon: "smartphone" },
      { id: "scenario", label: "T\xECnh hu\u1ED1ng", icon: "lightbulb" },
      { id: "render", label: "D\u1EF1ng", icon: "auto_awesome" },
      { id: "batch", label: "H\xE0ng lo\u1EA1t", icon: "stacks" }
    ];
    const currentIndex = steps.findIndex((s) => s.id === (currentStep === "lock" ? "render" : currentStep));
    return /* @__PURE__ */ import_react.default.createElement("div", { className: "w-full max-w-lg mx-auto mb-8 px-4" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "flex items-center justify-between relative" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "absolute top-1/2 left-0 w-full h-[1px] bg-white/10 -translate-y-1/2 z-0" }), steps.map((step, index) => {
      const isActive = index <= currentIndex;
      const isCurrent = index === currentIndex;
      return /* @__PURE__ */ import_react.default.createElement("div", { key: step.id, className: "relative z-10 flex flex-col items-center gap-2" }, /* @__PURE__ */ import_react.default.createElement("div", { className: `w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${isCurrent ? "bg-white text-black scale-110 shadow-[0_0_20px_rgba(255,255,255,0.4)]" : isActive ? "bg-[#595959] text-white" : "bg-[#1a1a1a] text-white/20 border border-white/5"}` }, /* @__PURE__ */ import_react.default.createElement("span", { className: "material-symbols-outlined text-[20px]" }, step.icon)), /* @__PURE__ */ import_react.default.createElement("span", { className: `text-[10px] font-bold uppercase tracking-[0.15em] ${isActive ? "text-white" : "text-white/20"}` }, step.label));
    })));
  };

  // product-factory/v44_orange/views.tsx
  var import_react2 = __toESM(__require("react"));
  var import_flow_sdk3 = __require("flow-sdk");
  var ProductForm = ({ product, screens, busy, onChange, onPickScreen, onClearScreen, onNext }) => {
    const have = SCREENS.filter((s) => screens[s.key]?.mediaId).length;
    const ready = product.ksps.length >= 2;
    return /* @__PURE__ */ import_react2.default.createElement("div", { className: "max-w-3xl mx-auto w-full flex flex-col gap-4" }, /* @__PURE__ */ import_react2.default.createElement("div", { className: "bg-[#111] border border-white/10 rounded-3xl p-5 flex flex-col gap-4" }, /* @__PURE__ */ import_react2.default.createElement(SectionLabel, null, "\u1EA2nh ch\u1EE5p m\xE0n h\xECnh app TH\u1EACT \u2014 tool kh\xF4ng bao gi\u1EDD t\u1EF1 v\u1EBD m\xE0n h\xECnh"), /* @__PURE__ */ import_react2.default.createElement("p", { className: "text-[10px] text-white/40 px-2" }, "\u0110\u01B0a \u1EA3nh ch\u1EE5p m\xE0n h\xECnh v\xE0o th\u01B0 vi\u1EC7n Flow tr\u01B0\u1EDBc, r\u1ED3i b\u1EA5m Ch\u1ECDn \u1EDF t\u1EEBng lo\u1EA1i. N\xEAn L\xC0M M\u1EDC avatar, t\xEAn v\xE0 s\u1ED1 FC trong \u1EA3nh tr\u01B0\u1EDBc khi \u0111\u01B0a v\xE0o th\u01B0 vi\u1EC7n \u2014 tool c\u0169ng b\u1EAFt AI gi\u1EEF v\u1EC7t m\u1EDD \u0111\xF3, ng\u01B0\u1EDDi xem hi\u1EC3u l\xE0 m\xECnh che th\xF4ng tin ri\xEAng. Ch\u1ECDn M\u1ED8T L\u1EA6N l\xE0 tool nh\u1EDB, l\u1EA7n sau m\u1EDF l\u1EA1i kh\xF4ng ph\u1EA3i nh\u1EADp l\u1EA1i. K\u1ECBch b\u1EA3n t\u1EF1 g\u1ECDi \u0111\xFAng lo\u1EA1i m\xE0n h\xECnh cho t\u1EEBng c\u1EA3nh."), /* @__PURE__ */ import_react2.default.createElement("div", { className: "grid grid-cols-2 md:grid-cols-3 gap-3" }, SCREENS.map((s) => /* @__PURE__ */ import_react2.default.createElement("div", { key: s.key, className: `rounded-2xl border p-2 flex flex-col gap-2 ${screens[s.key]?.mediaId ? "border-green-500/60" : "border-white/10"}` }, /* @__PURE__ */ import_react2.default.createElement("p", { className: "text-[10px] text-white/70 px-1 min-h-[28px]" }, s.label), /* @__PURE__ */ import_react2.default.createElement("div", { className: "bg-black/40 rounded-xl aspect-[9/16] max-h-[190px] flex items-center justify-center overflow-hidden" }, screens[s.key]?.base64 ? /* @__PURE__ */ import_react2.default.createElement("img", { src: `data:image/png;base64,${screens[s.key].base64}`, className: "w-full h-full object-contain" }) : /* @__PURE__ */ import_react2.default.createElement("span", { className: "text-[10px] text-white/25 px-2 text-center" }, "ch\u01B0a c\xF3")), /* @__PURE__ */ import_react2.default.createElement("div", { className: "flex gap-1" }, /* @__PURE__ */ import_react2.default.createElement(PillButton, { variant: "outline", disabled: busy, onClick: () => onPickScreen(s.key) }, screens[s.key]?.mediaId ? "\u0110\u1ED5i" : "Ch\u1ECDn"), screens[s.key]?.mediaId && /* @__PURE__ */ import_react2.default.createElement("button", { className: "text-[10px] text-white/40 underline px-1", onClick: () => onClearScreen(s.key) }, "B\u1ECF")))))), /* @__PURE__ */ import_react2.default.createElement("div", { className: "bg-[#111] border border-white/10 rounded-3xl p-5 flex flex-col gap-4" }, /* @__PURE__ */ import_react2.default.createElement(SectionLabel, null, "N\u1ED9i dung app Unich"), /* @__PURE__ */ import_react2.default.createElement("div", { className: "grid grid-cols-2 gap-3" }, /* @__PURE__ */ import_react2.default.createElement(TextInput, { label: "T\xEAn g\u1ECDi \u0111\u1EA7y \u0111\u1EE7 (ch\u1EC9 d\xF9ng trong h\u01B0\u1EDBng d\u1EABn cho Gemini)", value: product.name, onChange: (v) => onChange({ ...product, name: v, slug: slugify(v) }), rows: 1 }), /* @__PURE__ */ import_react2.default.createElement(TextInput, { label: "C\xE1ch g\u1ECDi trong tho\u1EA1i", value: product.shortName, onChange: (v) => onChange({ ...product, shortName: v }), rows: 1 })), /* @__PURE__ */ import_react2.default.createElement("div", { className: "grid grid-cols-2 gap-3" }, /* @__PURE__ */ import_react2.default.createElement(TextInput, { label: "FCC \u2014 gi\xE1 t\u1EF1 do \u0111\u1ED3ng thu\u1EADn c\u1EE7a 1 FC, t\xEDnh b\u1EB1ng \u0110\xD4 (ch\u1EC9 \u0111i\u1EC1n s\u1ED1, vd 7)", value: product.fcc, onChange: (v) => onChange({ ...product, fcc: v }), rows: 1 }), /* @__PURE__ */ import_react2.default.createElement(TextInput, { label: "T\u1EF7 gi\xE1: 1 \u0111\xF4 b\u1EB1ng bao nhi\xEAu ti\u1EC1n b\u1EA3n \u0111\u1ECBa (vd 26000)", value: product.fx, onChange: (v) => onChange({ ...product, fx: v }), rows: 1 })), /* @__PURE__ */ import_react2.default.createElement("div", { className: "grid grid-cols-2 gap-3" }, /* @__PURE__ */ import_react2.default.createElement(TextInput, { label: "Th\u1ECB tr\u01B0\u1EDDng \u0111ang nh\u1EAFm (m\xE3 ng\u1EAFn, vd vn)", value: product.market, onChange: (v) => onChange({ ...product, market: v.trim().toLowerCase() }), rows: 1 }), /* @__PURE__ */ import_react2.default.createElement(TextInput, { label: "Ch\xEAnh gi\u1EDD so v\u1EDBi UTC (Vi\u1EC7t Nam = 7)", value: String(product.tzOffset), onChange: (v) => onChange({ ...product, tzOffset: Number(v) || 0 }), rows: 1 })), /* @__PURE__ */ import_react2.default.createElement("div", { className: "grid grid-cols-2 gap-3" }, /* @__PURE__ */ import_react2.default.createElement(TextInput, { label: "Link m\u1EDDi: ng\u01B0\u1EDDi \u0110\u01AF\u1EE2C M\u1EDCI nh\u1EADn m\u1EA5y FC", value: String(product.refInvitee), onChange: (v) => onChange({ ...product, refInvitee: Number(v) || 0 }), rows: 1 }), /* @__PURE__ */ import_react2.default.createElement(TextInput, { label: "Link m\u1EDDi: ng\u01B0\u1EDDi M\u1EDCI nh\u1EADn m\u1EA5y FC", value: String(product.refInviter), onChange: (v) => onChange({ ...product, refInviter: Number(v) || 0 }), rows: 1 })), /* @__PURE__ */ import_react2.default.createElement(TextInput, { label: "Key selling points (m\u1ED7i d\xF2ng m\u1ED9t \xFD)", value: product.ksps.join("\n"), onChange: (v) => onChange({ ...product, ksps: v.split("\n").map((x) => x.trim()).filter(Boolean) }), rows: 7 }), /* @__PURE__ */ import_react2.default.createElement("div", { className: "grid grid-cols-2 gap-3" }, /* @__PURE__ */ import_react2.default.createElement(TextInput, { label: "Gi\u1ECDng / x\u01B0ng h\xF4", value: product.voice, onChange: (v) => onChange({ ...product, voice: v }), rows: 3 }), /* @__PURE__ */ import_react2.default.createElement(TextInput, { label: "C\xE2u m\u1EDDi m\u1EABu (ch\u1ED1t video)", value: product.cta, onChange: (v) => onChange({ ...product, cta: v }), rows: 3 })), /* @__PURE__ */ import_react2.default.createElement(TextInput, { label: "Ch\u1EEF \u0110\u01AF\u1EE2C PH\xC9P hi\u1EC7n trong h\xECnh (m\u1ED7i d\xF2ng m\u1ED9t chu\u1ED7i) \u2014 ngo\xE0i danh s\xE1ch n\xE0y th\xEC c\u1EA5m m\u1ECDi ch\u1EEF", value: product.allowedText, onChange: (v) => onChange({ ...product, allowedText: v }), rows: 2 }), /* @__PURE__ */ import_react2.default.createElement(TextInput, { label: "Ch\u1EE7 \u0111\u1EC1 C\u1EA4M nh\u1EAFc \u1EDF th\u1ECB tr\u01B0\u1EDDng n\xE0y (m\u1ED7i d\xF2ng m\u1ED9t \xFD)", value: product.avoidTopics, onChange: (v) => onChange({ ...product, avoidTopics: v }), rows: 3 }), /* @__PURE__ */ import_react2.default.createElement(TextInput, { label: "Kho t\xECnh hu\u1ED1ng (m\u1ED7i d\xF2ng m\u1ED9t t\xECnh hu\u1ED1ng \u2014 Gemini ch\u1ECDn ho\u1EB7c t\u1EF1 ngh\u0129 c\xE1i kh\xE1c c\xF9ng logic)", value: product.situations.join("\n"), onChange: (v) => onChange({ ...product, situations: v.split("\n").map((x) => x.trim()).filter(Boolean) }), rows: 8 }), /* @__PURE__ */ import_react2.default.createElement(PillButton, { variant: "solid", className: "w-full", disabled: !ready || busy, onClick: onNext }, ready ? `Ti\u1EBFp t\u1EE5c \u2192 Sinh t\xECnh hu\u1ED1ng (${have}/${SCREENS.length} m\xE0n h\xECnh \u0111\xE3 c\xF3${have ? "" : " \u2014 vi\u1EBFt k\u1ECBch b\u1EA3n \u0111\u01B0\u1EE3c, nh\u01B0ng d\u1EF1ng th\xEC m\xE0n h\xECnh s\u1EBD do AI v\u1EBD"})` : "C\u1EA7n \xEDt nh\u1EA5t 2 KSP")));
  };
  var ScenarioForm = ({ product, scenarios, chosen, script, settings, busy, busyLabel, lockedCast, castLibrary, preCast, onPreCastLibrary, onPreCastPick, onGenerate, onPick, onRandom, onWrite, onScript, onSettings, onBack, onNext, onLock, onBatch }) => {
    const [edit, setEdit] = (0, import_react2.useState)(false);
    const updateLine = (shotId, li, patch) => {
      if (!script) return;
      onScript({ ...script, shots: script.shots.map((sh) => sh.id === shotId ? { ...sh, lines: sh.lines.map((l, k) => k === li ? { ...l, ...patch } : l) } : sh) });
    };
    const arcUi = arcOf(chosen?.arc);
    const errs = script ? validateScript(script, arcUi, settings.narratorMode === "hidden" || settings.narratorMode !== "talk" && !!arcUi?.hidden) : [];
    return /* @__PURE__ */ import_react2.default.createElement("div", { className: "flex flex-col gap-5 max-w-3xl mx-auto w-full" }, /* @__PURE__ */ import_react2.default.createElement("div", { className: "flex items-center gap-3 flex-wrap" }, /* @__PURE__ */ import_react2.default.createElement(PillButton, { variant: "solid", disabled: busy, onClick: onGenerate }, scenarios.length ? "Sinh 5 t\xECnh hu\u1ED1ng kh\xE1c" : "Sinh 5 t\xECnh hu\u1ED1ng"), scenarios.length > 0 && /* @__PURE__ */ import_react2.default.createElement(PillButton, { variant: "filled", disabled: busy, onClick: onRandom }, "T\u1EF1 ch\u1ECDn 1 + vi\u1EBFt k\u1ECBch b\u1EA3n"), /* @__PURE__ */ import_react2.default.createElement(PillButton, { variant: "filled", disabled: busy, onClick: onBatch, className: "!bg-[#ff9a0d]" }, "\u26A1 H\xE0ng lo\u1EA1t: ", settings.batchCount, " k\u1ECBch b\u1EA3n \u2192 ", settings.batchCount, " video, kh\xF4ng duy\u1EC7t"), busy && /* @__PURE__ */ import_react2.default.createElement(import_react2.default.Fragment, null, /* @__PURE__ */ import_react2.default.createElement(LoadingSpinner, { size: "18px" }), /* @__PURE__ */ import_react2.default.createElement("span", { className: "text-[11px] text-white/50" }, busyLabel))), /* @__PURE__ */ import_react2.default.createElement("div", { className: "bg-[#111] border border-white/10 rounded-2xl p-3 flex flex-col gap-2" }, /* @__PURE__ */ import_react2.default.createElement(SectionLabel, null, "Ng\u01B0\u1EDDi k\u1EC3 c\u1EE7a t\xE0i kho\u1EA3n n\xE0y \u2014 M\u1ED6I AMBASSADOR M\u1ED8T KHU\xD4N M\u1EB6T RI\xCANG"), /* @__PURE__ */ import_react2.default.createElement("p", { className: "text-[10px] text-white/35 px-2" }, "Ch\u1ECDn m\u1ED9t ng\u01B0\u1EDDi r\u1ED3i gi\u1EEF nguy\xEAn cho m\u1ECDi video c\u1EE7a t\xE0i kho\u1EA3n \u0111\xF3. D\xF9ng chung m\u1ED9t khu\xF4n m\u1EB7t tr\xEAn nhi\u1EC1u t\xE0i kho\u1EA3n l\xE0 d\u1EA5u hi\u1EC7u v\u1EADn h\xE0nh t\u1EADp trung, Facebook c\xF3 th\u1EC3 g\u1EE1 c\u1EA3 c\u1EE5m."), /* @__PURE__ */ import_react2.default.createElement("div", { className: "flex gap-2 flex-wrap items-center" }, /* @__PURE__ */ import_react2.default.createElement(PillButton, { variant: "outline", disabled: busy, onClick: onPreCastLibrary }, "Ch\u1ECDn t\u1EEB th\u01B0 vi\u1EC7n Flow"), castLibrary.map((c, i) => /* @__PURE__ */ import_react2.default.createElement("button", { key: i, className: `text-[10px] px-2 py-1 rounded-lg border ${preCast?.sheetMediaId === c.sheetMediaId ? "border-white bg-white/10" : "border-white/20 hover:bg-white/10"}`, disabled: busy, onClick: () => onPreCastPick(c) }, c.name, " v", c.version)), preCast && /* @__PURE__ */ import_react2.default.createElement("button", { className: "text-[10px] text-white/50 underline", onClick: () => onPreCastPick(void 0) }, "B\u1ECF ch\u1ECDn")), preCast && /* @__PURE__ */ import_react2.default.createElement("div", { className: "flex gap-2 items-center" }, preCast.sheetBase64 && /* @__PURE__ */ import_react2.default.createElement("img", { src: `data:image/png;base64,${preCast.sheetBase64}`, className: "h-[60px] rounded-lg border border-white/10" }), /* @__PURE__ */ import_react2.default.createElement("p", { className: "text-[11px] text-orange-300" }, "Ng\u01B0\u1EDDi k\u1EC3: ", preCast.name, " \u2014 ", preCast.look)), !preCast && lockedCast && /* @__PURE__ */ import_react2.default.createElement("p", { className: "text-[11px] text-orange-300" }, "Nh\xE2n v\u1EADt \u0111\xE3 kh\xF3a: ", lockedCast.name, " \u2014 ", lockedCast.look)), scenarios.length > 0 && /* @__PURE__ */ import_react2.default.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3" }, scenarios.map((s) => /* @__PURE__ */ import_react2.default.createElement("button", { key: s.id, onClick: () => onPick(s), className: `text-left bg-[#111] border rounded-2xl p-4 flex flex-col gap-1 transition-all ${chosen?.id === s.id ? "border-white" : "border-white/10 hover:border-white/30"}` }, /* @__PURE__ */ import_react2.default.createElement("p", { className: "text-white font-bold text-[12px]" }, s.id, ". ", s.title, s.arc ? /* @__PURE__ */ import_react2.default.createElement("span", { className: "text-[#ff9a0d] font-normal" }, " \xB7 ", s.arc, s.variant ? " / " + s.variant : "", " \xB7 m\u1EDF ", s.hookKind) : null), /* @__PURE__ */ import_react2.default.createElement("p", { className: "text-[11px] text-white/60" }, "\u{1F4CD} ", s.place), /* @__PURE__ */ import_react2.default.createElement("p", { className: "text-[11px] text-white/60" }, "\u{1F61F} ", s.worry), /* @__PURE__ */ import_react2.default.createElement("p", { className: "text-[11px] text-white/60" }, "\u{1F3A5} ", s.event), /* @__PURE__ */ import_react2.default.createElement("p", { className: "text-[11px] text-white/60" }, "\u{1F3A4} ", s.narrator), /* @__PURE__ */ import_react2.default.createElement("p", { className: "text-[11px] text-white/40" }, "KSP: ", s.kspFocus.join(" \xB7 ")), /* @__PURE__ */ import_react2.default.createElement("p", { className: "text-[11px] text-orange-300" }, "\u201C", s.hook, "\u201D")))), chosen && /* @__PURE__ */ import_react2.default.createElement("div", { className: "flex items-center gap-3" }, /* @__PURE__ */ import_react2.default.createElement(PillButton, { variant: "filled", disabled: busy, onClick: onWrite }, script ? "K\u1EC3 l\u1EA1i c\xE1ch kh\xE1c (c\xF9ng t\xECnh hu\u1ED1ng)" : "Vi\u1EBFt k\u1ECBch b\u1EA3n")), script && /* @__PURE__ */ import_react2.default.createElement("div", { className: "bg-[#111] border border-white/10 rounded-2xl p-4 flex flex-col gap-3" }, /* @__PURE__ */ import_react2.default.createElement("div", { className: "flex items-center justify-between" }, /* @__PURE__ */ import_react2.default.createElement(SectionLabel, null, script.title, " \xB7 ", script.shots.length, " c\u1EA3nh, ", script.roles.length, " nh\xE2n v\u1EADt", script.monologue ? ` \xB7 ${countSyllables(script.monologue)} \xE2m ti\u1EBFt` : ""), /* @__PURE__ */ import_react2.default.createElement("button", { className: "text-[11px] text-white/40 underline", onClick: () => setEdit((v) => !v) }, edit ? "\u1EA8n s\u1EEDa" : "S\u1EEDa tho\u1EA1i / m\u1ED1c gi\xE2y")), script.monologue && /* @__PURE__ */ import_react2.default.createElement("p", { className: "text-[11px] text-orange-100 leading-relaxed border-l-2 border-orange-400 pl-2" }, "\u{1F5E3} ", script.monologue), /* @__PURE__ */ import_react2.default.createElement("p", { className: "text-[11px] text-white/60 leading-relaxed" }, script.world.place, " \xB7 ", script.world.timeOfDay, " \xB7 ", script.world.light, ". Chi ti\u1EBFt: ", script.world.details, ".", /* @__PURE__ */ import_react2.default.createElement("br", null), script.roles.map((r) => `${r.role}: ${r.name} \u2014 ${r.look}`).join(" | ")), /* @__PURE__ */ import_react2.default.createElement("ol", { className: "flex flex-col gap-2" }, script.shots.map((sh) => /* @__PURE__ */ import_react2.default.createElement("li", { key: sh.id, className: "text-[11px] text-white/70 border-l-2 border-[#ff9a0d] pl-3" }, /* @__PURE__ */ import_react2.default.createElement("b", { className: "text-white" }, "C\u1EA3nh ", sh.id, " \xB7 ", sh.block, sh.vo ? " (l\u1EDDi d\u1EABn)" : sh.insert ? ` (\u0111\xE8 l\xEAn ${sh.overlayHost})` : "", " \xB7 ", sh.duration, "s", sh.location ? " \xB7 " + sh.location : ""), " \xB7 ", sh.framing, ", ", sh.camera, " \u2014 ", sh.action, /* @__PURE__ */ import_react2.default.createElement("span", { className: "block text-white/40" }, "\u{1F3AD} ", sh.expression, sh.prop ? " \xB7 \u{1F9F0} " + sh.prop : "", " \xB7 \u{1F464} ", (sh.roles || []).join(", "), sh.showsPhone ? " \xB7 \u{1F4F1} m\xE0n h\xECnh: " + screenLabel(sh.screen) : ""), sh.lines.map((l, li) => edit ? /* @__PURE__ */ import_react2.default.createElement("div", { key: li, className: "grid grid-cols-[1fr_70px_70px] gap-1 mt-1" }, /* @__PURE__ */ import_react2.default.createElement("input", { className: "bg-black/40 border border-white/10 rounded px-2 py-1 text-white text-[11px]", value: l.text, onChange: (e) => updateLine(sh.id, li, { text: e.target.value }) }), /* @__PURE__ */ import_react2.default.createElement("input", { className: "bg-black/40 border border-white/10 rounded px-2 py-1 text-white text-[11px]", type: "number", step: "0.5", value: l.startSec, onChange: (e) => updateLine(sh.id, li, { startSec: Number(e.target.value) }) }), /* @__PURE__ */ import_react2.default.createElement("input", { className: "bg-black/40 border border-white/10 rounded px-2 py-1 text-white text-[11px]", type: "number", step: "0.5", value: l.endSec, onChange: (e) => updateLine(sh.id, li, { endSec: Number(e.target.value) }) })) : /* @__PURE__ */ import_react2.default.createElement("span", { key: li, className: "block text-orange-200 pl-2" }, "[", l.startSec, "-", l.endSec, "s] ", l.speaker && l.speaker !== "narrator" ? l.speaker + ": " : "", "\u201C", l.text, "\u201D ", /* @__PURE__ */ import_react2.default.createElement("span", { className: "text-white/30" }, "(", countSyllables(l.text), " \xE2m ti\u1EBFt)")))))), errs.length > 0 && /* @__PURE__ */ import_react2.default.createElement("p", { className: "text-[11px] text-red-300" }, "C\u1EA3nh b\xE1o: ", errs.join("; "))), /* @__PURE__ */ import_react2.default.createElement("div", { className: "bg-[#111] border border-white/10 rounded-2xl p-3 grid grid-cols-2 gap-3" }, /* @__PURE__ */ import_react2.default.createElement(Choice, { label: "\u0110\u1ED9 ph\xE2n gi\u1EA3i", options: [{ v: "360p", l: "360p nh\xE1p" }, { v: "720p", l: "720p" }], value: settings.resolution, onPick: (v) => onSettings({ ...settings, resolution: v }) }), /* @__PURE__ */ import_react2.default.createElement(Choice, { label: "\xC2m thanh", options: [{ v: "native", l: "Omni n\xF3i tho\u1EA1i" }, { v: "silent", l: "C\xE2m (ch\u1EC9 ph\u1EE5 \u0111\u1EC1)" }], value: settings.audioMode, onPick: (v) => onSettings({ ...settings, audioMode: v }) }), /* @__PURE__ */ import_react2.default.createElement(Choice, { label: "Ph\u1EE5 \u0111\u1EC1", options: [{ v: "on", l: "C\xF3" }, { v: "off", l: "Kh\xF4ng" }], value: settings.subtitles ? "on" : "off", onPick: (v) => onSettings({ ...settings, subtitles: v === "on" }) }), /* @__PURE__ */ import_react2.default.createElement(Choice, { label: "Clip ch\u1EA1y c\xF9ng l\xFAc", options: [{ v: "1", l: "1" }, { v: "2", l: "2" }, { v: "3", l: "3" }], value: String(settings.parallel), onPick: (v) => onSettings({ ...settings, parallel: Number(v) }) }), /* @__PURE__ */ import_react2.default.createElement(Choice, { label: "Ch\u1EBF \u0111\u1ED9", options: [{ v: "fast", l: "Nh\xE1p nhanh (b\u1ECF QC)" }, { v: "full", l: "Chu\u1EA9n (QC + s\u1EEDa)" }], value: settings.fast ? "fast" : "full", onPick: (v) => onSettings({ ...settings, fast: v === "fast" }) }), /* @__PURE__ */ import_react2.default.createElement(Choice, { label: "H\xE0ng lo\u1EA1t: clip c\xF9ng l\xFAc", options: [{ v: "2", l: "2" }, { v: "3", l: "3" }, { v: "5", l: "5" }], value: String(settings.batchParallel), onPick: (v) => onSettings({ ...settings, batchParallel: Number(v) }) }), /* @__PURE__ */ import_react2.default.createElement(Choice, { label: "H\xE0ng lo\u1EA1t: s\u1ED1 video m\u1ED7i \u0111\u1EE3t", options: [{ v: "1", l: "1" }, { v: "2", l: "2" }, { v: "3", l: "3" }], value: String(settings.batchCount), onPick: (v) => onSettings({ ...settings, batchCount: Number(v) }) }), /* @__PURE__ */ import_react2.default.createElement(Choice, { label: "L\u1EDDi d\u1EABn", options: [{ v: "host", l: "Clip ri\xEAng (an to\xE0n)" }, { v: "inline", l: "Thu th\u1EB3ng v\xE0o c\u1EA3nh (nhanh, th\u1EED)" }], value: settings.voMode, onPick: (v) => onSettings({ ...settings, voMode: v }) }), /* @__PURE__ */ import_react2.default.createElement(Choice, { label: "\u0110\u0103ng cho ai (t\u1EF1 chia: 80% ngo\xE0i / 20% feed)", options: [{ v: "auto", l: "T\u1EF1 chia 80/20" }, { v: "ngoai", l: "Ng\u01B0\u1EDDi l\u1EA1 ngo\xE0i m\u1EA1ng" }, { v: "feed", l: "Feed c\u1ED9ng \u0111\u1ED3ng" }], value: settings.audience, onPick: (v) => onSettings({ ...settings, audience: v }) }), /* @__PURE__ */ import_react2.default.createElement(Choice, { label: "Ng\u01B0\u1EDDi k\u1EC3 (60 reel: kh\xF4ng l\u1ED9 m\u1EB7t th\u1EAFng)", options: [{ v: "hidden", l: "Kh\xF4ng l\u1ED9 m\u1EB7t" }, { v: "close", l: "Theo m\u1EA1ch" }, { v: "talk", l: "L\xEAn h\xECnh" }], value: settings.narratorMode, onPick: (v) => onSettings({ ...settings, narratorMode: v }) })), /* @__PURE__ */ import_react2.default.createElement("div", { className: "flex gap-3" }, /* @__PURE__ */ import_react2.default.createElement(PillButton, { variant: "outline", onClick: onBack }, "\u2190 S\u1EA3n ph\u1EA9m"), /* @__PURE__ */ import_react2.default.createElement(PillButton, { variant: "solid", className: "flex-1", disabled: !script || busy, onClick: onNext }, script ? "\u25B6 D\u1EF1ng ngay: t\u1EF1 v\u1EBD s\u1EA3n ph\u1EA9m / nh\xE2n v\u1EADt / app r\u1ED3i d\u1EF1ng c\xE1c clip" : "Vi\u1EBFt k\u1ECBch b\u1EA3n tr\u01B0\u1EDBc"), /* @__PURE__ */ import_react2.default.createElement(PillButton, { variant: "outline", disabled: !script || busy, onClick: onLock }, "Kh\xF3a th\u1EE7 c\xF4ng")));
  };
  var roleLabel = (r) => r === "narrator" ? "Ng\u01B0\u1EDDi k\u1EC3" : r === "neighbor" ? "H\xE0ng x\xF3m" : r === "shopkeeper" ? "Ch\u1EE7 qu\xE1n" : r === "spouse" ? "V\u1EE3 / ch\u1ED3ng" : r === "colleague" ? "\u0110\u1ED3ng nghi\u1EC7p" : r === "newcomer" ? "Ng\u01B0\u1EDDi m\u1EDBi" : r === "friend" ? "B\u1EA1n" : r;
  var LockCard = ({ title, note, base64, version, approved, busy, onApprove, onRegen, onLibrary, extra, wide }) => /* @__PURE__ */ import_react2.default.createElement("div", { className: `bg-[#111] border rounded-2xl p-4 flex flex-col gap-3 ${approved ? "border-green-500/60" : "border-white/10"}` }, /* @__PURE__ */ import_react2.default.createElement("div", { className: "flex items-center justify-between" }, /* @__PURE__ */ import_react2.default.createElement(SectionLabel, null, title), /* @__PURE__ */ import_react2.default.createElement("span", { className: "text-[10px] text-white/40" }, "v", version, approved ? " \xB7 \u0110\xC3 DUY\u1EC6T" : "")), /* @__PURE__ */ import_react2.default.createElement("div", { className: `bg-black/40 rounded-xl overflow-hidden flex items-center justify-center ${wide ? "aspect-[16/9]" : "aspect-[9/16] max-h-[360px]"}` }, base64 ? /* @__PURE__ */ import_react2.default.createElement("img", { src: `data:image/png;base64,${base64}`, className: "w-full h-full object-contain" }) : busy ? /* @__PURE__ */ import_react2.default.createElement(LoadingSpinner, null) : /* @__PURE__ */ import_react2.default.createElement("span", { className: "text-[11px] text-white/30 px-4 text-center" }, note)), extra, /* @__PURE__ */ import_react2.default.createElement("div", { className: "flex gap-2 flex-wrap" }, /* @__PURE__ */ import_react2.default.createElement(PillButton, { variant: "solid", disabled: !base64 || busy, onClick: onApprove }, approved ? "B\u1ECF duy\u1EC7t" : "Duy\u1EC7t"), /* @__PURE__ */ import_react2.default.createElement(PillButton, { variant: "outline", disabled: busy, onClick: onRegen }, base64 ? "T\u1EA1o l\u1EA1i" : "T\u1EA1o"), /* @__PURE__ */ import_react2.default.createElement(PillButton, { variant: "outline", disabled: busy, onClick: onLibrary }, "Ch\u1ECDn t\u1EEB th\u01B0 vi\u1EC7n Flow")));
  var LockView = ({ script, screens, approvals, castLibrary, fontName, busy, busyLabel, log, onApproveRole, onRegenAll, onRegenCast, onLibraryCast, onUseCast, onSaveToggle, onPickScreen, onFont, onBack, onStart }) => {
    const fontRef = (0, import_react2.useRef)(null);
    const rolesOk = script.roles.every((r) => approvals.roles[r.role]);
    const needScreens = Array.from(new Set(script.shots.filter((sh) => sh.showsPhone).map((sh) => String(sh.screen || "dao"))));
    const missing = needScreens.filter((k) => !screens[k]?.mediaId);
    const ready = rolesOk && !missing.length;
    return /* @__PURE__ */ import_react2.default.createElement("div", { className: "flex flex-col gap-5 max-w-5xl mx-auto w-full" }, /* @__PURE__ */ import_react2.default.createElement("div", { className: "flex items-center justify-between gap-3 flex-wrap" }, /* @__PURE__ */ import_react2.default.createElement("div", null, /* @__PURE__ */ import_react2.default.createElement("h2", { className: "text-white font-bold text-lg" }, "Kh\xF3a tr\u01B0\u1EDBc khi d\u1EF1ng"), /* @__PURE__ */ import_react2.default.createElement("p", { className: "text-[11px] text-white/40" }, busy ? busyLabel : "Duy\u1EC7t b\u1EA3ng nh\xE2n v\u1EADt. M\xE0n h\xECnh app d\xF9ng \u1EA3nh ch\u1EE5p TH\u1EACT, kh\xF4ng bao gi\u1EDD v\u1EBD.")), /* @__PURE__ */ import_react2.default.createElement("div", { className: "flex gap-2" }, /* @__PURE__ */ import_react2.default.createElement(PillButton, { variant: "outline", onClick: onBack }, "\u2190 K\u1ECBch b\u1EA3n"), /* @__PURE__ */ import_react2.default.createElement(PillButton, { variant: "filled", disabled: busy, onClick: onRegenAll }, "T\u1EA1o c\xE1c b\u1EA3ng nh\xE2n v\u1EADt c\xF2n thi\u1EBFu"), /* @__PURE__ */ import_react2.default.createElement(PillButton, { variant: "solid", disabled: !ready || busy, onClick: onStart }, "D\u1EF1ng c\xE1c c\u1EA3nh"))), /* @__PURE__ */ import_react2.default.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4" }, script.roles.map((c) => /* @__PURE__ */ import_react2.default.createElement(
      LockCard,
      {
        key: c.role,
        title: `Nh\xE2n v\u1EADt \xB7 ${roleLabel(c.role)}: ${c.name}`,
        note: "B\u1EA5m T\u1EA1o: b\u1EA3ng nh\xE2n v\u1EADt 2 g\xF3c tr\xEAn n\u1EC1n x\xE1m theo m\xF4 t\u1EA3 trong k\u1ECBch b\u1EA3n. Ho\u1EB7c ch\u1ECDn ng\u01B0\u1EDDi \u0111\xE3 c\xF3 trong kho.",
        base64: c.sheetBase64,
        version: c.version,
        approved: !!approvals.roles[c.role],
        busy,
        onApprove: () => onApproveRole(c.role),
        onRegen: () => onRegenCast(c.role),
        onLibrary: () => onLibraryCast(c.role),
        wide: true,
        extra: /* @__PURE__ */ import_react2.default.createElement("div", { className: "flex flex-col gap-1" }, /* @__PURE__ */ import_react2.default.createElement("p", { className: "text-[10px] text-white/40" }, c.look), /* @__PURE__ */ import_react2.default.createElement("label", { className: "text-[10px] text-white/60 flex items-center gap-1" }, /* @__PURE__ */ import_react2.default.createElement("input", { type: "checkbox", checked: !!c.saveToLibrary, onChange: () => onSaveToggle(c.role) }), " l\u01B0u v\xE0o kho (PVF_Cast_", slugify(c.name), "_v", c.version + 1, ".png)"), castLibrary.length > 0 && /* @__PURE__ */ import_react2.default.createElement("div", { className: "flex gap-1 flex-wrap" }, castLibrary.map((l, i) => /* @__PURE__ */ import_react2.default.createElement("button", { key: i, className: "text-[10px] px-2 py-1 rounded-lg border border-white/20 hover:bg-white/10", disabled: busy, onClick: () => onUseCast(c.role, l) }, "D\xF9ng ", l.name, " v", l.version))))
      }
    ))), /* @__PURE__ */ import_react2.default.createElement("div", { className: "bg-[#111] border border-white/10 rounded-2xl p-4 flex flex-col gap-3" }, /* @__PURE__ */ import_react2.default.createElement(SectionLabel, null, "M\xE0n h\xECnh app k\u1ECBch b\u1EA3n n\xE0y c\u1EA7n", missing.length ? " \u2014 C\xD2N THI\u1EBEU, b\u1EA5m Ch\u1ECDn \u0111\u1EC3 l\u1EA5y \u1EA3nh th\u1EADt t\u1EEB th\u01B0 vi\u1EC7n Flow" : " \u2014 \u0111\u1EE7 r\u1ED3i"), /* @__PURE__ */ import_react2.default.createElement("div", { className: "flex gap-3 flex-wrap" }, needScreens.map((k) => /* @__PURE__ */ import_react2.default.createElement("div", { key: k, className: `rounded-xl border p-2 flex flex-col items-center gap-2 w-[150px] ${screens[k]?.mediaId ? "border-green-500/60" : "border-red-500/50"}` }, /* @__PURE__ */ import_react2.default.createElement("p", { className: "text-[10px] text-white/70 text-center min-h-[26px]" }, screenLabel(k)), /* @__PURE__ */ import_react2.default.createElement("div", { className: "bg-black/40 rounded-lg w-full aspect-[9/16] max-h-[170px] flex items-center justify-center overflow-hidden" }, screens[k]?.base64 ? /* @__PURE__ */ import_react2.default.createElement("img", { src: `data:image/png;base64,${screens[k].base64}`, className: "w-full h-full object-contain" }) : /* @__PURE__ */ import_react2.default.createElement("span", { className: "text-[10px] text-red-300" }, "ch\u01B0a c\xF3")), /* @__PURE__ */ import_react2.default.createElement(PillButton, { variant: "outline", disabled: busy, onClick: () => {
      onPickScreen(k);
    } }, screens[k]?.mediaId ? "\u0110\u1ED5i" : "Ch\u1ECDn"))), !needScreens.length && /* @__PURE__ */ import_react2.default.createElement("p", { className: "text-[11px] text-white/40" }, "K\u1ECBch b\u1EA3n n\xE0y kh\xF4ng c\xF3 c\u1EA3nh n\xE0o nh\xECn m\xE0n h\xECnh."))), /* @__PURE__ */ import_react2.default.createElement("div", { className: "bg-[#111] border border-white/10 rounded-2xl p-3 flex items-center gap-3 flex-wrap" }, /* @__PURE__ */ import_react2.default.createElement(SectionLabel, null, "Font ph\u1EE5 \u0111\u1EC1 (.ttf c\xF3 ti\u1EBFng Vi\u1EC7t, v\xED d\u1EE5 Arial Bold / Be Vietnam Pro)"), /* @__PURE__ */ import_react2.default.createElement("input", { ref: fontRef, type: "file", accept: ".ttf,.otf,font/ttf", hidden: true, onChange: (e) => {
      const f = e.target.files?.[0];
      if (f) onFont(f);
      e.target.value = "";
    } }), /* @__PURE__ */ import_react2.default.createElement(PillButton, { variant: "outline", onClick: () => fontRef.current?.click() }, fontName ? `\u0110\xE3 n\u1EA1p: ${fontName}` : "T\u1EA3i font t\u1EEB m\xE1y"), /* @__PURE__ */ import_react2.default.createElement("span", { className: "text-[10px] text-white/40" }, "Kh\xF4ng t\u1EA3i th\xEC tool th\u1EED t\u1EA3i t\u1EEB m\u1EA1ng; kh\xF4ng \u0111\u01B0\u1EE3c th\xEC gh\xE9p kh\xF4ng ph\u1EE5 \u0111\u1EC1.")), log.length > 0 && /* @__PURE__ */ import_react2.default.createElement("pre", { className: "text-[10px] text-white/40 whitespace-pre-wrap bg-black/40 p-2 rounded-lg max-h-[140px] overflow-auto" }, log.slice(-20).join("\n")));
  };
  var taiLog = (log) => {
    const b = new TextEncoder().encode(log.join("\n"));
    let s = "";
    for (let i = 0; i < b.length; i++) s += String.fromCharCode(b[i]);
    try {
      import_flow_sdk3.Flow.download({ base64: btoa(s), mimeType: "text/plain", filename: `PVF_log_${(/* @__PURE__ */ new Date()).toISOString().slice(0, 19).replace(/[:T]/g, "")}.txt` });
    } catch (e) {
      console.error("[LOG] t\u1EA3i l\u1ED7i", e);
    }
  };
  var useBlobUrl = (base64) => {
    const [url, setUrl] = (0, import_react2.useState)();
    (0, import_react2.useEffect)(() => {
      if (!base64) {
        setUrl(void 0);
        return;
      }
      const bytes = Uint8Array.from(atob(base64), (c) => c.charCodeAt(0));
      const u = URL.createObjectURL(new Blob([bytes], { type: "video/mp4" }));
      setUrl(u);
      return () => URL.revokeObjectURL(u);
    }, [base64]);
    return url;
  };
  var ShotCard = ({ item, shot, busy, onRetry, onStop }) => {
    const url = useBlobUrl(item.compositeBase64 || item.base64);
    const [showPrompt, setShowPrompt] = (0, import_react2.useState)(false);
    const minutes = item.startTime ? Math.floor((Date.now() - item.startTime) / 6e4) : 0;
    const working = item.status === "keyframe" || item.status === "qc" || item.status === "generating" || item.status === "pending";
    return /* @__PURE__ */ import_react2.default.createElement("div", { className: "bg-[#111] border border-white/10 rounded-2xl overflow-hidden flex flex-col" }, /* @__PURE__ */ import_react2.default.createElement("div", { className: "relative bg-black aspect-[9/16] max-h-[420px] flex items-center justify-center" }, item.status === "completed" && url && /* @__PURE__ */ import_react2.default.createElement("video", { src: url, controls: true, playsInline: true, loop: true, preload: "metadata", className: "w-full h-full object-contain" }), working && /* @__PURE__ */ import_react2.default.createElement("div", { className: "flex flex-col items-center gap-3 text-center px-4" }, item.keyframeBase64 && /* @__PURE__ */ import_react2.default.createElement("img", { src: `data:image/png;base64,${item.keyframeBase64}`, className: "w-28 rounded-lg opacity-80" }), /* @__PURE__ */ import_react2.default.createElement(LoadingSpinner, null), /* @__PURE__ */ import_react2.default.createElement("p", { className: "text-[10px] uppercase tracking-widest text-white/50" }, item.status === "pending" ? item.keyframeMediaId ? "Keyframe xong \xB7 ch\u1EDD d\u1EF1ng clip" : "\u0110ang x\u1EBFp h\xE0ng\u2026" : item.status === "keyframe" ? "\u0110ang t\u1EA1o keyframe\u2026" : item.status === "qc" ? "\u0110ang QC keyframe\u2026" : item.retryCount > 0 ? `B\u1ECB t\u1EEB ch\u1ED1i \u2014 th\u1EED l\u1EA1i ${item.retryCount}/${MAX_RETRIES}\u2026` : "\u0110ang d\u1EF1ng clip\u2026"), item.startTime && /* @__PURE__ */ import_react2.default.createElement("p", { className: "text-[10px] text-white/30" }, "\u0110\xE3 tr\xF4i qua ", minutes, " ph\xFAt"), item.status !== "pending" && /* @__PURE__ */ import_react2.default.createElement("button", { className: "text-[10px] text-red-400 underline", onClick: onStop }, "D\u1EEBng th\u1EED l\u1EA1i")), item.status === "failed" && /* @__PURE__ */ import_react2.default.createElement("div", { className: "flex flex-col items-center gap-2 text-center px-4" }, /* @__PURE__ */ import_react2.default.createElement("span", { className: "material-symbols-outlined text-red-400 text-[36px]" }, "error"), /* @__PURE__ */ import_react2.default.createElement("pre", { className: "text-[10px] text-red-300/80 whitespace-pre-wrap max-h-[120px] overflow-auto text-left" }, item.error))), /* @__PURE__ */ import_react2.default.createElement("div", { className: "p-3 flex flex-col gap-2" }, /* @__PURE__ */ import_react2.default.createElement("p", { className: "text-white text-[12px] font-bold" }, item.shotId === -1 ? "Video gh\xE9p" : `Kh\u1ED1i ${item.shotId}${shot ? " \xB7 " + shot.block : ""}${item.compositeBase64 ? " (l\u1EDDi d\u1EABn \xB7 \u0110\xC3 \u0110\xC8 H\xCCNH \u2014 \u0111o\u1EA1n ho\xE0n ch\u1EC9nh)" : shot?.vo ? " (l\u1EDDi d\u1EABn)" : shot?.insert ? ` (\u0111\xE8 l\xEAn clip ${shot.overlayHost})` : ""}`), item.qcNote && /* @__PURE__ */ import_react2.default.createElement("p", { className: "text-[10px] text-white/50" }, "QC: ", item.qcNote), item.audioInfo && /* @__PURE__ */ import_react2.default.createElement("p", { className: `text-[10px] ${item.hasAudio ? "text-green-300" : "text-yellow-300"}` }, item.audioInfo), shot && shot.lines.length > 0 && /* @__PURE__ */ import_react2.default.createElement("p", { className: "text-[10px] text-white/50" }, shot.lines.map((l) => `\u201C${l.text}\u201D`).join(" ")), item.status === "completed" && /* @__PURE__ */ import_react2.default.createElement("div", { className: "flex gap-2" }, /* @__PURE__ */ import_react2.default.createElement(PillButton, { variant: "outline", className: "flex-1", onClick: () => (item.compositeBase64 || item.base64) && import_flow_sdk3.Flow.download({ base64: item.compositeBase64 || item.base64, mimeType: "video/mp4", filename: item.shotId === -1 ? "product_video_30s.mp4" : item.compositeBase64 ? `segment${item.shotId}.mp4` : `shot${item.shotId}.mp4` }) }, "T\u1EA3i v\u1EC1"), item.finalPrompt && /* @__PURE__ */ import_react2.default.createElement(PillButton, { variant: "outline", onClick: () => setShowPrompt((v) => !v) }, "Prompt"), item.shotId !== -1 && /* @__PURE__ */ import_react2.default.createElement(PillButton, { variant: "outline", disabled: busy, onClick: onRetry }, "D\u1EF1ng l\u1EA1i")), item.status === "failed" && /* @__PURE__ */ import_react2.default.createElement(PillButton, { variant: "outline", disabled: busy, onClick: onRetry }, "Th\u1EED l\u1EA1i kh\u1ED1i n\xE0y"), showPrompt && /* @__PURE__ */ import_react2.default.createElement("pre", { className: "text-[10px] text-white/60 whitespace-pre-wrap max-h-[220px] overflow-auto bg-black/40 p-2 rounded-lg" }, item.finalPrompt)));
  };
  var ProcessingView = ({ items, script, screens, settings, busy, busyLabel, log, onRetry, onStop, onMerge, onSilent, onBack, onNew, onResume }) => {
    const merged = items.find((i) => i.shotId === -1);
    const shotsDone = items.filter((i) => i.shotId !== -1 && i.status === "completed");
    const done = script.shots.every((sh) => items.find((i) => i.shotId === sh.id && i.status === "completed" && i.base64));
    const silentCount = shotsDone.filter((i) => !i.hasAudio).length;
    const suggestSilent = settings.audioMode === "native" && shotsDone.length > 0 && silentCount > 0;
    return /* @__PURE__ */ import_react2.default.createElement("div", { className: "flex flex-col gap-5 max-w-5xl mx-auto w-full" }, /* @__PURE__ */ import_react2.default.createElement("div", { className: "flex items-center justify-between gap-3 flex-wrap" }, /* @__PURE__ */ import_react2.default.createElement("div", null, /* @__PURE__ */ import_react2.default.createElement("h2", { className: "text-white font-bold text-lg" }, script.title), /* @__PURE__ */ import_react2.default.createElement("p", { className: "text-[11px] text-white/40" }, busy ? busyLabel : "S\u1EB5n s\xE0ng", " \xB7 ", shotsDone.length, "/", script.shots.length, " kh\u1ED1i xong")), /* @__PURE__ */ import_react2.default.createElement("div", { className: "flex gap-2" }, !done && !busy && /* @__PURE__ */ import_react2.default.createElement(PillButton, { variant: "filled", onClick: onResume }, "Ti\u1EBFp t\u1EE5c d\u1EF1ng (ch\u1EC9 ph\u1EA7n thi\u1EBFu)"), /* @__PURE__ */ import_react2.default.createElement(PillButton, { variant: "solid", disabled: !shotsDone.length || busy, onClick: onMerge }, done ? "Gh\xE9p video + ti\u1EBFng + ph\u1EE5 \u0111\u1EC1" : `Gh\xE9p t\u1EA1m (${shotsDone.length}/${script.shots.length} clip)`), /* @__PURE__ */ import_react2.default.createElement(PillButton, { variant: "outline", onClick: onBack }, "\u2190 \u1EA2nh kh\xF3a (s\u1EEDa tay)"), /* @__PURE__ */ import_react2.default.createElement(PillButton, { variant: "outline", onClick: onNew }, "Video m\u1EDBi"))), suggestSilent && /* @__PURE__ */ import_react2.default.createElement("div", { className: "bg-yellow-900/30 border border-yellow-500/40 rounded-xl p-3 flex items-center justify-between gap-3" }, /* @__PURE__ */ import_react2.default.createElement("p", { className: "text-[11px] text-yellow-100" }, silentCount, "/", shotsDone.length, ' kh\u1ED1i kh\xF4ng c\xF3 ti\u1EBFng d\xF9 ch\u1ECDn "Omni n\xF3i tho\u1EA1i". Nghe th\u1EED c\xE1c kh\u1ED1i c\xF2n l\u1EA1i: n\u1EBFu gi\u1ECDng kh\xE1c nhau r\xF5 gi\u1EEFa c\xE1c kh\u1ED1i, chuy\u1EC3n sang "C\xE2m + ph\u1EE5 \u0111\u1EC1" r\u1ED3i gh\xE9p (l\u1ED3ng ti\u1EBFng ngo\xE0i sau).'), /* @__PURE__ */ import_react2.default.createElement(PillButton, { variant: "outline", onClick: onSilent }, "Chuy\u1EC3n sang c\xE2m + ph\u1EE5 \u0111\u1EC1")), /* @__PURE__ */ import_react2.default.createElement("div", { className: "flex gap-3 items-start flex-wrap" }, script.roles.filter((r) => r.sheetBase64).map((r) => /* @__PURE__ */ import_react2.default.createElement("div", { key: r.role, className: "flex flex-col items-center gap-1" }, /* @__PURE__ */ import_react2.default.createElement("img", { src: `data:image/png;base64,${r.sheetBase64}`, className: "h-[110px] rounded-lg border border-white/10" }), /* @__PURE__ */ import_react2.default.createElement("span", { className: "text-[9px] text-white/40" }, r.role, " v", r.version))), Array.from(new Set(script.shots.filter((sh) => sh.showsPhone).map((sh) => String(sh.screen || "dao")))).map((k) => screens[k]?.base64 ? /* @__PURE__ */ import_react2.default.createElement("div", { key: k, className: "flex flex-col items-center gap-1" }, /* @__PURE__ */ import_react2.default.createElement("img", { src: `data:image/png;base64,${screens[k].base64}`, className: "h-[110px] rounded-lg border border-white/10" }), /* @__PURE__ */ import_react2.default.createElement("span", { className: "text-[9px] text-white/40" }, "m\xE0n ", k)) : null), items.filter((i) => i.shotId !== -1 && i.keyframeBase64).map((i) => /* @__PURE__ */ import_react2.default.createElement("div", { key: i.id, className: "flex flex-col items-center gap-1" }, /* @__PURE__ */ import_react2.default.createElement("img", { src: `data:image/png;base64,${i.keyframeBase64}`, className: "h-[110px] rounded-lg border border-white/10" }), /* @__PURE__ */ import_react2.default.createElement("span", { className: "text-[9px] text-white/40" }, "keyframe ", i.shotId)))), merged && /* @__PURE__ */ import_react2.default.createElement("div", { className: "max-w-sm" }, /* @__PURE__ */ import_react2.default.createElement(ShotCard, { item: merged, onRetry: () => {
    }, onStop: () => {
    } })), /* @__PURE__ */ import_react2.default.createElement("div", { className: "grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4" }, script.shots.map((sh) => {
      const it = items.find((i) => i.shotId === sh.id);
      return it ? /* @__PURE__ */ import_react2.default.createElement(ShotCard, { key: it.id, item: it, shot: sh, onRetry: () => onRetry(it.id), onStop: () => onStop(it.id) }) : null;
    })), log.length > 0 && /* @__PURE__ */ import_react2.default.createElement("div", { className: "flex justify-end" }, /* @__PURE__ */ import_react2.default.createElement(PillButton, { variant: "outline", onClick: () => taiLog(log) }, "\u2B07 T\u1EA3i log (", log.length, " d\xF2ng)")), log.length > 0 && /* @__PURE__ */ import_react2.default.createElement("pre", { className: "text-[10px] text-white/40 whitespace-pre-wrap bg-black/40 p-2 rounded-lg max-h-[200px] overflow-auto" }, log.slice(-40).join("\n")));
  };
  var BatchView = ({ batch, busy, busyLabel, log, settings, preCast, onRun, onBack, onResume, onRetry, onMerge }) => {
    const done = batch.filter((v) => v.status === "done").length;
    const failed = batch.filter((v) => v.status === "failed").length;
    const clipsDone = batch.reduce((a, v) => a + v.items.filter((i) => i.status === "completed").length, 0);
    const first = batch.find((v) => v.startedAt)?.startedAt;
    const elapsed = first ? Math.round((Date.now() - first) / 6e4) : 0;
    return /* @__PURE__ */ import_react2.default.createElement("div", { className: "flex flex-col gap-5 max-w-6xl mx-auto w-full" }, /* @__PURE__ */ import_react2.default.createElement("div", { className: "flex items-center justify-between gap-3 flex-wrap" }, /* @__PURE__ */ import_react2.default.createElement("div", null, /* @__PURE__ */ import_react2.default.createElement("h2", { className: "text-white font-bold text-lg" }, "H\xE0ng lo\u1EA1t: ", settings.batchCount, " k\u1ECBch b\u1EA3n \u2192 ", settings.batchCount, " video"), /* @__PURE__ */ import_react2.default.createElement("p", { className: "text-[11px] text-white/40" }, busy ? busyLabel : batch.length ? `Xong ${done}/${batch.length} video \xB7 ${clipsDone}/${batch.reduce((a, v) => a + v.items.length, 0)} clip \xB7 l\u1ED7i ${failed} \xB7 ${elapsed} ph\xFAt` : "Kh\xF4ng c\u1EA7n duy\u1EC7t g\xEC. S\u1EA3n ph\u1EA9m: d\xF9ng product sheet \u0111\xE3 c\xF3, ch\u01B0a c\xF3 th\xEC t\u1EF1 v\u1EBD. Ng\u01B0\u1EDDi k\u1EC3: " + (preCast ? `d\xF9ng ${preCast.name} cho c\u1EA3 ${settings.batchCount}` : "t\u1EF1 t\u1EA1o theo t\u1EEBng k\u1ECBch b\u1EA3n") + `. ${settings.resolution} \xB7 ${settings.audioMode === "native" ? "Omni n\xF3i tho\u1EA1i" : "c\xE2m"} \xB7 ${settings.fast ? "kh\xF4ng QC" : "c\xF3 QC"} \xB7 ${settings.batchParallel} clip c\xF9ng l\xFAc.`)), /* @__PURE__ */ import_react2.default.createElement("div", { className: "flex gap-2" }, /* @__PURE__ */ import_react2.default.createElement(PillButton, { variant: "outline", disabled: busy, onClick: onBack }, "\u2190 T\xECnh hu\u1ED1ng"), batch.some((v) => v.status !== "done" || v.items.some((i) => i.status !== "completed")) && !busy && /* @__PURE__ */ import_react2.default.createElement(PillButton, { variant: "filled", onClick: onResume }, "Ti\u1EBFp t\u1EE5c \u0111\u1EE3t d\u1EDF (ch\u1EC9 ph\u1EA7n thi\u1EBFu)"), /* @__PURE__ */ import_react2.default.createElement(PillButton, { variant: "solid", disabled: busy, onClick: onRun }, batch.length ? `Ch\u1EA1y \u0111\u1EE3t m\u1EDBi (${settings.batchCount} t\xECnh hu\u1ED1ng kh\xE1c)` : `Sinh ${settings.batchCount} k\u1ECBch b\u1EA3n + d\u1EF1ng ${settings.batchCount} video`), log.length > 0 && /* @__PURE__ */ import_react2.default.createElement(PillButton, { variant: "outline", onClick: () => taiLog(log) }, "\u2B07 T\u1EA3i log (", log.length, " d\xF2ng)"))), batch.map((v) => /* @__PURE__ */ import_react2.default.createElement("div", { key: v.id, className: `bg-[#0d0d0d] border rounded-2xl p-3 flex flex-col gap-2 ${v.status === "done" ? "border-green-500/40" : v.status === "failed" ? "border-red-500/40" : "border-white/10"}` }, /* @__PURE__ */ import_react2.default.createElement("div", { className: "flex items-center justify-between gap-3 flex-wrap" }, /* @__PURE__ */ import_react2.default.createElement("p", { className: "text-[12px] text-white font-bold" }, v.id, ". ", v.script?.title || v.scenario.title, " ", /* @__PURE__ */ import_react2.default.createElement("span", { className: "text-white/40 font-normal" }, "\xB7 ", v.status, v.error ? " \u2014 " + v.error.slice(0, 120) : "")), /* @__PURE__ */ import_react2.default.createElement("div", { className: "flex gap-2" }, v.items.some((i) => i.status === "completed") && !busy && /* @__PURE__ */ import_react2.default.createElement(PillButton, { variant: "outline", onClick: () => onMerge(v.id) }, "Gh\xE9p l\u1EA1i"), v.merged?.base64 && /* @__PURE__ */ import_react2.default.createElement(PillButton, { variant: "solid", onClick: () => import_flow_sdk3.Flow.download({ base64: v.merged.base64, mimeType: "video/mp4", filename: `PVF_${v.id}_${slugify(v.script?.title || v.scenario.title)}.mp4` }) }, "T\u1EA3i video ", v.id))), /* @__PURE__ */ import_react2.default.createElement("p", { className: "text-[10px] text-white/40" }, v.scenario.place, " \xB7 ", v.scenario.worry, " \xB7 ", v.script ? v.script.roles.map((r) => r.name).join(", ") : v.scenario.narrator), /* @__PURE__ */ import_react2.default.createElement("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-3" }, v.merged && /* @__PURE__ */ import_react2.default.createElement(ShotCard, { item: v.merged, onRetry: () => {
    }, onStop: () => {
    } }), v.items.map((it) => /* @__PURE__ */ import_react2.default.createElement(ShotCard, { key: it.id, item: it, shot: v.script?.shots.find((sh) => sh.id === it.shotId), busy, onRetry: () => onRetry(v.id, it.id), onStop: () => {
    } }))))), log.length > 0 && /* @__PURE__ */ import_react2.default.createElement("pre", { className: "text-[10px] text-white/40 whitespace-pre-wrap bg-black/40 p-2 rounded-lg max-h-[220px] overflow-auto" }, log.slice(-60).join("\n")));
  };

  // product-factory/v44_orange/App.tsx
  var idbOpen = () => new Promise((res, rej) => {
    const r = indexedDB.open("pvf", 1);
    r.onupgradeneeded = () => r.result.createObjectStore("kv");
    r.onerror = () => rej(r.error);
    r.onblocked = () => rej(new Error("IndexedDB b\u1ECB tab kh\xE1c gi\u1EEF"));
    r.onsuccess = () => res(r.result);
  });
  var idbGet = async (key) => {
    const db = await idbOpen();
    return new Promise((res, rej) => {
      const g = db.transaction("kv", "readonly").objectStore("kv").get(key);
      g.onsuccess = () => {
        res(g.result);
        db.close();
      };
      g.onerror = () => {
        rej(g.error);
        db.close();
      };
    });
  };
  var idbSet = async (key, val) => {
    const db = await idbOpen();
    return new Promise((res, rej) => {
      const t = db.transaction("kv", "readwrite");
      t.objectStore("kv").put(val, key);
      t.oncomplete = () => {
        res();
        db.close();
      };
      t.onerror = () => {
        rej(t.error);
        db.close();
      };
    });
  };
  var SESSION_KEY = "session";
  var SCREENS_KEY = "screens";
  var INITIAL_STATE = { product: UNICH_PRESET, screens: {}, scenarios: [], castLibrary: [], settings: INITIAL_SETTINGS, approvals: { roles: {} }, items: [], batch: [], step: "product", isBusy: false, busyLabel: "", seedHistory: [], log: [] };
  var newSeed = () => `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`;
  function App() {
    const [state, setState] = (0, import_react3.useState)(INITIAL_STATE);
    const [error, setError] = (0, import_react3.useState)(null);
    const stateRef = (0, import_react3.useRef)(state);
    stateRef.current = state;
    const cancelled = (0, import_react3.useRef)(/* @__PURE__ */ new Set());
    const [saved, setSaved] = (0, import_react3.useState)(null);
    (0, import_react3.useEffect)(() => {
      idbGet(SCREENS_KEY).then((sc) => {
        if (sc && Object.keys(sc).length) {
          setState((s) => ({ ...s, screens: { ...sc, ...s.screens } }));
          log(`[APP] \u0111\xE3 n\u1EA1p l\u1EA1i ${Object.keys(sc).length} \u1EA3nh m\xE0n h\xECnh app \u0111\xE3 l\u01B0u`);
        }
      }).catch(() => {
      });
    }, []);
    (0, import_react3.useEffect)(() => {
      idbGet(SESSION_KEY).then((s) => {
        if (s?.state && ((s.state.items || []).length || (s.state.batch || []).length)) setSaved({ at: s.at, n: (s.state.batch || []).length || 1 });
      }).catch(() => {
      });
    }, []);
    const lastSave = (0, import_react3.useRef)(0);
    const snapshot = (s) => {
      const slim = (items) => items.map((i) => ({ ...i, keyframeBase64: void 0 }));
      return { at: (/* @__PURE__ */ new Date()).toLocaleString(), state: { ...s, log: s.log.slice(-200), isBusy: false, busyLabel: "", items: slim(s.items), batch: s.batch.map((v) => ({ ...v, items: slim(v.items) })) } };
    };
    const saveNow = (s) => {
      lastSave.current = Date.now();
      return idbSet(SESSION_KEY, snapshot(s)).catch((e) => setError(`L\u01B0u phi\xEAn l\u1ED7i (b\u1ED9 nh\u1EDB tr\xECnh duy\u1EC7t?): ${String(e?.message || e).slice(0, 80)}`));
    };
    (0, import_react3.useEffect)(() => {
      if (!(state.items.length || state.batch.length)) return;
      const wait = Date.now() - lastSave.current > 3e4 ? 0 : 5e3;
      const t = setTimeout(() => {
        saveNow(state);
      }, wait);
      return () => clearTimeout(t);
    }, [state]);
    (0, import_react3.useEffect)(() => {
      const h = () => {
        const s = stateRef.current;
        if (s.items.length || s.batch.length) saveNow(s);
      };
      window.addEventListener("pagehide", h);
      window.addEventListener("beforeunload", h);
      return () => {
        window.removeEventListener("pagehide", h);
        window.removeEventListener("beforeunload", h);
      };
    }, []);
    (0, import_react3.useEffect)(() => {
      ffmpegService.load().then(() => ensureFont(void 0, log)).catch((e) => console.warn("[FFMPEG] load", e));
    }, []);
    const log = (m) => {
      console.log("[PF]", m);
      setState((s) => ({ ...s, log: [...s.log, `${(/* @__PURE__ */ new Date()).toLocaleTimeString()} ${m}`] }));
    };
    const busy = (on, label = "") => setState((s) => ({ ...s, isBusy: on, busyLabel: label }));
    const patchItem = (id, patch) => setState((s) => ({ ...s, items: s.items.map((i) => i.id === id ? { ...i, ...patch } : i) }));
    const setScript = (fn) => setState((s) => s.script ? { ...s, script: fn(s.script) } : s);
    const jobs = (0, import_react3.useRef)(0);
    const guard = async (label, fn) => {
      setError(null);
      jobs.current++;
      busy(true, label);
      try {
        await fn();
      } catch (e) {
        setError(`${label}: ${e?.message || e}`);
        log(`L\u1ED6I ${label}: ${e?.message || e}`);
      } finally {
        jobs.current--;
        if (jobs.current <= 0) {
          jobs.current = 0;
          busy(false);
        }
      }
    };
    const goScenario = () => setState((s) => ({ ...s, step: "scenario" }));
    const pickScreen = (k) => guard("Ch\u1ECDn \u1EA3nh m\xE0n h\xECnh app", async () => {
      const m = await import_flow_sdk4.Flow.media.select({ filter: "image" });
      if (!m?.base64) return;
      const id = m.mediaId || await saveNamed(m.base64, `PVF_Screen_${k}.png`);
      setState((s) => {
        const next = { ...s.screens, [k]: { mediaId: id, base64: m.base64 } };
        idbSet(SCREENS_KEY, next).catch(() => {
        });
        return { ...s, screens: next };
      });
      log(`[APP] m\xE0n h\xECnh "${screenLabel(k)}" \u2192 ${id} (\u0111\xE3 l\u01B0u, l\u1EA7n sau m\u1EDF tool kh\xF4ng ph\u1EA3i ch\u1ECDn l\u1EA1i)`);
    });
    const clearScreen = (k) => setState((s) => {
      const n = { ...s.screens };
      delete n[k];
      idbSet(SCREENS_KEY, n).catch(() => {
      });
      return { ...s, screens: n };
    });
    const makeScenarios = () => guard("Sinh t\xECnh hu\u1ED1ng", async () => {
      const avoid = [...stateRef.current.seedHistory, ...stateRef.current.scenarios.map(fingerprint)];
      const sc = await generateScenarios(stateRef.current.product, avoid, newSeed());
      if (!sc.length) throw new Error("Gemini kh\xF4ng tr\u1EA3 t\xECnh hu\u1ED1ng n\xE0o");
      setState((s) => ({ ...s, scenarios: sc, chosen: void 0, script: void 0, seedHistory: [...s.seedHistory, ...s.scenarios.map(fingerprint)].slice(-30) }));
    });
    const lockedRoles = () => {
      const st = stateRef.current;
      const out = {};
      (st.script?.roles || []).forEach((r) => {
        if (r.sheetMediaId && st.approvals.roles[r.role]) out[r.role] = r;
      });
      if (st.preCast) out["narrator"] = { ...st.preCast, role: "narrator" };
      return out;
    };
    const writeFor = async (ch, extraLocked = {}) => {
      const locked = { ...lockedRoles(), ...extraLocked };
      const sc = await generateValidScript(stateRef.current.product, ch, newSeed(), log, locked, stateRef.current.settings.voMode, stateRef.current.settings.narratorMode, stateRef.current.settings.audience);
      const roleApprovals = {};
      sc.roles.forEach((r) => {
        roleApprovals[r.role] = !!(locked[r.role] && r.sheetMediaId);
      });
      setState((s) => ({ ...s, chosen: ch, script: sc, approvals: { roles: roleApprovals }, items: [] }));
      log(`[SCRIPT] ${sc.title} \u2014 vai: ${sc.roles.map((r) => r.role).join(", ")} \u2014 ${sc.shots.map((sh) => sh.lines.map((l) => l.text).join(" / ")).join(" || ")}`);
    };
    const preCastLibrary = () => guard("Ch\u1ECDn ng\u01B0\u1EDDi k\u1EC3 t\u1EEB th\u01B0 vi\u1EC7n", async () => {
      const m = await import_flow_sdk4.Flow.media.select({ filter: "image" });
      if (!m?.base64) return;
      const desc = await describeCast(m.base64, m.mimeType || "image/png");
      const id = m.mediaId || await saveNamed(m.base64, `PVF_Cast_lib_${Date.now().toString(36)}.png`);
      const name = String(m.name || "Nhan vat").replace(/^PVF_Cast_/, "").replace(/_v\d+\.png$/i, "").replace(/\.png$/i, "") || "Nhan vat";
      const cast = { role: "narrator", name, look: desc.look, persona: "calm, friendly", voice: desc.voice, sheetMediaId: id, sheetBase64: m.base64, version: 1, saveToLibrary: true };
      setState((s) => ({ ...s, preCast: cast, castLibrary: [cast, ...s.castLibrary.filter((x) => x.sheetMediaId !== id)].slice(0, 12) }));
      log(`[CAST] ng\u01B0\u1EDDi k\u1EC3 ch\u1ECDn tr\u01B0\u1EDBc: ${desc.look}`);
    });
    const writeScript = () => {
      const ch = stateRef.current.chosen;
      if (ch) guard("Vi\u1EBFt k\u1ECBch b\u1EA3n", () => writeFor(ch));
    };
    const randomPick = () => {
      const list = stateRef.current.scenarios;
      if (!list.length) return;
      const ch = list[Math.floor(Math.random() * list.length)];
      guard("T\u1EF1 ch\u1ECDn + vi\u1EBFt k\u1ECBch b\u1EA3n", () => writeFor(ch));
    };
    const makeMissingAssets = async () => {
      const st = stateRef.current;
      const sc = st.script;
      const jobs2 = [];
      sc.roles.filter((c) => !c.sheetMediaId).forEach((c) => jobs2.push((async () => {
        const r = await genImage(castSheetPrompt(c), [], "16:9");
        const v = c.version + 1;
        const id = c.saveToLibrary ? await saveNamed(r.base64, `PVF_Cast_${slugify(c.name)}_v${v}.png`) : r.mediaId;
        const cast = { ...c, sheetMediaId: id, sheetBase64: r.base64, version: v };
        setRole(c.role, () => cast);
        if (c.saveToLibrary) setState((s) => ({ ...s, castLibrary: [cast, ...s.castLibrary.filter((x) => x.sheetMediaId !== id)].slice(0, 12) }));
        log(`[LOCK] cast ${c.role} v${v} \u2192 ${id}`);
      })()));
      if (jobs2.length) {
        const results = await Promise.allSettled(jobs2);
        const failed = results.filter((r) => r.status === "rejected");
        if (failed.length) throw new Error(failed.map((f) => String(f.reason?.message || f.reason)).join(" | "));
      } else log("[LOCK] kh\xF4ng thi\u1EBFu b\u1EA3ng nh\xE2n v\u1EADt n\xE0o.");
      const miss = Array.from(new Set(sc.shots.filter((sh) => sh.showsPhone).map((sh) => String(sh.screen || "dao")))).filter((k) => !stateRef.current.screens[k]?.mediaId);
      if (miss.length) log(`[LOCK] THI\u1EBEU \u1EA3nh m\xE0n h\xECnh th\u1EADt: ${miss.map((k) => screenLabel(k)).join(", ")} \u2014 v\xE0o m\xE0n App ho\u1EB7c Kh\xF3a th\u1EE7 c\xF4ng \u0111\u1EC3 ch\u1ECDn, n\u1EBFu kh\xF4ng Nano Banana s\u1EBD t\u1EF1 v\u1EBD m\xE0n h\xECnh`);
      await new Promise((r) => setTimeout(r, 50));
    };
    const regenAll = () => guard("T\u1EA1o song song \u1EA3nh kh\xF3a", makeMissingAssets);
    const startAuto = async () => {
      setError(null);
      busy(true, "\u0110ang t\u1EF1 v\u1EBD s\u1EA3n ph\u1EA9m / nh\xE2n v\u1EADt / app\u2026");
      try {
        await makeMissingAssets();
      } catch (e) {
        setError("T\u1EF1 t\u1EA1o \u1EA3nh: " + (e?.message || e));
        log(`L\u1ED6I t\u1EF1 t\u1EA1o \u1EA3nh: ${e?.message || e}`);
        busy(false);
        return;
      }
      const roles = {};
      stateRef.current.script.roles.forEach((r) => {
        roles[r.role] = true;
      });
      setState((s) => ({ ...s, approvals: { roles } }));
      await start();
    };
    const setRole = (role, fn) => setScript((s) => ({ ...s, roles: s.roles.map((r) => r.role === role ? fn(r) : r) }));
    const regenCast = (role) => guard(`T\u1EA1o b\u1EA3ng nh\xE2n v\u1EADt (${role})`, async () => {
      const c = roleOf(stateRef.current.script, role);
      if (!c) return;
      const r = await genImage(castSheetPrompt(c), [], "16:9");
      const v = c.version + 1;
      const id = c.saveToLibrary ? await saveNamed(r.base64, `PVF_Cast_${slugify(c.name)}_v${v}.png`) : r.mediaId;
      const cast = { ...c, sheetMediaId: id, sheetBase64: r.base64, version: v };
      setRole(role, () => cast);
      setState((s) => ({ ...s, castLibrary: c.saveToLibrary ? [cast, ...s.castLibrary.filter((x) => x.sheetMediaId !== id)].slice(0, 12) : s.castLibrary, approvals: { ...s.approvals, roles: { ...s.approvals.roles, [role]: false } } }));
      log(`[LOCK] cast ${role} ${c.name} v${v} \u2192 ${id}${c.saveToLibrary ? " (\u0111\xE3 l\u01B0u kho)" : ""}`);
    });
    const applyCastToRole = async (role, cast) => {
      const ch = stateRef.current.chosen;
      if (!ch) return;
      const c = { ...cast, role };
      await writeFor(ch, { [role]: c });
      setState((s) => ({ ...s, approvals: { ...s.approvals, roles: { ...s.approvals.roles, [role]: true } } }));
      log(`[LOCK] vai ${role} = ${c.name} v${c.version}; k\u1ECBch b\u1EA3n \u0111\xE3 vi\u1EBFt l\u1EA1i cho \u0111\xFAng ng\u01B0\u1EDDi.`);
    };
    const libraryCast = (role) => guard(`Ch\u1ECDn nh\xE2n v\u1EADt t\u1EEB th\u01B0 vi\u1EC7n (${role})`, async () => {
      const m = await import_flow_sdk4.Flow.media.select({ filter: "image" });
      if (!m?.base64) return;
      const desc = await describeCast(m.base64, m.mimeType || "image/png");
      const id = m.mediaId || await saveNamed(m.base64, `PVF_Cast_lib_${Date.now().toString(36)}.png`);
      const name = String(m.name || "Nhan vat").replace(/^PVF_Cast_/, "").replace(/_v\d+\.png$/i, "").replace(/\.png$/i, "") || "Nhan vat";
      const cast = { role, name, look: desc.look, persona: roleOf(stateRef.current.script, role)?.persona || "calm, friendly", voice: desc.voice, sheetMediaId: id, sheetBase64: m.base64, version: 1, saveToLibrary: true };
      setState((s) => ({ ...s, castLibrary: [cast, ...s.castLibrary.filter((x) => x.sheetMediaId !== id)].slice(0, 12) }));
      await applyCastToRole(role, cast);
    });
    const useCast = (role, c) => guard(`D\xF9ng nh\xE2n v\u1EADt kho (${role})`, () => applyCastToRole(role, c));
    const saveToggle = (role) => setRole(role, (c) => ({ ...c, saveToLibrary: !c.saveToLibrary }));
    const approveRole = (role) => setState((s) => ({ ...s, approvals: { ...s.approvals, roles: { ...s.approvals.roles, [role]: !s.approvals.roles[role] } } }));
    const loadFont = (f) => {
      const fr = new FileReader();
      fr.onload = () => {
        resetFont();
        setState((s) => ({ ...s, fontBytes: new Uint8Array(fr.result), fontName: f.name }));
      };
      fr.readAsArrayBuffer(f);
    };
    const refsFor = (ctx, shot, kf1) => {
      const st = stateRef.current;
      const s = ctx.script;
      const refs = [];
      (shot.roles || []).forEach((r) => {
        const c = roleOf(s, r);
        if (c?.sheetMediaId && !refs.includes(c.sheetMediaId)) refs.push(c.sheetMediaId);
      });
      if (!(shot.roles || []).length) {
        const nar = roleOf(s, "narrator");
        if (nar?.sheetMediaId && !refs.includes(nar.sheetMediaId)) refs.push(nar.sheetMediaId);
      }
      if (kf1 && !refs.includes(kf1)) refs.push(kf1);
      const scr = shot.showsPhone ? st.screens[shot.screen || "dao"]?.mediaId : void 0;
      if (scr && !refs.includes(scr)) refs.push(scr);
      return refs.slice(0, 5);
    };
    const ensureKeyframe = async (ctx, shot, itemId, kf1, tag = "") => {
      const cur = ctx.getItem(itemId);
      if (cur?.keyframeMediaId) return cur.keyframeMediaId;
      const st = stateRef.current;
      const script = ctx.script;
      let correction;
      let last = { mediaId: "", base64: "" };
      const maxRounds = st.settings.fast ? 0 : MAX_QC_ROUNDS;
      for (let round = 0; round <= maxRounds; round++) {
        ctx.patch(itemId, { status: "keyframe" });
        const refs = refsFor(ctx, shot, kf1);
        const hasScreen = !!(shot.showsPhone && st.screens[shot.screen || "dao"]?.mediaId);
        const prompt = keyframePrompt(script, shot, st.product, hasScreen, !kf1, correction);
        log(`[PROMPT]${tag} keyframe ${shot.id} r${round} ${prompt.length} k\xFD t\u1EF1 \xB7 [REFS] ${refs.join(", ")}`);
        last = await (async () => {
          let err = null;
          for (let t = 0; t < 3; t++) {
            try {
              return await genImage(prompt, refs, "9:16");
            } catch (e) {
              err = e;
              const m = String(e?.message || e);
              if (isFlowBlockMsg(m)) throw e;
              log(`[\u1EA2NH]${tag} keyframe ${shot.id} tr\u01B0\u1EE3t l\u1EA7n ${t + 1}/3: ${m.slice(0, 90)}`);
              if (t < 2) await new Promise((r) => setTimeout(r, 6e3));
            }
          }
          throw err;
        })();
        ctx.patch(itemId, { keyframeMediaId: last.mediaId, keyframeBase64: last.base64, status: "qc" });
        if (st.settings.fast) {
          log(`[QC]${tag} b\u1ECF qua (nh\xE1p nhanh) keyframe ${shot.id}`);
          break;
        }
        try {
          const casts = (shot.roles || ["narrator"]).map((r) => roleOf(script, r)).filter(Boolean);
          const qc = await qcKeyframe(last.base64, casts, shot, st.product);
          log(`[QC]${tag} keyframe ${shot.id} r${round}: ${qc.ok ? "\u0110\u1EA0T" : "CH\u01AFA"} ${JSON.stringify(qc.raw || {}).slice(0, 220)}`);
          ctx.patch(itemId, { qcNote: (qc.ok ? "\u0111\u1EA1t" : "ch\u01B0a \u0111\u1EA1t") + (qc.issues.length ? " \u2014 " + qc.issues.join("; ") : "") });
          if (qc.ok || round === maxRounds) break;
          correction = qc.issues.join("; ");
        } catch (e) {
          log(`[QC]${tag} l\u1ED7i, b\u1ECF qua: ${e?.message || e}`);
          break;
        }
      }
      ctx.patch(itemId, { status: "pending" });
      return last.mediaId;
    };
    const runVideo = async (ctx, shot, itemId, keyframeId, tag = "") => {
      const cur0 = ctx.getItem(itemId);
      if (cur0?.status === "completed" && cur0.base64) return;
      const deadline = Date.now() + 15 * 60 * 1e3;
      let lastErr = null;
      let audioRetries = 0;
      let durRetries = 0;
      let rateWaits = 0;
      let camTried = false;
      const refs = refsFor(ctx, shot);
      let dur = shot.duration || SHOT_SECONDS;
      let prompt = videoPrompt(ctx.script, shot, stateRef.current.settings);
      log(`[PROMPT]${tag} video ${shot.id} ${prompt.length} k\xFD t\u1EF1 \xB7 [REFS] ${refs.join(", ")}`);
      for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
        if (Date.now() > deadline) {
          lastErr = new Error("qu\xE1 15 ph\xFAt cho m\u1ED9t clip, b\u1ECF");
          break;
        }
        if (cancelled.current.has(itemId)) {
          ctx.patch(itemId, { status: "failed", error: "\u0110\xE3 d\u1EEBng b\u1EDFi ng\u01B0\u1EDDi d\xF9ng" });
          return;
        }
        ctx.patch(itemId, { status: "generating", retryCount: attempt, startTime: ctx.getItem(itemId)?.startTime || Date.now(), error: void 0, finalPrompt: prompt });
        try {
          const gen = await withTimeout(genShotVideo(prompt, keyframeId, refs, stateRef.current.settings, dur), RENDER_TIMEOUT_MS, "Render");
          const audio = gen.base64 ? await probeAudio(gen.base64) : { hasAudio: false, info: "kh\xF4ng c\xF3 d\u1EEF li\u1EC7u", rms: 0, speechStart: 0, speechEnd: 0 };
          log(`[AUDIO]${tag} kh\u1ED1i ${shot.id} (${(shot.lines || []).length ? "c\xF3 tho\u1EA1i" : "c\u1EA3nh ch\xE8n, kh\xF4ng l\u1EDDi"}): ${audio.info}`);
          const stg = stateRef.current.settings;
          let cutOff = stg.audioMode === "native" && stg.fast && !!shot.lines.length && audio.hasAudio && !shot.vo && audio.speechEnd > dur - 0.15;
          if (stg.audioMode === "native" && shot.lines.length && !audio.hasAudio && audioRetries < 1) {
            audioRetries++;
            log(`[QC-TI\u1EBENG]${tag} kh\u1ED1i ${shot.id}: clip C\xC2M d\xF9 c\u1EA7n tho\u1EA1i \u2192 d\u1EF1ng l\u1EA1i m\u1ED9t l\u1EA7n`);
            ctx.patch(itemId, { qcNote: "clip c\xE2m, d\u1EF1ng l\u1EA1i m\u1ED9t l\u1EA7n" });
            continue;
          }
          if (stg.audioMode === "native" && !stg.fast && shot.lines.length && audio.hasAudio && gen.base64) {
            const aq = await qcAudio(gen.base64, shot.lines.map((l) => l.text));
            log(`[QC-TI\u1EBENG]${tag} kh\u1ED1i ${shot.id}: ${aq.note}`);
            if (aq.cutOff) cutOff = true;
            else if (!aq.ok && audioRetries < 1) {
              audioRetries++;
              ctx.patch(itemId, { qcNote: "ti\u1EBFng ch\u01B0a \u0111\u1EA1t, d\u1EF1ng l\u1EA1i m\u1ED9t l\u1EA7n: " + aq.note });
              continue;
            }
            ctx.patch(itemId, { qcNote: ((ctx.getItem(itemId)?.qcNote || "") + " \xB7 ti\u1EBFng: " + aq.note).trim() });
          }
          if (cutOff && dur < 10 && durRetries < 1) {
            durRetries++;
            const nd = [4, 6, 8, 10].find((d) => d > dur) || 10;
            log(`[QC-TI\u1EBENG]${tag} kh\u1ED1i ${shot.id}: c\xE2u b\u1ECB c\u1EE5t (ti\u1EBFng t\u1EDBi ${audio.speechEnd.toFixed(1)}/${dur} s) \u2192 d\u1EF1ng l\u1EA1i ${nd} s`);
            ctx.patch(itemId, { qcNote: `c\xE2u c\u1EE5t, d\u1EF1ng l\u1EA1i ${nd} s` });
            dur = nd;
            prompt = videoPrompt(ctx.script, { ...shot, duration: nd }, stateRef.current.settings);
            continue;
          }
          ctx.patch(itemId, { status: "completed", base64: gen.base64, mediaId: gen.mediaId, hasAudio: audio.hasAudio, audioInfo: audio.info, speechStart: audio.speechStart, speechEnd: audio.speechEnd, clipSeconds: dur });
          return;
        } catch (e) {
          lastErr = e;
          const msg = String(e?.message || e);
          log(`${tag} kh\u1ED1i ${shot.id} l\u1EA7n ${attempt + 1}: ${msg.slice(0, 140)}`);
          if (isFlowBlockMsg(msg)) {
            ctx.patch(itemId, { status: "failed", error: "Flow ch\u1EB7n (unusual activity): d\u1EEBng \u0111\u1EE3t, ch\u1EDD v\xE0i gi\u1EDD r\u1ED3i ch\u1EA1y l\u1EA1i. Kh\xF4ng th\u1EED l\u1EA1i." });
            return;
          }
          if (/rate limit|429|throttl/i.test(msg) && rateWaits < 2) {
            rateWaits++;
            for (let w = 0; w < 18 && !cancelled.current.has(itemId); w++) await new Promise((r) => setTimeout(r, 5e3));
            attempt--;
            continue;
          }
          if (/^Render quá/.test(msg)) {
            if (!camTried && (shot.lines || []).length) {
              camTried = true;
              prompt = videoPrompt(ctx.script, { ...shot, lines: [], voLines: [] }, stateRef.current.settings);
              log(`${tag} kh\u1ED1i ${shot.id}: Flow t\u1EEB ch\u1ED1i prompt C\xD3 THO\u1EA0I (ch\xEDnh s\xE1ch n\u1ED9i dung) \u2192 d\u1EF1ng l\u1EA1i C\xC2M, l\u1EDDi ch\u1EA1y b\u1EB1ng ph\u1EE5 \u0111\u1EC1`);
              ctx.patch(itemId, { qcNote: "Flow t\u1EEB ch\u1ED1i tho\u1EA1i \u2192 d\u1EF1ng c\xE2m" });
              continue;
            }
            ctx.patch(itemId, { status: "failed", error: "Flow t\u1EEB ch\u1ED1i prompt n\xE0y theo ch\xEDnh s\xE1ch n\u1ED9i dung (SDK treo n\xEAn ch\u1EC9 th\u1EA5y qu\xE1 4 ph\xFAt). \u0110\u1ED5i l\u1EDDi tho\u1EA1i c\u1EE7a kh\u1ED1i n\xE0y r\u1ED3i d\u1EF1ng l\u1EA1i." });
            return;
          }
          if (attempt < MAX_RETRIES) {
            await new Promise((r) => setTimeout(r, RETRY_DELAY_MS));
            continue;
          }
        }
      }
      ctx.patch(itemId, { status: "failed", error: String(lastErr?.message || lastErr) });
    };
    const composeAll = async (ctx, idFor, tag) => {
      const shots = ctx.script.shots;
      for (const host of shots.filter((sh) => shots.some((x) => x.insert && x.overlayHost === sh.id))) {
        const hit = ctx.getItem(idFor(host));
        if (!hit?.base64 || hit.status !== "completed" || hit.compositeBase64) continue;
        const ins = shots.filter((x) => x.insert && x.overlayHost === host.id).map((sh) => ({ sh, it: ctx.getItem(idFor(sh)) }));
        if (ins.some((x) => !x.it?.base64)) continue;
        try {
          const r = await ffLock(() => composeHost(hit, host, ins, stateRef.current.settings, (m) => log(`${tag} ${m}`.trim()), `${tag}${host.id}`.replace(/[^a-z0-9]/gi, "")));
          ctx.patch(idFor(host), { compositeBase64: r.base64, compositeCut: r.cut, compositeAudio: r.audio });
        } catch (e) {
          log(`${tag} [SEG] \u0111o\u1EA1n ${host.id} l\u1ED7i, gh\xE9p cu\u1ED1i s\u1EBD t\u1EF1 \u0111\xE8: ${String(e?.message || e).slice(0, 120)}`.trim());
        }
      }
    };
    const renderAll = async (ctx, idFor, tag, imgL, vidL) => {
      const shots = ctx.script.shots;
      {
        const locOf = (sh) => sh.location || "A";
        const locs = Array.from(new Set(shots.map(locOf)));
        const firstOf = {};
        locs.forEach((l) => {
          const f = shots.find((sh) => locOf(sh) === l && !sh.insert && !sh.vo && (sh.roles || []).length > 0) || shots.find((sh) => locOf(sh) === l && !sh.vo && (sh.roles || []).length > 0) || shots.find((sh) => locOf(sh) === l && !sh.vo) || shots.find((sh) => locOf(sh) === l);
          if (f) firstOf[l] = f;
        });
        const runShot = async (sh, ref) => {
          try {
            const kf = await imgL(() => ensureKeyframe(ctx, sh, idFor(sh), ref, tag));
            await vidL(() => runVideo(ctx, sh, idFor(sh), kf, tag));
          } catch (e) {
            log(`${tag} [KH\u1ED0I ${sh.id}] l\u1ED7i, b\u1ECF qua \u0111\u1EC3 c\xE1c kh\u1ED1i kh\xE1c ch\u1EA1y ti\u1EBFp: ${e?.message || e}`);
            ctx.patch(idFor(sh), { status: "failed", error: String(e?.message || e) });
          }
        };
        const orphan = shots.filter((sh) => !firstOf[locOf(sh)]);
        await Promise.all([
          ...locs.filter((l) => firstOf[l]).map(async (l) => {
            const f = firstOf[l];
            let kf = "";
            try {
              kf = await imgL(() => ensureKeyframe(ctx, f, idFor(f), void 0, tag));
            } catch (e) {
              log(`${tag} [KH\u1ED0I ${f.id}] keyframe g\u1ED1c l\u1ED7i, c\xE1c c\u1EA3nh c\xF9ng b\u1ED1i c\u1EA3nh ch\u1EA1y kh\xF4ng c\xF3 \u1EA3nh tham chi\u1EBFu: ${e?.message || e}`);
              ctx.patch(idFor(f), { status: "failed", error: String(e?.message || e) });
            }
            const others = shots.filter((sh) => locOf(sh) === l && sh !== f);
            await Promise.all([
              kf ? vidL(() => runVideo(ctx, f, idFor(f), kf, tag)).catch((e) => {
                log(`${tag} [KH\u1ED0I ${f.id}] d\u1EF1ng clip l\u1ED7i: ${e?.message || e}`);
                ctx.patch(idFor(f), { status: "failed", error: String(e?.message || e) });
              }) : Promise.resolve(),
              ...others.map((sh) => runShot(sh, kf || void 0))
            ]);
          }),
          ...orphan.map((sh) => runShot(sh, void 0))
        ]);
        try {
          await composeAll(ctx, idFor, tag);
        } catch (e) {
          log(`${tag} [GH\xC9P] l\u1ED7i, gi\u1EEF nguy\xEAn c\xE1c clip l\u1EBB: ${e?.message || e}`);
        }
        return;
      }
    };
    const singleCtx = () => ({ script: stateRef.current.script, getItem: (id) => stateRef.current.items.find((i) => i.id === id), patch: patchItem });
    const start = async () => {
      const script = stateRef.current.script;
      if (!script) return;
      setError(null);
      cancelled.current.clear();
      resetFlowBlock();
      const items = script.shots.map((sh) => ({ id: `s${sh.id}`, shotId: sh.id, status: "pending", retryCount: 0 }));
      setState((s) => ({ ...s, step: "render", items, isBusy: true, busyLabel: "\u0110ang t\u1EA1o keyframe + QC\u2026" }));
      try {
        const limit = makeLimiter(stateRef.current.settings.parallel);
        busy(true, "\u0110ang t\u1EA1o keyframe + d\u1EF1ng clip theo d\xE2y chuy\u1EC1n\u2026");
        await renderAll(singleCtx(), (sh) => `s${sh.id}`, "", (fn) => fn(), limit);
      } catch (e) {
        setError("D\u1EF1ng l\u1ED7i: " + (e?.message || e));
        setState((s) => ({ ...s, items: s.items.map((i) => i.status === "pending" || i.status === "keyframe" || i.status === "qc" ? { ...i, status: "failed", error: String(e?.message || e) } : i) }));
      } finally {
        busy(false);
      }
    };
    const retry = async (itemId) => {
      const script = stateRef.current.script;
      const it = stateRef.current.items.find((i) => i.id === itemId);
      const shot = script?.shots.find((sh) => sh.id === it?.shotId);
      if (!script || !it || !shot) return;
      cancelled.current.delete(itemId);
      resetFlowBlock();
      patchItem(itemId, { startTime: Date.now(), retryCount: 0, status: "generating", error: void 0, base64: void 0, audioInfo: void 0, compositeBase64: void 0, compositeCut: void 0, compositeAudio: void 0 });
      busy(true, `D\u1EF1ng l\u1EA1i kh\u1ED1i ${shot.id}\u2026`);
      try {
        const ctx = singleCtx();
        const refShot = script.shots.find((x) => (x.location || "A") === (shot.location || "A"));
        const kf1 = refShot ? stateRef.current.items.find((i) => i.shotId === refShot.id)?.keyframeMediaId : void 0;
        const kf = await ensureKeyframe(ctx, shot, itemId, shot.id === (refShot?.id ?? 1) ? void 0 : kf1);
        await runVideo(ctx, shot, itemId, kf);
        if (shot.insert && shot.overlayHost) patchItem(`s${shot.overlayHost}`, { compositeBase64: void 0, compositeCut: void 0, compositeAudio: void 0 });
        await composeAll(singleCtx(), (sh) => `s${sh.id}`, "");
      } catch (e) {
        patchItem(itemId, { status: "failed", error: String(e?.message || e) });
      } finally {
        busy(false);
      }
    };
    const resumeSingle = () => guard("Ti\u1EBFp t\u1EE5c d\u1EF1ng", async () => {
      cancelled.current.clear();
      resetFlowBlock();
      setState((s) => ({ ...s, items: s.items.map((i) => i.status === "keyframe" || i.status === "qc" || i.status === "generating" || i.status === "failed" ? { ...i, status: "pending", error: void 0 } : i) }));
      await new Promise((r) => setTimeout(r, 50));
      await renderAll(singleCtx(), (sh) => `s${sh.id}`, "", (fn) => fn(), makeLimiter(stateRef.current.settings.parallel));
    });
    const stop = (itemId) => {
      cancelled.current.add(itemId);
      patchItem(itemId, { status: "failed", error: "\u0110\xE3 d\u1EEBng th\u1EED l\u1EA1i" });
    };
    const merge = () => guard("Gh\xE9p 30s", async () => {
      const script = stateRef.current.script;
      const picked = script.shots.map((sh) => stateRef.current.items.find((i) => i.shotId === sh.id));
      const miss = script.shots.filter((sh, i) => !picked[i]?.base64).map((sh) => sh.id);
      if (miss.length === script.shots.length) throw new Error("Ch\u01B0a c\xF3 clip n\xE0o");
      if (miss.length) log(`[MERGE] thi\u1EBFu clip ${miss.join(", ")} \u2014 gh\xE9p t\u1EA1m b\u1ECF c\xE1c c\u1EA3nh n\xE0y (d\u1EF1ng l\u1EA1i r\u1ED3i b\u1EA5m Gh\xE9p \u0111\u1EC3 c\xF3 b\u1EA3n \u0111\u1EE7)`);
      const pm = prepMerge(script.shots, picked);
      const base64 = await ffLock(() => mergeShots(pm.items, pm.shots, stateRef.current.settings, stateRef.current.fontBytes, log));
      const audio = await probeAudio(base64);
      let mediaId = "";
      try {
        mediaId = (await import_flow_sdk4.Flow.save({ base64, mimeType: "video/mp4", name: `PVF_${slugify(script.title)}.mp4` })).mediaId;
      } catch (e) {
        console.error("[MERGE] save", e);
      }
      setState((s) => ({ ...s, items: [{ id: "merged", shotId: -1, status: "completed", retryCount: 0, base64, mediaId, hasAudio: audio.hasAudio, audioInfo: audio.info, finalPrompt: "Merged" }, ...s.items.filter((i) => i.id !== "merged")] }));
      log(`[MERGE] audio: ${audio.info}`);
      try {
        await import_flow_sdk4.Flow.download({ base64, mimeType: "video/mp4", filename: `PVF_${slugify(script.title)}.mp4` });
        log("[MERGE] \u0111\xE3 t\u1EA3i video gh\xE9p v\u1EC1 m\xE1y");
      } catch (e) {
      }
    });
    const patchBatch = (id, fn) => setState((s) => ({ ...s, batch: s.batch.map((v) => v.id === id ? fn(v) : v) }));
    const batchCtx = (id) => ({
      get script() {
        return stateRef.current.batch.find((v) => v.id === id).script;
      },
      getItem: (itemId) => stateRef.current.batch.find((v) => v.id === id)?.items.find((i) => i.id === itemId),
      patch: (itemId, p) => patchBatch(id, (v) => ({ ...v, items: v.items.map((i) => i.id === itemId ? { ...i, ...p } : i) }))
    });
    const batchLimits = () => ({ text: makeLimiter(3), img: makeLimiter(4), vid: makeLimiter(stateRef.current.settings.batchParallel), merge: makeLimiter(1) });
    const mergeBatchVideo = async (vid, mergeL) => {
      const tag = `[V${vid}]`;
      await new Promise((r) => setTimeout(r, 80));
      const cur = stateRef.current.batch.find((x) => x.id === vid);
      const picked = cur.script.shots.map((sh) => cur.items.find((i) => i.shotId === sh.id));
      const miss = cur.script.shots.filter((sh, i) => !picked[i]?.base64).map((sh) => sh.id);
      if (miss.length === picked.length) throw new Error("ch\u01B0a c\xF3 clip n\xE0o \u0111\u1EC3 gh\xE9p");
      if (miss.length) log(`${tag} thi\u1EBFu clip ${miss.join(", ")} \u2014 gh\xE9p t\u1EA1m b\u1ECF c\xE1c c\u1EA3nh n\xE0y (D\u1EF1ng l\u1EA1i r\u1ED3i b\u1EA5m Gh\xE9p l\u1EA1i \u0111\u1EC3 c\xF3 b\u1EA3n \u0111\u1EE7)`);
      patchBatch(vid, (x) => ({ ...x, status: "merge" }));
      const pm = prepMerge(cur.script.shots, picked);
      const base64 = await mergeL(() => ffLock(() => mergeShots(pm.items, pm.shots, stateRef.current.settings, stateRef.current.fontBytes, (m) => log(`${tag} ${m}`))));
      const audio = await probeAudio(base64);
      let mediaId = "";
      try {
        mediaId = (await import_flow_sdk4.Flow.save({ base64, mimeType: "video/mp4", name: `PVF_${vid}_${slugify(cur.script.title)}.mp4` })).mediaId;
      } catch (e) {
        console.error("[BATCH] save", e);
      }
      patchBatch(vid, (x) => ({ ...x, status: "done", finishedAt: Date.now(), error: miss.length ? `gh\xE9p t\u1EA1m, thi\u1EBFu c\u1EA3nh ${miss.join(", ")}` : void 0, merged: { id: `v${vid}merged`, shotId: -1, status: "completed", retryCount: 0, base64, mediaId, hasAudio: audio.hasAudio, audioInfo: audio.info, finalPrompt: "Merged" } }));
      log(`${tag} XONG \xB7 ${audio.info}`);
      try {
        await import_flow_sdk4.Flow.download({ base64, mimeType: "video/mp4", filename: `PVF_${vid}_${slugify(cur.script.title)}.mp4` });
        log(`${tag} \u0111\xE3 t\u1EA3i video gh\xE9p v\u1EC1 m\xE1y`);
      } catch (e) {
      }
    };
    const runBatchVideo = async (vid, L) => {
      const tag = `[V${vid}]`;
      const preCast = stateRef.current.preCast;
      try {
        let v = stateRef.current.batch.find((x) => x.id === vid);
        for (let w = 0; !v && w < 30; w++) {
          await new Promise((r) => setTimeout(r, 100));
          v = stateRef.current.batch.find((x) => x.id === vid);
        }
        if (!v) throw new Error(`kh\xF4ng th\u1EA5y video ${vid} trong state`);
        let script = v.script;
        if (!script) {
          const locked = preCast ? { narrator: { ...preCast, role: "narrator" } } : {};
          const sc = await L.text(() => generateValidScript(stateRef.current.product, v.scenario, newSeed(), (m) => log(`${tag} ${m}`), locked, stateRef.current.settings.voMode, stateRef.current.settings.narratorMode, stateRef.current.settings.audience));
          script = sc;
          const items = sc.shots.map((sh) => ({ id: `v${vid}s${sh.id}`, shotId: sh.id, status: "pending", retryCount: 0 }));
          patchBatch(vid, (x) => ({ ...x, script: sc, items, status: "assets" }));
          log(`${tag} [SCRIPT] ${sc.title} \u2014 ${sc.shots.map((sh) => sh.lines.map((l) => l.text).join(" / ")).join(" || ")}`);
        } else if (!v.items.length) {
          const sc = script;
          patchBatch(vid, (x) => ({ ...x, items: sc.shots.map((sh) => ({ id: `v${vid}s${sh.id}`, shotId: sh.id, status: "pending", retryCount: 0 })) }));
        }
        await new Promise((r) => setTimeout(r, 80));
        const assetJobs = [];
        script.roles.filter((c) => !c.sheetMediaId).forEach((c) => assetJobs.push(L.img(async () => {
          const r = await genImage(castSheetPrompt(c), [], "16:9");
          const id = c.role === "narrator" ? await saveNamed(r.base64, `PVF_Cast_${slugify(c.name)}_v1.png`) : r.mediaId;
          const cast = { ...c, sheetMediaId: id, sheetBase64: r.base64, version: 1 };
          patchBatch(vid, (x) => ({ ...x, script: x.script ? { ...x.script, roles: x.script.roles.map((rr) => rr.role === c.role ? cast : rr) } : x.script }));
          if (c.role === "narrator") setState((s) => ({ ...s, castLibrary: [cast, ...s.castLibrary.filter((x) => x.sheetMediaId !== id)].slice(0, 12) }));
          log(`${tag} [LOCK] cast ${c.role} \u2192 ${id}`);
        })));
        await Promise.all(assetJobs);
        if (assetJobs.length) await new Promise((r) => setTimeout(r, 80));
        const missScreens = Array.from(new Set(script.shots.filter((sh) => sh.showsPhone).map((sh) => String(sh.screen || "dao")))).filter((k) => !stateRef.current.screens[k]?.mediaId);
        if (missScreens.length) log(`${tag} [LOCK] THI\u1EBEU \u1EA3nh m\xE0n h\xECnh th\u1EADt: ${missScreens.map((k) => screenLabel(k)).join(", ")} \u2014 m\xE0n h\xECnh \u0111i\u1EC7n tho\u1EA1i s\u1EBD do AI t\u1EF1 v\u1EBD`);
        patchBatch(vid, (x) => ({ ...x, status: "render", error: void 0 }));
        await renderAll(batchCtx(vid), (sh) => `v${vid}s${sh.id}`, tag, L.img, L.vid);
        await mergeBatchVideo(vid, L.merge);
      } catch (e) {
        patchBatch(vid, (x) => ({ ...x, status: "failed", error: String(e?.message || e), finishedAt: Date.now() }));
        log(`${tag} L\u1ED6I: ${String(e?.message || e).slice(0, 200)}`);
      }
    };
    const runBatch = () => guard("H\xE0ng lo\u1EA1t", async () => {
      const st = stateRef.current;
      cancelled.current.clear();
      resetFlowBlock();
      setState((s) => ({ ...s, step: "batch", batch: [], log: [] }));
      const nVideos = stateRef.current.settings.batchCount;
      busy(true, `\u0110ang sinh ${nVideos} t\xECnh hu\u1ED1ng\u2026`);
      const avoid = [...stateRef.current.seedHistory, ...stateRef.current.scenarios.map(fingerprint)];
      const scenarios = await generateScenarios(stateRef.current.product, avoid, newSeed(), nVideos);
      if (!scenarios.length) throw new Error("Gemini kh\xF4ng tr\u1EA3 t\xECnh hu\u1ED1ng n\xE0o");
      const batch = scenarios.map((sc) => ({ id: sc.id, scenario: sc, items: [], status: "script", startedAt: Date.now() }));
      setState((s) => ({ ...s, batch, seedHistory: [...s.seedHistory, ...scenarios.map(fingerprint)].slice(-30) }));
      await new Promise((r) => setTimeout(r, 120));
      const L = batchLimits();
      busy(true, `\u0110ang ch\u1EA1y ${batch.length} video song song\u2026`);
      await Promise.allSettled(batch.map((v) => runBatchVideo(v.id, L)));
      const b = stateRef.current.batch;
      log(`[BATCH] xong ${b.filter((x) => x.status === "done").length}/${b.length} video.`);
    });
    const resumeBatch = () => guard("Ti\u1EBFp t\u1EE5c h\xE0ng lo\u1EA1t", async () => {
      cancelled.current.clear();
      resetFlowBlock();
      setState((s) => ({ ...s, step: "batch", batch: s.batch.map((v) => ({ ...v, items: v.items.map((i) => i.status === "keyframe" || i.status === "qc" || i.status === "generating" || i.status === "failed" ? { ...i, status: "pending", error: void 0 } : i) })) }));
      await new Promise((r) => setTimeout(r, 50));
      const todo = stateRef.current.batch.filter((v) => v.status !== "done" || v.error || v.items.some((i) => i.status !== "completed"));
      if (!todo.length) {
        log("[BATCH] kh\xF4ng c\xF2n video d\u1EDF.");
        return;
      }
      const L = batchLimits();
      busy(true, `Ti\u1EBFp t\u1EE5c ${todo.length} video d\u1EDF\u2026`);
      await Promise.allSettled(todo.map((v) => runBatchVideo(v.id, L)));
      const b = stateRef.current.batch;
      log(`[BATCH] xong ${b.filter((x) => x.status === "done").length}/${b.length} video.`);
    });
    const retryBatchItem = (vid, itemId) => guard(`D\u1EF1ng l\u1EA1i clip (video ${vid})`, async () => {
      resetFlowBlock();
      cancelled.current.delete(itemId);
      const ctx = batchCtx(vid);
      const script = ctx.script;
      const it = ctx.getItem(itemId);
      const shot = script.shots.find((sh) => sh.id === it?.shotId);
      if (!shot) return;
      const wipeKf = it?.status === "failed";
      ctx.patch(itemId, { status: "pending", retryCount: 0, error: void 0, base64: void 0, audioInfo: void 0, compositeBase64: void 0, compositeCut: void 0, compositeAudio: void 0, ...wipeKf ? { keyframeMediaId: void 0, keyframeBase64: void 0 } : {} });
      if (shot.insert && shot.overlayHost) ctx.patch(`v${vid}s${shot.overlayHost}`, { compositeBase64: void 0, compositeCut: void 0, compositeAudio: void 0 });
      await new Promise((r) => setTimeout(r, 80));
      const loc = shot.location || "A";
      const same = script.shots.filter((x) => (x.location || "A") === loc);
      const refShot = same.find((x) => !x.insert && !x.vo && (x.roles || []).length > 0) || same.find((x) => !x.vo && (x.roles || []).length > 0) || same.find((x) => !x.vo) || same[0];
      const kf1 = refShot && refShot.id !== shot.id ? ctx.getItem(`v${vid}s${refShot.id}`)?.keyframeMediaId : void 0;
      const kf = await ensureKeyframe(ctx, shot, itemId, kf1, `[V${vid}]`);
      await runVideo(ctx, shot, itemId, kf, `[V${vid}]`);
      await composeAll(ctx, (sh) => `v${vid}s${sh.id}`, `[V${vid}]`);
    });
    const remergeBatch = (vid) => guard(`Gh\xE9p l\u1EA1i video ${vid}`, () => mergeBatchVideo(vid, makeLimiter(1)));
    const restore = () => guard("Kh\xF4i ph\u1EE5c \u0111\u1EE3t d\u1EDF", async () => {
      const s = await idbGet(SESSION_KEY);
      if (!s?.state) throw new Error("kh\xF4ng c\xF3 phi\xEAn l\u01B0u");
      const fix = (items) => (items || []).map((i) => i.status === "keyframe" || i.status === "qc" || i.status === "generating" ? { ...i, status: "pending" } : i);
      setState({ ...INITIAL_STATE, ...s.state, isBusy: false, busyLabel: "", items: fix(s.state.items), batch: (s.state.batch || []).map((v) => ({ ...v, items: fix(v.items) })) });
      if (s.state.fontBytes) {
        resetFont();
        setState((x) => x);
      }
      setSaved(null);
      log(`[RESUME] \u0111\xE3 kh\xF4i ph\u1EE5c phi\xEAn l\u01B0u l\xFAc ${s.at}. B\u1EA5m "Ti\u1EBFp t\u1EE5c" \u0111\u1EC3 d\u1EF1ng n\u1ED1t ph\u1EA7n thi\u1EBFu.`);
    });
    const discardSaved = () => {
      setSaved(null);
      idbSet(SESSION_KEY, null).catch(() => {
      });
    };
    const toSilent = () => {
      setState((s) => ({ ...s, settings: { ...s.settings, audioMode: "silent", subtitles: true } }));
      log("[AUDIO] chuy\u1EC3n sang c\xE2m + ph\u1EE5 \u0111\u1EC1 (c\xE1c clip \u0111\xE3 d\u1EF1ng v\u1EABn gi\u1EEF; gh\xE9p s\u1EBD b\u1ECF ti\u1EBFng).");
    };
    const newVideo = () => {
      cancelled.current.clear();
      setState((s) => ({ ...s, step: "scenario", chosen: void 0, script: void 0, approvals: { roles: {} }, items: [], log: [] }));
    };
    return /* @__PURE__ */ import_react3.default.createElement("div", { className: "min-h-screen bg-black text-white font-sans p-6 flex flex-col gap-6" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "flex items-center gap-3" }, /* @__PURE__ */ import_react3.default.createElement("span", { className: "material-symbols-outlined text-[#ff9a0d]" }, "movie"), /* @__PURE__ */ import_react3.default.createElement("div", null, /* @__PURE__ */ import_react3.default.createElement("p", { className: "font-black uppercase tracking-widest text-[14px]" }, "Unich Video Factory"), /* @__PURE__ */ import_react3.default.createElement("p", { className: "text-[10px] text-white/40 uppercase tracking-widest" }, state.product.name))), /* @__PURE__ */ import_react3.default.createElement(StepIndicator, { currentStep: state.step }), saved && !state.items.length && !state.batch.length && /* @__PURE__ */ import_react3.default.createElement("div", { className: "bg-orange-900/30 border border-orange-500/40 rounded-xl p-3 flex items-center justify-between gap-3 flex-wrap" }, /* @__PURE__ */ import_react3.default.createElement("p", { className: "text-[11px] text-orange-100" }, "C\xF3 \u0111\u1EE3t d\u1EDF l\u01B0u l\xFAc ", saved.at, " (", saved.n, ' video). Kh\xF4i ph\u1EE5c r\u1ED3i b\u1EA5m "Ti\u1EBFp t\u1EE5c" \u0111\u1EC3 d\u1EF1ng n\u1ED1t ph\u1EA7n thi\u1EBFu, kh\xF4ng l\xE0m l\u1EA1i clip \u0111\xE3 xong.'), /* @__PURE__ */ import_react3.default.createElement("div", { className: "flex gap-2" }, /* @__PURE__ */ import_react3.default.createElement(PillButton, { variant: "solid", disabled: state.isBusy, onClick: restore }, "Kh\xF4i ph\u1EE5c"), /* @__PURE__ */ import_react3.default.createElement(PillButton, { variant: "outline", onClick: discardSaved }, "B\u1ECF"))), error && /* @__PURE__ */ import_react3.default.createElement("div", { className: "bg-red-900/30 border border-red-500/40 rounded-xl p-3 flex items-start justify-between gap-3" }, /* @__PURE__ */ import_react3.default.createElement("pre", { className: "text-[11px] text-red-200 whitespace-pre-wrap flex-1" }, error), /* @__PURE__ */ import_react3.default.createElement("button", { className: "text-red-300 text-[11px] underline", onClick: () => setError(null) }, "\u0110\xF3ng")), state.step === "product" && /* @__PURE__ */ import_react3.default.createElement(ProductForm, { product: state.product, screens: state.screens, busy: state.isBusy, onChange: (p) => setState((s) => ({ ...s, product: p })), onPickScreen: pickScreen, onClearScreen: clearScreen, onNext: goScenario }), state.step === "scenario" && /* @__PURE__ */ import_react3.default.createElement(
      ScenarioForm,
      {
        product: state.product,
        scenarios: state.scenarios,
        chosen: state.chosen,
        script: state.script,
        settings: state.settings,
        busy: state.isBusy,
        busyLabel: state.busyLabel,
        lockedCast: state.script ? state.script.roles.find((r) => state.approvals.roles[r.role]) : void 0,
        castLibrary: state.castLibrary,
        preCast: state.preCast,
        onPreCastLibrary: preCastLibrary,
        onPreCastPick: (c) => setState((s) => ({ ...s, preCast: c })),
        onGenerate: makeScenarios,
        onPick: (sc) => setState((s) => ({ ...s, chosen: sc })),
        onRandom: randomPick,
        onWrite: writeScript,
        onScript: (sc) => setState((s) => ({ ...s, script: sc })),
        onSettings: (st) => setState((s) => ({ ...s, settings: st })),
        onBack: () => setState((s) => ({ ...s, step: "product" })),
        onNext: startAuto,
        onLock: () => setState((s) => ({ ...s, step: "lock" })),
        onBatch: () => setState((s) => ({ ...s, step: "batch" }))
      }
    ), state.step === "batch" && /* @__PURE__ */ import_react3.default.createElement(BatchView, { batch: state.batch, busy: state.isBusy, busyLabel: state.busyLabel, log: state.log, settings: state.settings, preCast: state.preCast, onRun: runBatch, onBack: () => setState((s) => ({ ...s, step: "scenario" })), onResume: resumeBatch, onRetry: retryBatchItem, onMerge: remergeBatch }), state.step === "lock" && state.script && /* @__PURE__ */ import_react3.default.createElement(
      LockView,
      {
        script: state.script,
        screens: state.screens,
        approvals: state.approvals,
        castLibrary: state.castLibrary,
        fontName: state.fontName,
        busy: state.isBusy,
        busyLabel: state.busyLabel,
        log: state.log,
        onApproveRole: approveRole,
        onRegenAll: regenAll,
        onRegenCast: regenCast,
        onLibraryCast: libraryCast,
        onUseCast: useCast,
        onSaveToggle: saveToggle,
        onPickScreen: pickScreen,
        onFont: loadFont,
        onBack: () => setState((s) => ({ ...s, step: "scenario" })),
        onStart: start
      }
    ), state.step === "render" && state.script && /* @__PURE__ */ import_react3.default.createElement(
      ProcessingView,
      {
        items: state.items,
        script: state.script,
        screens: state.screens,
        settings: state.settings,
        busy: state.isBusy,
        busyLabel: state.busyLabel,
        log: state.log,
        onRetry: retry,
        onStop: stop,
        onMerge: merge,
        onSilent: toSilent,
        onBack: () => setState((s) => ({ ...s, step: "lock" })),
        onNew: newVideo,
        onResume: resumeSingle
      }
    ));
  }
  var App_default = App;
  return __toCommonJS(App_exports);
})();

PVF.VERSION = "V44 orange 19/09 22:10"; window.PVF = PVF;
