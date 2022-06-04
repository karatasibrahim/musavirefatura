<template>
  <div
    style="
      margin-left: 0.6in;
      margin-right: 0.6in;
      margin-top: 0.79in;
      margin-bottom: 0.79in;
    "
    id="mainbody"
  >
    <table
      cellpadding="0px"
      width="800"
      cellspacing="0px"
      border="0"
      style="border-color: blue"
    >
      <tbody>
        <tr valign="top">
          <td width="40%">
            <br />
            <hr />
            <table width="100%" border="0" align="center">
              <tbody>
                <tr align="left">
                  <td align="left">
                    {{ person.person.name + " " + person.person.surname }}<br />
                  </td>
                </tr>
                <tr align="left">
                  <td align="left">
                    {{ person.adress.adress }}
                  </td>
                </tr>
                <tr align="left">
                  <td align="left">
                    Tel: {{ person.adress.Telefon }} Fax:
                    {{ person.adress.Faks }}&nbsp;
                  </td>
                </tr>
                <tr align="left">
                  <td>Web Sitesi:{{ person.adress.Website }}</td>
                </tr>
                <tr align="left">
                  <td>E-Posta: {{ person.adress.EPosta }}</td>
                </tr>
                <tr align="left">
                  <td align="left">
                    Vergi Dairesi: {{ person.person.vergiD }}
                  </td>
                </tr>
                <tr align="left">
                  <td>VKN: {{ person.person.vkn }}</td>
                </tr>
                <tr align="left">
                  <td>TCKN: {{ person.person.tckn }}</td>
                </tr>
              </tbody>
            </table>
            <hr />
          </td>
          <td valign="middle" align="center" width="20%">
            <br /><br /><img
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4QBoRXhpZgAASUkqAAgAAAADABIBAwABAAAAAQAAADEBAgAQAAAAMgAAAGmHBAABAAAAQgAAAAAAAABTaG90d2VsbCAwLjIyLjAAAgACoAkAAQAAAKYBAAADoAkAAQAAAKYBAAAAAAAA/+EJ9Gh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8APD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNC40LjAtRXhpdjIiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyIgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iIGV4aWY6UGl4ZWxYRGltZW5zaW9uPSI0MjIiIGV4aWY6UGl4ZWxZRGltZW5zaW9uPSI0MjIiIHRpZmY6SW1hZ2VXaWR0aD0iNDIyIiB0aWZmOkltYWdlSGVpZ2h0PSI0MjIiIHRpZmY6T3JpZW50YXRpb249IjEiLz4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8P3hwYWNrZXQgZW5kPSJ3Ij8+/9sAQwADAgIDAgIDAwMDBAMDBAUIBQUE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"
              alt="E-Fatura Logo"
              align="middle"
              style="width: 91px"
            />
            <h1 align="center">
              <span style="font-weight: bold">e-Arşiv Fatura</span>
            </h1>
          </td>
          <td width="5%"></td>
          <td align="right">
            <div id="qrcode"></div>
            <div
              style="
                visibility: hidden;
                height: 20px;
                width: 20px;
                display: none;
              "
              id="qrvalue"
            >
              {"tur":"E-Fatura", "VKNTCKN":"8200152638", "unvan":"VURAL TANIR ",
              "senaryo":"EARSIVFATURA", "tip":"SATIS", "tarih":"2022-03-08",
              "no":"GIB2022000000017",
              "ETTN":"4a539c92-e7cf-412b-adeb-eb37e5f193c2",
              "malHizmetKDV(18)":68.64, "hesaplananKDV(18)":12.35,
              "malHizmet":68.64, "vergidahil":"80.99", "odenecek":"80.99"}
            </div>
            <img
              :src="logo.img"
              alt="E-Fatura Logo"
              align="middle"
              style="width: 91px"
              :width="logo.w"
              :height="logo.h"
            />
          </td>
        </tr>
        <tr valign="top" style="height: 118px">
          <td valign="bottom" align="right" width="40%">
            <table border="0" align="left" id="customerPartyTable">
              <tbody>
                <tr style="height: 71px">
                  <td>
                    <hr />
                    <table border="0" align="center">
                      <tbody>
                        <tr>
                          <td align="left" style="width: 469px">
                            <span style="font-weight: bold">SAYIN</span>
                          </td>
                        </tr>
                        <tr>
                          <td align="left" style="width: 469px">
                            {{ person.person.Unvan }}.<br />
                          </td>
                        </tr>
                        <tr>
                          <td align="left" style="width: 469px">
                            {{ person.adress.adress }} No:{{
                              person.adress.BinaNo
                            }}<br />Kapı No:{{ person.adress.DaireNo }}<br />{{
                              person.adress.city
                            }}/{{ person.adress.İlce }}/Türkiye
                          </td>
                        </tr>
                        <tr align="left">
                          <td>Web Sitesi:{{ person.adress.Website }}</td>
                        </tr>
                        <tr align="left">
                          <td>E-Posta:{{ person.adress.EPosta }}</td>
                        </tr>
                        <tr align="left">
                          <td align="left" style="width: 469px">
                            Tel:{{ person.adress.Telefon }} Fax:
                            {{ person.adress.Faks }} &nbsp;
                          </td>
                        </tr>
                        <tr align="left">
                          <td>Vergi Dairesi: {{ person.person.vergiD }}</td>
                        </tr>
                        <tr align="left">
                          <td>VKN: {{ person.person.vkn }}</td>
                        </tr>
                      </tbody>
                    </table>
                    <hr />
                  </td>
                </tr>
              </tbody>
            </table>
            <br />
          </td>
          <td align="right" width="20%"></td>
          <td colspan="2" valign="bottom" align="center" width="40%">
            <table id="despatchTable" border="1">
              <tbody>
                <tr>
                  <td align="left" style="width: 105px">
                    <span style="font-weight: bold">&Ouml;zelleştirme No:</span>
                  </td>
                  <td align="left" style="width: 110px">TR1.2</td>
                </tr>
                <tr style="height: 13px">
                  <td align="left">
                    <span style="font-weight: bold">Senaryo:</span>
                  </td>
                  <td align="left">EARSIVFATURA</td>
                </tr>
                <tr style="height: 13px">
                  <td align="left">
                    <span style="font-weight: bold">Fatura Tipi:</span>
                  </td>
                  <td align="left">{{ bill.BillTypeValue }}</td>
                </tr>
                <tr style="height: 13px">
                  <td align="left">
                    <span style="font-weight: bold">Fatura No:</span>
                  </td>
                  <td align="left">GIB2022000000017</td>
                </tr>
                <tr style="height: 13px">
                  <td align="left">
                    <span style="font-weight: bold">Fatura Tarihi:</span>
                  </td>
                  <td align="left">
                    {{ bill.BillDate }}&nbsp;{{ bill.BillTime }}
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
        <tr align="left">
          <td id="ettnTable" valign="top" align="left">
            <span style="font-weight: bold">ETTN:&nbsp;</span
            >4a539c92-e7cf-412b-adeb-eb37e5f193c2
          </td>
        </tr>
      </tbody>
    </table>
    <div id="lineTableAligner"><span>&nbsp;</span></div>
    <table width="800" id="lineTable" border="1">
      <tbody>
        <tr class="lineTableTr">
          <td align="center" style="width: 3%" class="lineTableTd">
            <span style="font-weight: bold">Sıra No</span>
          </td>
          <td align="center" style="width: 20%" class="lineTableTd">
            <span style="font-weight: bold">Mal Hizmet</span>
          </td>
          <td align="center" style="width: 7.4%" class="lineTableTd">
            <span style="font-weight: bold">Miktar</span>
          </td>
          <td align="center" style="width: 9%" class="lineTableTd">
            <span style="font-weight: bold">Birim Fiyat</span>
          </td>
          <td align="center" style="width: 7%" class="lineTableTd">
            <span style="font-weight: bold">İskonto/ Arttırım Oranı</span>
          </td>
          <td align="center" style="width: 9%" class="lineTableTd">
            <span style="font-weight: bold">İskonto/ Arttırım Tutarı</span>
          </td>
          <td align="center" style="width: 9%" class="lineTableTd">
            <span style="font-weight: bold">İskonto/ Arttırım Nedeni</span>
          </td>
          <td align="center" style="width: 7%" class="lineTableTd">
            <span style="font-weight: bold">KDV Oranı</span>
          </td>
          <td align="center" style="width: 10%" class="lineTableTd">
            <span style="font-weight: bold">KDV Tutarı</span>
          </td>
          <td align="center" style="width: 17%" class="lineTableTd">
            <span style="font-weight: bold">Diğer Vergiler</span>
          </td>
          <td align="center" style="width: 10.6%" class="lineTableTd">
            <span style="font-weight: bold">Mal Hizmet Tutarı</span>
          </td>
        </tr>
        <tr class="lineTableTr" v-for="(i, index) in data" :key="i.id">
          {{
            index + 1
          }}
          <td class="lineTableTd">&nbsp;{{ i.value.name }}</td>
          <td class="lineTableTd">
            &nbsp;{{ i.value.quantity }} {{ i.value.unit }}
          </td>
          <td align="right" class="lineTableTd">
            &nbsp;{{ i.value.unitPrice }} TL
          </td>
          <td align="right" class="lineTableTd">
            &nbsp;%{{ i.value.discounty }}
          </td>
          <td align="right" class="lineTableTd">
            &nbsp;{{ i.value.discountt }} TL
          </td>
          <td align="right" class="lineTableTd">&nbsp;</td>
          <td align="right" class="lineTableTd">&nbsp;%{{ i.value.KDV }}</td>
          <td align="right" class="lineTableTd">
            &nbsp; {{ i.value.kdvTl }}Tl
          </td>
          <td align="right" class="lineTableTd">&nbsp;</td>
          <td align="right" style="font-size: xx-small" class="lineTableTd">
            &nbsp;{{ i.value.total }}
          </td>
        </tr>
      </tbody>
    </table>
    <table width="800px" table-layout="fixed" id="budgetContainerTable">
      <tbody>
        <tr>
          <td valign="top" align="right">
            <table>
              <tbody>
                <tr align="right">
                  <td></td>
                  <td width="200px" align="right" class="lineTableBudgetTd">
                    <span style="font-weight: bold"
                      >Mal Hizmet Toplam Tutarı</span
                    >
                  </td>
                  <td
                    align="right"
                    style="width: 81px"
                    class="lineTableBudgetTd"
                  >
                    {{ total.total }} TL
                  </td>
                </tr>
                <tr align="right">
                  <td></td>
                  <td width="200px" align="right" class="lineTableBudgetTd">
                    <span style="font-weight: bold">Toplam İskonto</span>
                  </td>
                  <td
                    align="right"
                    style="width: 81px"
                    class="lineTableBudgetTd"
                  >
                    {{ total.TotalDiscount }}TL
                  </td>
                </tr>
                <tr align="right">
                  <td></td>
                  <td align="right" width="211px" class="lineTableBudgetTd">
                    <span style="font-weight: bold">Hesaplanan KDV(%18)</span>
                  </td>
                  <td
                    align="right"
                    style="width: 82px"
                    class="lineTableBudgetTd"
                  >
                    {{ total.KDVtotala }} TL
                  </td>
                </tr>
                <tr align="right" v-if="total.KDVtotalb != 0">
                  <td></td>
                  <td align="right" width="211px" class="lineTableBudgetTd">
                    <span style="font-weight: bold">Hesaplanan KDV(%8)</span>
                  </td>
                  <td
                    align="right"
                    style="width: 82px"
                    class="lineTableBudgetTd"
                  >
                    {{ total.KDVtotalb }} TL
                  </td>
                </tr>

                <tr align="right" v-if="total.KDVtotalc != 0">
                  <td></td>
                  <td align="right" width="211px" class="lineTableBudgetTd">
                    <span style="font-weight: bold">Hesaplanan KDV(%1)</span>
                  </td>
                  <td
                    align="right"
                    style="width: 82px"
                    class="lineTableBudgetTd"
                  >
                    {{ total.KDVtotalc }} TL
                  </td>
                </tr>
                <tr align="right" v-if="total.KDVtotald != 0">
                  <td></td>
                  <td align="right" width="211px" class="lineTableBudgetTd">
                    <span style="font-weight: bold">Hesaplanan KDV(%0)</span>
                  </td>
                  <td
                    align="right"
                    style="width: 82px"
                    class="lineTableBudgetTd"
                  >
                    {{ total.KDVtotald }} TL
                  </td>
                </tr>

                <tr align="right">
                  <td></td>
                  <td align="right" width="200px" class="lineTableBudgetTd">
                    <span style="font-weight: bold"
                      >Vergiler Dahil Toplam Tutar</span
                    >
                  </td>
                  <td
                    align="right"
                    style="width: 82px"
                    class="lineTableBudgetTd"
                  >
                    {{ total.KDVwithTotal }} TL
                  </td>
                </tr>
                <tr align="right">
                  <td></td>
                  <td align="right" width="200px" class="lineTableBudgetTd">
                    <span style="font-weight: bold">&Ouml;denecek Tutar</span>
                  </td>
                  <td
                    align="right"
                    style="width: 82px"
                    class="lineTableBudgetTd"
                  >
                    {{ total.allTotal }} TL
                  </td>
                </tr>
                <tr align="right">
                  <td></td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
    <br /><br />
    <table align="left" width="800" id="notesTable">
      <tbody>
        <tr align="left">
          <td height="100" id="notesTableTd">
            <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Not: </b>Sadece
            {{ SayiDonustur(total.allTotal) }} TL<br />
            <b v-if="desc != ''">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Not: </b
            >{{ desc }} <br />
            <b v-if="bill.irsaliye != ''"
              >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Not: </b
            >{{ bill.irsaliye }}<br />
          </td>
          <td class="w-25" id="notesTableTd">
            <qr-code :text="value" :size="size"></qr-code>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {

  props:{
    data:{
      required:false,
      default(){
        return [
        {
          name: "test-address",
          value: {
            name:"",
quantity:0,
unit:0,
unitPrice:0,
discounty:0,
discountt:0,
KDV:18,
total:0,
          }
        }
      ]
        
      },
      type:Array
    },
    person:{
            required:false,

default(){return{
    person:{
            vkn: "212",
        name: "Fatma",
        surname: "Atasoy",
        vergiDSehir: "Amasya",
        vergiD: "Amasya",
        MersisNo: "dsf",
        Unvan: "Aş",
        ortaAdi: "Aş",
        TicOdasi: "sd",
        VergiD: "sd",
        TicSicNo: "sd",
  },
  adress:{
    
        adress: "",
        eFatura: "",
        city: "",
        country: "",
        EPosta: "",
        Faks: "",
        BinaAdi: "",
        DaireNo: "",
        BayiNo: "",
        PostaKodu: "",
        BinaNo: "",
        MahalleCadde: "",
        Telefon: "",
        İlce: "",
        Website: "",
        eirsaliye: "",
        YetkiliKişi: "",
        path: "",
  }
}


      },
      type:Object
    },
    desc:{
            required:false,

default:"deneme",
type:String
    },
    total:{
            required:false,

      default(){ return{
        
        total: 0,
        TotalDiscount: 0,
        KDVwithoutTotal: 0,
        KDVtotal: 0,
        allTotal: 0,
        KDVtotala: 0,
        KDVtotalb: 0,
        KDVtotala: 0,
        KDVtotalc: 0,
        KDVtotald: 0,
      }
      },
      type:Object
    },
    bill:{
            required:false,

      default(){ return{
        SendingType:"",
BillTypeValue:"",
BillDate:"",
BillTime:"",
BillOption:"",
XSLTFileValue:"",
moneyType:"",
irsaliye:""
      }

      },
      type:Object
    },
    logo:{
type:Object,
required:false
    }
  },
  data() {
    return {
      value: "https://www.google.com/",
sonuc:0,
size:125
    };
  },
  methods: {
SayiDonustur(sayi){
sayi=String(sayi);
 
let bolum1 = ["", "bir", "iki", "üç", "dört", "beş", "altı", "yedi", "sekiz", "dokuz"];
let bolum2 = ["", "on", "yirmi", "otuz", "kırk", "elli", "altmış", "yetmiş", "seksen", "doksan"];
let bolum3 = ["", "yüz", "bin", "milyon", "milyar", "trilyon", "katrilyon"];
 
let sayi1; //tam kısım
let sayi2 = ""; // ondalıklı kısım
let sonuc = "";
 
sayi = sayi.replace(",", "."); //virgül girilirse noktaya dönüştürülüyor
 
if (sayi.indexOf(".") > 0)
{ // nokta varsa (kuruş)
 
sayi1 = sayi.substring(0, sayi.indexOf(".")); // tam kısım
sayi2 = sayi.substring(sayi.indexOf("."), sayi.length); // ondalıklı kısım
 
}
else
{
sayi1 = sayi; // ondalık yok
}
 
var rk = sayi1.split(""); // rakamlara ayırma
 
let son;
let w = 1; // işlenen basamak
var sonaekle = 0; // binler on binler yüzbinler vs. için sona bin (milyon,trilyon...) eklenecek mi?
let kac = rk.length; // kaç rakam var?
let sonint; // işlenen basamağın rakamsal değeri
let uclubasamak = 0; // hangi basamakta (birler onlar yüzler gibi)
let artan = 0;  // binler milyonlar milyarlar gibi artışları yapar
let gecici;
 
if (kac > 0) { // virgül öncesinde rakam var mı?
 
for (let i = 0; i < kac; i++)
{
son = rk[kac - 1 - i]; // son karakterden başlayarak çözümleme yapılır.
sonint = parseInt(son); // işlenen rakam
if (w == 1)
{ // birinci basamak bulunuyor
sonuc = bolum1[sonint] + sonuc;
}
else if (w == 2)
{ // ikinci basamak
sonuc = bolum2[sonint] + sonuc;
}
else if (w == 3)
{ // 3. basamak
if (sonint == 1)
{
sonuc = bolum3[1] + sonuc;
}
else if (sonint > 1)
{
sonuc = bolum1[sonint] + bolum3[1] + sonuc;
}
uclubasamak++;
}
if (w > 3)
{    // 3. basamaktan sonraki işlemler
if (uclubasamak == 1)
{
if (sonint > 0)
{
sonuc = bolum1[sonint] + bolum3[2 + artan] + sonuc;
if (artan == 0)
{ // birbin yazmasını engelle
if(kac-1==i)
{ //
sonuc = sonuc.replace(bolum1[1] + bolum3[2], bolum3[2]);
}
}
sonaekle = 1; // sona bin eklendi
}
else
{
sonaekle = 0;
}
uclubasamak++;
 
}
else if (uclubasamak == 2)
{
if (sonint > 0)
{
if (sonaekle > 0)
{
sonuc = b2[sonint] + sonuc;
sonaekle++;
}
else
{
sonuc = b2[sonint] + b3[2 + artan] + sonuc;
sonaekle++;
}
}
uclubasamak++;
 
} else if (uclubasamak == 3)
{
if (sonint > 0)
{
if (sonint == 1)
{
gecici = b3[1];
}
else
{
gecici = b1[sonint] + b3[1];
}
if (sonaekle == 0)
{
gecici = gecici + b3[2 + artan];
}
sonuc = gecici + sonuc;
}
uclubasamak = 1;
artan++;
}
 
}
w++; // işlenen basamak
}
 
}
 
this.sonuc=sonuc;
return this.sonuc
}
  },

};
</script>
<style scoped>
table {
  width: 100%;
}
#mainbody {
  background-color: #ffffff;
  font-family: "Tahoma", "Times New Roman", Times, serif;
  font-size: 11px;
  color: #666666;
}
#mainbody h1,
#mainbody h2 {
  padding-bottom: 3px;
  padding-top: 3px;
  margin-bottom: 5px;
  text-transform: uppercase;
  font-family: Arial, Helvetica, sans-serif;
}
#mainbody h1 {
  font-size: 1.4em;
  text-transform: none;
}
#mainbody h2 {
  font-size: 1em;
  color: brown;
}
#mainbody h3 {
  font-size: 1em;
  color: #333333;
  text-align: justify;
  margin: 0;
  padding: 0;
}
#mainbody h4 {
  font-size: 1.1em;
  font-style: bold;
  font-family: Arial, Helvetica, sans-serif;
  color: #000000;
  margin: 0;
  padding: 0;
}
#mainbody hr {
  height: 2px;
  color: #000000;
  background-color: #000000;
  border-bottom: 1px solid #000000;
}
#mainbody p,
#mainbody ul,
#mainbody ol {
  margin-top: 1.5em;
}
#mainbody ul,
#mainbody ol {
  margin-left: 3em;
}
#mainbody blockquote {
  margin-left: 3em;
  margin-right: 3em;
  font-style: italic;
}
#mainbody a {
  text-decoration: none;
  color: #70a300;
}
#mainbody a:hover {
  border: none;
  color: #70a300;
}
#despatchTable {
  border-collapse: collapse;
  font-size: 11px;
  float: right;
  border-color: gray;
}
#ettnTable {
  border-collapse: collapse;
  font-size: 11px;
  border-color: gray;
}
#customerPartyTable {
  border-width: 0px;

  border-style: inset;
  border-color: gray;
  border-collapse: collapse;
}
#customerIDTable {
  border-width: 2px;

  border-style: inset;
  border-color: gray;
  border-collapse: collapse;
}
#customerIDTableTd {
  border-width: 2px;

  border-style: inset;
  border-color: gray;
  border-collapse: collapse;
}
#lineTable {
  border-width: 2px;

  border-style: inset;
  border-color: black;
  border-collapse: collapse;
}
#mainbody td.lineTableTd {
  border-width: 1px;
  padding: 1px;
  border-style: inset;
  border-color: black;
  background-color: white;
}
#mainbody tr.lineTableTr {
  border-width: 1px;
  padding: 0px;
  border-style: inset;
  border-color: black;
  background-color: white;
}
#lineTableDummyTd {
  border-width: 1px;
  border-color: white;
  padding: 1px;
  border-style: inset;
  border-color: black;
  background-color: white;
}
#mainbody td.lineTableBudgetTd {
  border-width: 2px;
  border-spacing: 0px;
  padding: 1px;
  border-style: inset;
  border-color: black;
  background-color: white;
}
#notesTable {
  border-width: 2px;
  border-style: inset;
  border-color: black;
  border-collapse: collapse;
}
#notesTableTd {
  border-width: 0px;

  border-style: inset;
  border-color: black;
  border-collapse: collapse;
}
#mainbody table {
  border-spacing: 0px;
}
#budgetContainerTable {
  border-width: 0px;
  border-spacing: 0px;
  border-style: inset;
  border-color: black;
  border-collapse: collapse;
}
#mainbody td {
  border-color: gray;
}
</style>