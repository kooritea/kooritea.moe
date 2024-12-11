import{a as getDefaultExportFromCjs,c as commonjsGlobal}from"./vander_commonjsHelpers-87174ba5.js";function _mergeNamespaces(r,i){for(var a=0;a<i.length;a++){const o=i[a];if(typeof o!="string"&&!Array.isArray(o)){for(const p in o)if(p!=="default"&&!(p in r)){const y=Object.getOwnPropertyDescriptor(o,p);y&&Object.defineProperty(r,p,y.get?y:{enumerable:!0,get:()=>o[p]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}var distExports={},dist={get exports(){return distExports},set exports(r){distExports=r}};(function(module,exports){(function(i,a){module.exports=a()})(commonjsGlobal,function(){return c=[function(module,exports,__webpack_require__){(function(i,a){module.exports=a()})(0,function(){return v={"./ sync recursive":function(module,exports){eval(`function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./ sync recursive";

//# sourceURL=webpack://ABUtils/._sync?`)},"./index.ts":function(module,exports,__webpack_require__){eval(`var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (factory) {
    if ( true && typeof module.exports === "object") {
        var v = factory(__webpack_require__("./ sync recursive"), exports);
        if (v !== undefined) module.exports = v;
    }
    else if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.concat = exports.bufferToArrayBuffer = exports.sliceToZero = exports.toArrayBuffer = exports.toString = exports.utf16beToUTF16le = exports.writeHex = exports.writeInt = exports.readInt = void 0;
    var getView = function (buffer, view) {
        if (buffer.byteLength % view !== 0) {
            throw new Error("param view error: buffer.byteLength % view !== 0");
        }
        switch (view) {
            case 1:
                return new Uint8Array(buffer);
            case 2:
                return new Uint16Array(buffer.slice(0, buffer.byteLength - (buffer.byteLength % 2)));
            case 4:
                return new Uint32Array(buffer);
            default:
                throw new Error("param view error");
        }
    };
    /**
     * 读取10进制正整数
     * @param buffer
     * @param start 从0开始,单位为view，比如view为4的时候，start为1表示从第5个字节(第33个二进制位)开始读取长度len*view个字节
     * @param len 所读整数占的长度，占位越长可能的值越大.
     * @param view 将多少字节视为一个单位，分别对应Uint8Array|Uint16Array|Uint32Array
     */
    exports.readInt = function (buffer, start, len, view) {
        if (view === void 0) { view = 1; }
        var bufferView = getView(buffer, view);
        var result = 0;
        for (var i = len - 1; i >= 0; i--) {
            result += Math.pow(Math.pow(2, 8 * view), len - i - 1) * bufferView[start + i];
        }
        return result;
    };
    /**
     * 写入无符号10进制正整数
     * 会直接修改传入的arraybuffer
     * 请注意，如果写入长度大于一，将以大端在左的方式写入
     * @param buffer ArrayBuffer或bufferView，传入bufferView时view参数无效
     * @param start 从0开始,单位为view，比如view为4的时候，start为1表示从第5个字节(第33个二进制位)开始读取长度len*view个字节
     * @param len 该整数所占长度
     * @param value 10进制正整数 最大可写入的整数为2^(8*view*len)-1
     * @param view 将多少字节视为一个单位，默认为Uint8Array，分别对应Uint8Array|Uint16Array|Uint32Array
     * @return ArrayBuffer 返回传入的arraybuffer引用
     */
    exports.writeInt = function (buffer, start, len, value, view) {
        if (view === void 0) { view = 1; }
        var bufferView;
        if (buffer instanceof ArrayBuffer) {
            bufferView = getView(buffer, view);
        }
        else {
            bufferView = buffer;
        }
        if (value > (Math.pow(2, len * 8 * view) - 1)) {
            throw new Error("Cannot write Int greater than 2^" + len * 8 + "-1: " + value);
        }
        if (bufferView.length < start + len) {
            throw new Error("Cannot write an Int of length " + len + " at position " + start + ",because the input bufferView length is " + bufferView.length);
        }
        var i = 0;
        while (i < len) {
            bufferView[start + i] = value / Math.pow(Math.pow(2, 8 * view), len - i - 1);
            i++;
        }
        return buffer;
    };
    exports.writeHex = function (target, start, values) {
        var view = new Uint8Array(target);
        for (var i = start; i < target.byteLength; i++) {
            view[i] = values[i - start];
        }
        return target;
    };
    exports.utf16beToUTF16le = function (utf16be) {
        var utf16le = new Uint8Array(utf16be.length);
        for (var i = 0; i < utf16be.length + 2; i = i + 2) {
            utf16le[i] = utf16be[i + 1];
            utf16le[i + 1] = utf16be[i];
        }
        return utf16le;
    };
    /**
     * 此方法会清除位于前面的字符顺序标记(只有utf16或传入Uint16Array才可能会有)
     * @param arrayBuffer ArrayBuffer或者view
     * @param encode 传入view时该项无效，ascii使用Uint8Array utf16使用Uint16Array
     * @param cleanZero 是否清除非结尾的0,结尾的0会被删除
     */
    exports.toString = function (arrayBuffer, encode, cleanZero) {
        if (encode === void 0) { encode = 'ascii'; }
        if (cleanZero === void 0) { cleanZero = false; }
        var dataString = "";
        var bufferView;
        if (arrayBuffer instanceof ArrayBuffer) {
            if (encode === 'ascii') {
                bufferView = getView(arrayBuffer, 1);
            }
            else if (encode === 'utf16le') {
                bufferView = getView(arrayBuffer, 2);
                if (exports.readInt(arrayBuffer, 0, 2, 1) === 65534) { // ff fe
                    bufferView = bufferView.slice(1);
                }
                // utf16 要去除前两个判断高地位顺序的字节
            }
            else if (encode === 'utf16be') {
                bufferView = exports.utf16beToUTF16le(getView(arrayBuffer, 1));
                bufferView = getView(bufferView.buffer, 2);
                if (exports.readInt(arrayBuffer, 0, 2, 1) === 65279) {
                    bufferView = bufferView.slice(1);
                }
            }
            else {
                throw new Error("unsupport encode: " + encode);
            }
        }
        else {
            bufferView = arrayBuffer;
            if (bufferView instanceof Uint16Array && (bufferView[0] === 0xFFFE || bufferView[0] === 0xFEFF)) {
                bufferView = bufferView.slice(1);
            }
        }
        for (var i = 0; i < bufferView.length; i++) {
            if (bufferView[i] === 0 && cleanZero && i < bufferView.length - 2) {
                continue;
            }
            if (i >= bufferView.length - 2 && bufferView[i] === 0) {
                continue;
            }
            dataString += String.fromCharCode(bufferView[i]);
        }
        // console.log(dataString)
        return dataString;
    };
    /**
     * 字符串转arrayBuffer
     * utf16编码时会添加字节顺序标记
     * js默认使用小端在前(utf16le)
     * @param str
     * @param encode
     * @param addBOM default false 添加fffe或feff的字节顺序控制符(只用utf16le/utf16be编码有效) 当str不为空字符串才有效
     * @param addEnd default false 添加0或00的结束控制字符
     * @param fixLen 固定输出的字节长度，长度不足时补0，超出时报错
     */
    exports.toArrayBuffer = function (str, encode, addBOM, addEnd, fixLen) {
        if (addBOM === void 0) { addBOM = false; }
        if (addEnd === void 0) { addEnd = false; }
        var bufferView;
        if (encode === 'ascii') {
            bufferView = new Uint8Array(str.length + (addEnd ? 1 : 0));
            for (var i = 0; i < str.length; i++) {
                exports.writeInt(bufferView, i, 1, str.charCodeAt(i));
            }
        }
        else if (encode === 'utf16le') {
            // 小端在前
            bufferView = new Uint8Array(str.length * 2 + (addBOM ? 2 : 0) + (addEnd ? 2 : 0));
            if (addBOM && str.length > 0) {
                bufferView[0] = 0xFE;
                bufferView[1] = 0xFF;
            }
            // 因为writeInt写入是大端在前，之后统一反转
            for (var i = 0; i < str.length; i++) {
                exports.writeInt(bufferView, i * 2 + 2, 2, str.charCodeAt(i));
            }
            bufferView = exports.utf16beToUTF16le(bufferView);
        }
        else if (encode === 'utf16be') {
            // 大端在前
            bufferView = new Uint8Array(str.length * 2 + (addBOM ? 2 : 0) + (addEnd ? 2 : 0));
            if (addBOM && str.length > 0) {
                bufferView[0] = 0xFE;
                bufferView[1] = 0xFF;
            }
            // 因为之后需要le转换
            for (var i = 0; i < str.length; i++) {
                exports.writeInt(bufferView, i * 2 + 2, 2, str.charCodeAt(i));
            }
        }
        else {
            throw new Error("unsupport encode: " + encode);
        }
        if (typeof fixLen === 'number') {
            if (bufferView.buffer.byteLength <= fixLen) {
                return exports.concat(bufferView.buffer, new ArrayBuffer(fixLen - bufferView.buffer.byteLength));
            }
            else {
                throw new Error("String Buffer length is greater than fixLen");
            }
        }
        else {
            return bufferView.buffer;
        }
    };
    /**
     * 从指定地方开始截取到0x00或0x0000为止
     * 不会清除字节顺序标记
     * 返回的arraybuffer不包括最后的0x00 或0x0000
     * @param arrayBuffer
     * @param start
     * @param encode
     */
    exports.sliceToZero = function (arrayBuffer, start, encode) {
        var bufferView;
        if (encode === 'ascii') {
            bufferView = getView(arrayBuffer, 1);
        }
        else if (encode === 'utf16') {
            bufferView = getView(arrayBuffer, 2);
        }
        else {
            throw new Error('unsupport encode: ' + encode);
        }
        for (var i = start; i < bufferView.length; i++) {
            if (bufferView[i] === 0) {
                return bufferView.slice(start, i).buffer;
            }
        }
        return bufferView.slice(start).buffer;
    };
    /**
     *
     * @param buffer NODEJS Buffer
     */
    exports.bufferToArrayBuffer = function (buffer) {
        var arrayBuffer = new ArrayBuffer(buffer.length);
        var bufferView = new Uint8Array(arrayBuffer);
        for (var i = 0; i < buffer.length; ++i) {
            bufferView[i] = buffer[i];
        }
        return arrayBuffer;
    };
    exports.concat = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var length = 0;
        for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
            var arr = args_1[_a];
            length += arr.byteLength;
        }
        var result = new ArrayBuffer(length);
        var resultView = new Uint8Array(result);
        var offset = 0;
        for (var _b = 0, args_2 = args; _b < args_2.length; _b++) {
            var item = args_2[_b];
            if (item instanceof ArrayBuffer) {
                var view = new Uint8Array(item);
                for (var i = 0; i < view.length; i++) {
                    resultView[i + offset] = view[i];
                }
                offset += view.length;
            }
        }
        return result;
    };
});


//# sourceURL=webpack://ABUtils/./index.ts?`)}},w={},__webpack_require__.m=v,__webpack_require__.c=w,__webpack_require__.d=function(r,i,a){__webpack_require__.o(r,i)||Object.defineProperty(r,i,{enumerable:!0,get:a})},__webpack_require__.r=function(r){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},__webpack_require__.t=function(r,i){if(1&i&&(r=__webpack_require__(r)),8&i||4&i&&typeof r=="object"&&r&&r.__esModule)return r;var a=Object.create(null);if(__webpack_require__.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:r}),2&i&&typeof r!="string")for(var o in r)__webpack_require__.d(a,o,function(p){return r[p]}.bind(null,o));return a},__webpack_require__.n=function(r){var i=r&&r.__esModule?function(){return r.default}:function(){return r};return __webpack_require__.d(i,"a",i),i},__webpack_require__.o=function(r,i){return Object.prototype.hasOwnProperty.call(r,i)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s="./index.ts");function __webpack_require__(r){if(w[r])return w[r].exports;var i=w[r]={i:r,l:!1,exports:{}};return v[r].call(i.exports,i,i.exports,__webpack_require__),i.l=!0,i.exports}var v,w})},function(r,i,a){Object.defineProperty(i,"__esModule",{value:!0});var o=a(2);i.default=o.MP3Reader},function(r,i,a){Object.defineProperty(i,"__esModule",{value:!0}),i.MP3Reader=void 0;var o=a(3),p=a(4),y=a(0),n=(s.prototype.updateAlbumPicture=function(b){var h=this.ID3V2.findLabel("APIC");h?h.content.pictureBuffer=b:this.ID3V2.insertPicture(b)},s.prototype.export=function(){return y.concat(this.ID3V2.export(),this.body,this.ID3V1?this.ID3V1.export():new ArrayBuffer(0))},s);function s(b){this.ID3V2=new o.ID3V2Frame(b),this.body=b.slice(this.ID3V2.size+10);try{this.ID3V1=new p.ID3V1Frame(b),this.body=this.body.slice(0,this.body.byteLength-128)}catch(h){console.error(h)}}i.MP3Reader=n},function(r,i,a){var o,p=this&&this.__extends||(o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(f,u){f.__proto__=u}||function(f,u){for(var _ in u)u.hasOwnProperty(_)&&(f[_]=u[_])})(e,t)},function(e,t){function f(){this.constructor=e}o(e,t),e.prototype=t===null?Object.create(t):(f.prototype=t.prototype,new f)}),y=this&&this.__spreadArrays||function(){for(var e=0,t=0,f=arguments.length;t<f;t++)e+=arguments[t].length;for(var u=Array(e),_=0,t=0;t<f;t++)for(var l=arguments[t],D=0,F=l.length;D<F;D++,_++)u[_]=l[D];return u};Object.defineProperty(i,"__esModule",{value:!0}),i.ID3V2Frame=void 0;var n=a(0),s=(b.prototype.load=function(e,t){this.frameID=n.toString(e.slice(t,t+4)),this.size=n.readInt(e,t+4,4),this.flags=n.readInt(e,t+8,2),this.content=this.decodeContent(e.slice(t+10,t+10+this.size)),this.raw=e.slice(t,t+this.size+10)},b.prototype.decodeContent=function(e){},b.prototype.decodeTextContent=function(e){var t=n.readInt(e,0,1);e=e.slice(1);try{return{encode:t,text:n.toString(e,this.getEncodeType(t),!0)}}catch{return{encode:t,text:e.toString()}}},b.prototype.toHeaderArratBuffer=function(){return n.concat(n.toArrayBuffer(this.frameID,"ascii"),n.writeInt(new ArrayBuffer(4),0,4,this.size),n.writeInt(new ArrayBuffer(2),0,2,this.flags))},b.prototype.toArratBuffer=function(){return this.raw},b.prototype.getEncodeType=function(e){switch(e){case 0:return"ascii";case 1:return"utf16le";case 2:return"utf16be";default:throw new Error("unsupport encode: "+e)}},b);function b(){}var h,k=(p(g,h=s),g.prototype.decodeContent=function(e){var t=n.readInt(e,0,1);e=e.slice(1);var f=n.sliceToZero(e,0,"ascii"),u=n.toString(f,"ascii");e=e.slice(f.byteLength+1);var _=n.readInt(e,0,1,1);e=e.slice(1);var l=n.toString(n.sliceToZero(e,0,t===0?"ascii":"utf16"),this.getEncodeType(t));return{descriptionEncode:t,mime:u,pictureType:_,description:l,pictureBuffer:e=e.slice(l.length*(t+1)+(t+1))}},g.prototype.toArratBuffer=function(){var e=this.toBodyArratBuffer();this.size=e.byteLength;var t=this.toHeaderArratBuffer();return n.concat(t,e)},g.prototype.toBodyArratBuffer=function(){return n.concat(n.writeInt(new ArrayBuffer(1),0,1,this.content.descriptionEncode),n.toArrayBuffer(this.content.mime,"ascii",!1,!0),n.writeInt(new ArrayBuffer(1),0,1,this.content.pictureType),this.content.description?n.toArrayBuffer(this.content.description,this.getEncodeType(this.content.descriptionEncode),!1,!0):new ArrayBuffer(1),this.content.pictureBuffer)},g.create=function(e,t){t===void 0&&(t="");var f=new g,u="";switch(n.readInt(e,0,2)){case 35152:u="image/png";break;case 65496:u="image/jpeg";break;default:u="image/jpeg"}return f.frameID="APIC",f.flags=0,f.content={descriptionEncode:0,mime:u,pictureType:3,description:t,pictureBuffer:e},f.size=f.toBodyArratBuffer().byteLength,f},g);function g(){return h!==null&&h.apply(this,arguments)||this}var E,M=(p(A,E=s),A.prototype.decodeContent=function(e){var t=n.readInt(e,0,1);e=e.slice(1);var f=t===0?"ascii":"utf16",u=t===0?1:2,_=n.toString(e.slice(0,3),"ascii");e=e.slice(3);var l=n.sliceToZero(e,0,f);return e=e.slice(l.byteLength+u),{encode:t,language:_,shortContent:n.toString(l,this.getEncodeType(t),!0),text:n.toString(e,this.getEncodeType(t),!0)}},A.prototype.toArratBuffer=function(){var e=n.concat(n.writeInt(new ArrayBuffer(1),0,1,this.content.encode),n.toArrayBuffer(this.content.language,"ascii",!1,!1),n.toArrayBuffer(this.content.shortContent,this.getEncodeType(this.content.encode),!0,!0),n.toArrayBuffer(this.content.text,this.getEncodeType(this.content.encode),!0,!0));return this.size=e.byteLength,n.concat(this.toHeaderArratBuffer(),e)},A);function A(){return E!==null&&E.apply(this,arguments)||this}var V,T=(p(m,V=s),m.prototype.decodeContent=function(e){var t=n.readInt(e,0,1);e=e.slice(1);var f=t===0?"ascii":"utf16",u=t===0?1:2,_=n.sliceToZero(e,0,f),l=n.sliceToZero(e.slice(_.byteLength+u),0,f);return{encode:t,key:n.toString(_,this.getEncodeType(t)),value:n.toString(l,this.getEncodeType(t))}},m.prototype.toArratBuffer=function(){var e=n.concat(n.writeInt(new ArrayBuffer(1),0,1,this.content.encode),n.toArrayBuffer(this.content.key,this.getEncodeType(this.content.encode),!0,!0),n.toArrayBuffer(this.content.value,this.getEncodeType(this.content.encode),!0,!0));return this.size=e.byteLength,n.concat(this.toHeaderArratBuffer(),e)},m);function m(){return V!==null&&V.apply(this,arguments)||this}var I,C=(p(B,I=s),B.prototype.decodeContent=function(e){return this.decodeTextContent(e)},B.prototype.toArratBuffer=function(){var e=n.concat(n.writeInt(new ArrayBuffer(1),0,1,this.content.encode),n.toArrayBuffer(this.content.text,this.getEncodeType(this.content.encode),!0,!0));return this.size=e.byteLength,n.concat(this.toHeaderArratBuffer(),e)},B);function B(){return I!==null&&I.apply(this,arguments)||this}var O=(x.prototype.insertPicture=function(e,t){t===void 0&&(t="");var f=k.create(e,t);this.labels.push(f)},x.prototype.export=function(){var e=n.concat.apply(void 0,y([n.toArrayBuffer("ID3","ascii"),n.writeInt(new ArrayBuffer(1),0,1,this.version),n.writeInt(new ArrayBuffer(1),0,1,this.revision),n.writeInt(new ArrayBuffer(1),0,1,this.flag),new ArrayBuffer(4)],this.labels.map(function(l){return l.toArratBuffer()})));this.size=e.byteLength-10;var t=Math.floor(this.size/2097152);n.writeInt(e,6,1,t);var f=Math.floor((this.size-2097152*t)/16384);n.writeInt(e,7,1,f);var u=Math.floor((this.size-2097152*t-16384*f)/128);n.writeInt(e,8,1,u);var _=Math.floor(this.size-2097152*t-16384*f-128*u);return n.writeInt(e,9,1,_),e},x.prototype.findLabel=function(e){for(var t=0,f=this.labels;t<f.length;t++){var u=f[t];if(u.frameID===e)return u}},x);function x(e){if(this.labels=[],n.toString(e.slice(0,3))!=="ID3")throw new Error("ID3V2 frame not found");if(this.version=n.readInt(e,3,1),this.revision=n.readInt(e,4,1),this.version!==3)throw new Error("unspport ID3V2 version: "+this.version);this.mp3=e,this.flag=n.readInt(e,5,1);for(var t=new Uint8Array(e.slice(6,10)),f=0;f<t.byteLength;f++)t[f]=127&t[f];this.size=2097152*t[0]+16384*t[1]+128*t[2]+t[3];for(var u=10;u<10+this.size&&n.readInt(e,u,4)!==0;){var _=n.toString(e.slice(u,u+4)),l=void 0;(l=new(_==="TXXX"?T:_==="APIC"?k:_==="COMM"?M:_[0]==="T"?C:s)).load(e,u),this.labels.push(l),u+=l.size+10}this.endOffset=u}i.ID3V2Frame=O},function(r,i,a){Object.defineProperty(i,"__esModule",{value:!0}),i.ID3V1Frame=void 0;var o=a(0),p=(y.prototype.export=function(){return o.concat(o.toArrayBuffer("TAG","ascii",!1,!1,3),o.toArrayBuffer(this.title,"ascii",!1,!1,30),o.toArrayBuffer(this.artist,"ascii",!1,!1,30),o.toArrayBuffer(this.album,"ascii",!1,!1,30),o.toArrayBuffer(this.year,"ascii",!1,!1,4),o.toArrayBuffer(this.comment,"ascii",!1,!1,this.reserved===0?28:30),this.reserved===0?o.writeInt(new ArrayBuffer(1),0,1,0):new ArrayBuffer(0),this.reserved===0?o.writeInt(new ArrayBuffer(1),0,1,this.track):new ArrayBuffer(0),o.writeInt(new ArrayBuffer(1),0,1,this.genre))},y);function y(n){var s=n.slice(n.byteLength-128);if(o.toString(s.slice(0,3))!=="TAG")throw new Error("ID3V1 frame not found");this.title=o.toString(s.slice(3,33),"ascii",!0),this.artist=o.toString(s.slice(33,63),"ascii",!0),this.album=o.toString(s.slice(63,93),"ascii",!0),this.year=o.toString(s.slice(93,97),"ascii",!0),this.comment=o.toString(s.slice(97,125),"ascii",!0),this.reserved=o.readInt(s,125,1),this.reserved===0?this.track=o.readInt(s,126,1):(this.track=0,this.comment=o.toString(s.slice(97,127),"ascii",!0)),this.genre=o.readInt(s,127,1)}i.ID3V1Frame=p}],d={},__webpack_require__.m=c,__webpack_require__.c=d,__webpack_require__.d=function(r,i,a){__webpack_require__.o(r,i)||Object.defineProperty(r,i,{enumerable:!0,get:a})},__webpack_require__.r=function(r){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},__webpack_require__.t=function(r,i){if(1&i&&(r=__webpack_require__(r)),8&i||4&i&&typeof r=="object"&&r&&r.__esModule)return r;var a=Object.create(null);if(__webpack_require__.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:r}),2&i&&typeof r!="string")for(var o in r)__webpack_require__.d(a,o,function(p){return r[p]}.bind(null,o));return a},__webpack_require__.n=function(r){var i=r&&r.__esModule?function(){return r.default}:function(){return r};return __webpack_require__.d(i,"a",i),i},__webpack_require__.o=function(r,i){return Object.prototype.hasOwnProperty.call(r,i)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=1).default;function __webpack_require__(r){if(d[r])return d[r].exports;var i=d[r]={i:r,l:!1,exports:{}};return c[r].call(i.exports,i,i.exports,__webpack_require__),i.l=!0,i.exports}var c,d})})(dist);const index=getDefaultExportFromCjs(distExports),index$1=_mergeNamespaces({__proto__:null,default:index},[distExports]);export{index$1 as i};
