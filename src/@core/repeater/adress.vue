<template>
  <div class="address">
    <!-- Optional default data cell scoped slot -->
    <div>
      <label>Ürün İsmi</label>
      <input type="text" v-model="localAddress.name" />
    </div>

    <div>
      <label>Miktar</label>
      <input
        type="number"
        @keyup="calculation(localAddress)"
        v-model.number="localAddress.quantity"
      />
    </div>

    <div>
      <label>Birim</label>
      <b-form-select v-model="localAddress.unit" :options="Unit" size="sm" />
    </div>
    <div>
      <label>Birim Fiyatı</label>
      <input
        type="number"
        @keyup="calculation(localAddress)"
        v-model.number="localAddress.unitPrice"
      />
    </div>
    <div>
      <label>İskonto(%)</label>
      <input
        type="number"
        @keyup="calculation(localAddress)"
        placeholder="0%"
        v-model.number="localAddress.discounty"
      />
    </div>

    <div>
      <label>İskonto(tl)</label>
      <input
        type="number"
        @keyup="calculation(localAddress)"
        placeholder="0₺"
        v-model.number="localAddress.discountt"
      />
    </div>
    <div>
      <label>KDv</label>
      <select
        name="kdv"
        @change="calculation(localAddress)"
        v-model.number="localAddress.KDV"
      >
        <option value="18">18%</option>
        <option value="8">8%</option>
        <option value="1">1%</option>
        <option value="0">0%</option>
      </select>
      <!-- <input
        type="number"
        @keyup="calculation(localAddress)"
        placeholder="0%"
        
      /> -->
    </div>
    
    <div>
      <label>KDV({{localAddress.KDV}})</label>
      <input
        type="number"
        @keyup="calculation(localAddress)"
        placeholder="0₺"
        v-model.number="localAddress.kdvTl"
      />
    </div>
    <div>
      <label>Toplam</label>
      <input type="text" v-model.number="localAddress.total" />
    </div>

    <div>
      <feather-icon icon="EditIcon" @click="showModal(localAddress)" />
    </div>
    <b-modal
      ref="my-modal"
      id="modaledt"
      title="Satır Bilgileri"
      ok-only
      size="lg"
      ok-title="Accept"
    >
      <b-card>
        <div class="m-flex-row">
          <div class="m-input">
            <div class="m-input-c">
              <label>Ürün Adı</label>
              <input type="text" v-model="modalValue.name" />
            </div>
            <div class="m-input-c">
              <label>Miktar</label>
              <input type="text" v-model="modalValue.quantity" />
            </div>
            <div class="m-input-c">
              <label>Birim Fiyat</label>
              <input type="text" v-model="modalValue.unitPrice" />
            </div>
          </div>
          <div class="m-input">
            <div class="m-input-c">
              <label>Birim</label>
              <b-form-select
                :options="Unit"
                size="sm"
                v-model="modalValue.unit"
              />
            </div>
            <div class="m-input-c">
              <label>Ürün/Hizmet Tutarı</label>
              <input type="text" v-model="modalValue.total" />
            </div>
            <div class="m-input-c">
              <label>Satır Açıklaması</label>
              <input type="text" v-model="modalValue.desc" />
            </div>
          </div>
        </div>
        <hr />

        <div class="m-flex-row">
          <b-form-select :options="PaxList" v-model="AddedPax" size="sm" />
          <b-form-select
            :options="DiscoundList"
            v-model="DiscoundValue"
            size="sm"
          />
        </div>
        <div class="m-flex-row as mt-2">
          <b-col lg="2">
            <label>İSKONTO</label>
          </b-col>

          <div class="m-input">
            <label> Oran (%) veya Birim Fiyatı (₺)</label>
            <b-col>
              <input type="text" v-model="modalValue.discounty" />
            </b-col>
          </div>
          <div class="m-input">
            <label> Tutar (₺)</label>
            <b-col>
              <input type="text" v-model="modalValue.discountt" />
            </b-col>
          </div>
          <div class="m-input">
            <label> İskonto / Artırım Sebebi</label>
            <b-col>
              <input type="text" />
            </b-col>
          </div>
        </div>
        <div class="m-flex-row as">
          <b-col lg="2">
            <label>KDV GERCEK</label>
          </b-col>
          <b-col>
            <input type="text" v-model="modalValue.KDV" />
          </b-col>
          <b-col>
            <input type="text" v-model="modalValue.KDVTl" />
          </b-col>
          <b-col>
            <input type="text" />
          </b-col>
        </div>

        <div class="m-flex-row d-non" id="BMV">
          <b-col lg="2">
            <label>BMV</label>
          </b-col>

          <b-col>
            <input type="text" v-model="modalValue.BMV" />
          </b-col>

          <b-col>
            <input type="text" v-model="modalValue.BMVTl" />
          </b-col>
          <b-col>
            <b-button
              v-ripple.400="'rgba(255, 255, 255, 0.15)'"
              variant="secondary"
              class="btn-icon"
            >
              <feather-icon icon="Trash2Icon" @click="deleteİtem('BMV')" />
            </b-button>
          </b-col>
        </div>

        <div class="m-flex-row d-non" id="İSKONTO-3">
          <b-col lg="2">
            <label>İSKONTO 3</label>
          </b-col>
          <b-col>
            <input type="text" v-model="modalValue.Diskount3" />
          </b-col>
          <b-col>
            <input type="text" v-model="modalValue.Diskount3Tl" />
          </b-col>

          <b-col>
            <b-button
              v-ripple.400="'rgba(255, 255, 255, 0.15)'"
              variant="secondary"
              class="btn-icon"
            >
              <feather-icon
                icon="Trash2Icon"
                @click="deleteİtem(İSKONTO - 3)"
              />
            </b-button>
          </b-col>
        </div>

        <div class="m-flex-row d-non" id="GV-STOPAJI">
          <b-col lg="2">
            <label>GV STOPAJI</label>
          </b-col>
          <b-col>
            <input type="text" v-model="modalValue.GVStopaj" />
          </b-col>
          <b-col>
            <input type="text" v-model="modalValue.GVStopajTl" />
          </b-col>
          <b-col>
            <b-button
              v-ripple.400="'rgba(255, 255, 255, 0.15)'"
              variant="secondary"
              class="btn-icon"
            >
              <feather-icon
                icon="Trash2Icon"
                @click="deleteİtem('GV-STOPAJI')"
              />
            </b-button>
          </b-col>
        </div>

        <div class="m-flex-row d-non" id="KV-STOPAJI">
          <b-col lg="2">
            <label>KV-STOPAJI</label>
          </b-col>
          <b-col>
            <input type="text" v-model="modalValue.KVSTOPAJI" />
          </b-col>
          <b-col>
            <input type="text" v-model="modalValue.KVSTOPAJITl" />
          </b-col>
          <b-col>
            <b-button
              v-ripple.400="'rgba(255, 255, 255, 0.15)'"
              variant="secondary"
              class="btn-icon"
            >
              <feather-icon
                icon="Trash2Icon"
                @click="deleteİtem('KV-STOPAJI')"
              />
            </b-button>
          </b-col>
        </div>

        <div class="m-flex-row d-non" id="MERA-FONU">
          <b-col lg="2">
            <label>MERA FONU</label>
          </b-col>
          <b-col>
            <input type="text" v-model="modalValue.MERAFONU" />
          </b-col>
          <b-col>
            <input type="text" v-model="modalValue.MERAFONUTl" />
          </b-col>
          <b-col>
            <b-button
              v-ripple.400="'rgba(255, 255, 255, 0.15)'"
              variant="secondary"
              class="btn-icon"
            >
              <feather-icon
                icon="Trash2Icon"
                @click="deleteİtem('MERA-FONU')"
              />
            </b-button>
          </b-col>
        </div>

        <div class="m-flex-row d-non" id="1.LİSTE">
          <b-col lg="2">
            <label>ÖTV 1.LİSTE</label>
          </b-col>
          <b-col>
            <input type="text" v-model="modalValue.OneLİSTE" />
          </b-col>
          <b-col>
            <input type="text" v-model="modalValue.OneLİSTETl" />
          </b-col>
          <b-col>
            <b-button
              v-ripple.400="'rgba(255, 255, 255, 0.15)'"
              variant="secondary"
              class="btn-icon"
            >
              <feather-icon icon="Trash2Icon" @click="deleteİtem('1.LİSTE')" />
            </b-button>
          </b-col>
        </div>

        <div class="m-flex-row d-non" id="3.LİSTE">
          <b-col lg="2">
            <label>ÖTV 3.LİSTE</label>
          </b-col>
          <b-col>
            <input type="text" v-model="modalValue.ThreeLİSTE" />
          </b-col>
          <b-col>
            <input type="text" v-model="modalValue.ThreeLİSTETl" />
          </b-col>
          <b-col>
            <b-button
              v-ripple.400="'rgba(255, 255, 255, 0.15)'"
              variant="secondary"
              class="btn-icon"
            >
              <feather-icon icon="Trash2Icon" @click="deleteİtem('3.LİSTE')" />
            </b-button>
          </b-col>
        </div>

        <div class="m-flex-row d-non" id="4.LİSTE">
          <b-col lg="2">
            <label>ÖTV 4.LİSTE</label>
          </b-col>
          <b-col>
            <input type="text" v-model="modalValue.FourLİSTE" />
          </b-col>
          <b-col>
            <input type="text" v-model="modalValue.FourLİSTETl" />
          </b-col>
          <b-col>
            <b-button
              v-ripple.400="'rgba(255, 255, 255, 0.15)'"
              variant="secondary"
              class="btn-icon"
            >
              <feather-icon icon="Trash2Icon" @click="deleteİtem('4.LİSTE')" />
            </b-button>
          </b-col>
        </div>

        <div class="m-flex-row d-non" id="3A-LİSTE">
          <b-col lg="2">
            <label>ÖTV 3A LİSTE</label>
          </b-col>
          <b-col>
            <input type="text" v-model="modalValue.ThreeALİSTE" />
          </b-col>
          <b-col>
            <input type="text" v-model="modalValue.ThreeALİSTETl" />
          </b-col>
          <b-col>
            <b-button
              v-ripple.400="'rgba(255, 255, 255, 0.15)'"
              variant="secondary"
              class="btn-icon"
            >
              <feather-icon icon="Trash2Icon" @click="deleteİtem('3A-LİSTE')" />
            </b-button>
          </b-col>
        </div>

        <div class="m-flex-row d-non" id="3B-LİSTE">
          <b-col lg="2">
            <label>ÖTV 3B LİSTE</label>
          </b-col>
          <b-col>
            <input type="text" v-model="modalValue.ThreeBLİSTE" />
          </b-col>
          <b-col>
            <input type="text" v-model="modalValue.ThreeBLİSTETl" />
          </b-col>
          <b-col>
            <b-button
              v-ripple.400="'rgba(255, 255, 255, 0.15)'"
              variant="secondary"
              class="btn-icon"
            >
              <feather-icon icon="Trash2Icon" @click="deleteİtem('3B-LİSTE')" />
            </b-button>
          </b-col>
        </div>

        <div class="m-flex-row d-non" id="3C-LİSTE">
          <b-col lg="2">
            <label>ÖTV 3C LİSTE</label>
          </b-col>
          <b-col>
            <input type="text" v-model="modalValue.ThreCALİSTE" />
          </b-col>
          <b-col>
            <input type="text" v-model="modalValue.ThreeCLİSTETl" />
          </b-col>
          <b-col>
            <b-button
              v-ripple.400="'rgba(255, 255, 255, 0.15)'"
              variant="secondary"
              class="btn-icon"
            >
              <feather-icon icon="Trash2Icon" @click="deleteİtem('3C-LİSTE')" />
            </b-button>
          </b-col>
        </div>

        <div class="m-flex-row d-non" id="DAMGA-V">
          <b-col lg="2">
            <label>DAMGA V</label>
          </b-col>
          <b-col>
            <input type="text" v-model="modalValue.DAMGAV" />
          </b-col>
          <b-col>
            <input type="text" v-model="modalValue.DAMGAVTl" />
          </b-col>
          <b-col>
            <b-button
              v-ripple.400="'rgba(255, 255, 255, 0.15)'"
              variant="secondary"
              class="btn-icon"
            >
              <feather-icon icon="Trash2Icon" @click="deleteİtem('DAMGA-V')" />
            </b-button>
          </b-col>
        </div>

        <div class="m-flex-row d-non" id="5035SKDAMGAV">
          <b-col lg="2">
            <label>5035SKDAMGAV</label>
          </b-col>
          <b-col>
            <input type="text" v-model="modalValue.SKDAMGAV" />
          </b-col>
          <b-col>
            <input type="text" v-model="modalValue.SKDAMGAVTl" />
          </b-col>
          <b-col>
            <b-button
              v-ripple.400="'rgba(255, 255, 255, 0.15)'"
              variant="secondary"
              class="btn-icon"
            >
              <feather-icon
                icon="Trash2Icon"
                @click="deleteİtem('5035SKDAMGAV')"
              />
            </b-button>
          </b-col>
        </div>

        <div class="m-flex-row d-non" id="ÖZEL-İLETİŞİM-VERGİSİ">
          <b-col lg="2">
            <label>ÖZEL İLETİŞİM VERGİSİ</label>
          </b-col>
          <b-col>
            <input type="text" v-model="modalValue.ÖİV" />
          </b-col>
          <b-col>
            <input type="text" v-model="modalValue.ÖİVTl" />
          </b-col>
          <b-col>
            <b-button
              v-ripple.400="'rgba(255, 255, 255, 0.15)'"
              variant="secondary"
              class="btn-icon"
            >
              <feather-icon
                icon="Trash2Icon"
                @click="deleteİtem('ÖZEL-İLETİŞİM-VERGİSİ')"
              />
            </b-button>
          </b-col>
        </div>

        <div class="m-flex-row d-non" id="2.LİSTE">
          <b-col lg="2">
            <label>ÖTV 2 LİSTE</label>
          </b-col>
          <b-col>
            <input type="text" v-model="modalValue.TwoALİSTE" />
          </b-col>
          <b-col>
            <input type="text" v-model="modalValue.TwoALİSTETl" />
          </b-col>
          <b-col>
            <b-button
              v-ripple.400="'rgba(255, 255, 255, 0.15)'"
              variant="secondary"
              class="btn-icon"
            >
              <feather-icon icon="Trash2Icon" @click="deleteİtem('2.LİSTE')" />
            </b-button>
          </b-col>
        </div>

        <div class="m-flex-row d-non" id="TES.ÜC">
          <b-col lg="2">
            <label>Borsa TES.ÜC</label>
          </b-col>
          <b-col>
            <input type="text" v-model="modalValue.TESÜC" />
          </b-col>
          <b-col>
            <input type="text" v-model="modalValue.TESÜCTl" />
          </b-col>
          <b-col>
            <b-button
              v-ripple.400="'rgba(255, 255, 255, 0.15)'"
              variant="secondary"
              class="btn-icon"
            >
              <feather-icon icon="Trash2Icon" @click="deleteİtem('TES.ÜC')" />
            </b-button>
          </b-col>
        </div>

        <div class="m-flex-row d-non" id="İskonto3">
          <b-col lg="2">
            <label>İskonto 3</label>
          </b-col>
          <b-col>
            <input type="text" v-model="modalValue.İskontoThree" />
          </b-col>
          <b-col>
            <input type="text" v-model="modalValue.İskontoThreeTl" />
          </b-col>
          <b-col>
            <b-button
              v-ripple.400="'rgba(255, 255, 255, 0.15)'"
              variant="secondary"
              class="btn-icon"
            >
              <feather-icon icon="Trash2Icon" @click="deleteİtem('İskonto3')" />
            </b-button>
          </b-col>
        </div>
        <div class="m-flex-row d-non" id="Artırım">
          <b-col lg="2">
            <label>Artırım</label>
          </b-col>
          <b-col>
            <input type="text" v-model="modalValue.Artırım" />
          </b-col>
          <b-col>
            <input type="text" v-model="modalValue.ArtırımTl" />
          </b-col>
          <b-col>
            <b-button
              v-ripple.400="'rgba(255, 255, 255, 0.15)'"
              variant="secondary"
              class="btn-icon"
            >
              <feather-icon icon="Trash2Icon" @click="deleteİtem('Artırım')" />
            </b-button>
          </b-col>
        </div>
        <div class="m-flex-row d-non" id="Artırım2">
          <b-col lg="2">
            <label>Artırım2</label>
          </b-col>
          <b-col>
            <input type="text" v-model="modalValue.Artırım2" />
          </b-col>
          <b-col>
            <input type="text" v-model="modalValue.Artırım2Tl" />
          </b-col>
          <b-col>
            <b-button
              v-ripple.400="'rgba(255, 255, 255, 0.15)'"
              variant="secondary"
              class="btn-icon"
            >
              <feather-icon icon="Trash2Icon" @click="deleteİtem('Artırım2')" />
            </b-button>
          </b-col>
        </div>
        <div class="m-flex-row d-non" id="Artırım3">
          <b-col lg="2">
            <label>Artırım3</label>
          </b-col>
          <b-col>
            <input type="text" v-model="modalValue.Artırım3" />
          </b-col>
          <b-col>
            <input type="text" v-model="modalValue.Artırım3Tl" />
          </b-col>
          <b-col>
            <b-button
              v-ripple.400="'rgba(255, 255, 255, 0.15)'"
              variant="secondary"
              class="btn-icon"
            >
              <feather-icon icon="Trash2Icon" @click="deleteİtem('Artırım3')" />
            </b-button>
          </b-col>
        </div>
        <div class="m-flex-row d-non" id="İskonto2">
          <b-col lg="2">
            <label>İskonto2</label>
          </b-col>
          <b-col>
            <input type="text" v-model="modalValue.İskonto2" />
          </b-col>
          <b-col>
            <input type="text" v-model="modalValue.İskonto2Tl" />
          </b-col>
          <b-col>
            <b-button
              v-ripple.400="'rgba(255, 255, 255, 0.15)'"
              variant="secondary"
              class="btn-icon"
            >
              <feather-icon icon="Trash2Icon" @click="deleteİtem('İskonto2')" />
            </b-button>
          </b-col>
        </div>

        <br /><br />
        <div
          class="m-flex-row d-non"
          :style="[
            (DiscoundValue || AddedPax) == ''
              ? { display: 'none' }
              : { display: 'flex' },
          ]"
        >
          <b-col lg="2">
            <label>Avans Mahsubu</label>
          </b-col>
          <b-col lg="3">
            <input type="text" v-model="modalValue.Avans" />
          </b-col>
        </div>
        <div
          class="m-flex-row d-non"
          :style="[
            (DiscoundValue || AddedPax) == ''
              ? { display: 'none' }
              : { display: 'flex' },
          ]"
        >
          <b-col lg="2">
            <label>Nakit Teminatı</label>
          </b-col>
          <b-col lg="3">
            <input type="text" v-model="modalValue.Nakit" />
          </b-col>
        </div>

        <hr />
        <div class="m-flex-row">
          <b-col lg="2">
            <label>KDV İstisna</label>
          </b-col>
          <b-col>
            <input type="text" v-model="modalValue.İskonto2" />
          </b-col>
          <b-col lg="2">
            <label>ÖTV İstisna</label>
          </b-col>
          <b-col>
            <input type="text" v-model="modalValue.İskonto2" />
          </b-col>
        </div>
      </b-card>
    </b-modal>
    <b-modal
      id="modal-toplu"
      title="Müşteri Bilgileri"
      ok-only
      size="lg"
      ok-title="Accept"
    >
      <b-col lg="4" class="mb-3">
        <b-form-select :options="AllPaxList" v-model="AllAddedPax" size="sm" />
      </b-col>
      <div class="m-flex-row d-non" id="BMV">
        <b-col lg="2">
          <label>BMV</label>
        </b-col>

        <b-col>
          <input type="text" v-model="modalValue.BMV" />
        </b-col>

        <b-col>
          <input type="text" v-model="modalValue.BMVTl" />
        </b-col>
        <b-col>
          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            variant="secondary"
            class="btn-icon"
          >
            <feather-icon icon="Trash2Icon" @click="deleteİtem('BMV')" />
          </b-button>
        </b-col>
      </div>

      <div class="m-flex-row d-non" id="İSKONTO-3">
        <b-col lg="2">
          <label>İSKONTO 3</label>
        </b-col>
        <b-col>
          <input type="text" v-model="modalValue.Diskount3" />
        </b-col>
        <b-col>
          <input type="text" v-model="modalValue.Diskount3Tl" />
        </b-col>

        <b-col>
          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            variant="secondary"
            class="btn-icon"
          >
            <feather-icon icon="Trash2Icon" @click="deleteİtem(İSKONTO - 3)" />
          </b-button>
        </b-col>
      </div>

      <div class="m-flex-row d-non" id="GV-STOPAJI">
        <b-col lg="2">
          <label>GV STOPAJI</label>
        </b-col>
        <b-col>
          <input type="text" v-model="modalValue.GVStopaj" />
        </b-col>
        <b-col>
          <input type="text" v-model="modalValue.GVStopajTl" />
        </b-col>
        <b-col>
          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            variant="secondary"
            class="btn-icon"
          >
            <feather-icon icon="Trash2Icon" @click="deleteİtem('GV-STOPAJI')" />
          </b-button>
        </b-col>
      </div>

      <div class="m-flex-row d-non" id="KV-STOPAJI">
        <b-col lg="2">
          <label>KV-STOPAJI</label>
        </b-col>
        <b-col>
          <input type="text" v-model="modalValue.KVSTOPAJI" />
        </b-col>
        <b-col>
          <input type="text" v-model="modalValue.KVSTOPAJITl" />
        </b-col>
        <b-col>
          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            variant="secondary"
            class="btn-icon"
          >
            <feather-icon icon="Trash2Icon" @click="deleteİtem('KV-STOPAJI')" />
          </b-button>
        </b-col>
      </div>

      <div class="m-flex-row d-non" id="MERA-FONU">
        <b-col lg="2">
          <label>MERA FONU</label>
        </b-col>
        <b-col>
          <input type="text" v-model="modalValue.MERAFONU" />
        </b-col>
        <b-col>
          <input type="text" v-model="modalValue.MERAFONUTl" />
        </b-col>
        <b-col>
          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            variant="secondary"
            class="btn-icon"
          >
            <feather-icon icon="Trash2Icon" @click="deleteİtem('MERA-FONU')" />
          </b-button>
        </b-col>
      </div>

      <div class="m-flex-row d-non" id="1.LİSTE">
        <b-col lg="2">
          <label>ÖTV 1.LİSTE</label>
        </b-col>
        <b-col>
          <input type="text" v-model="modalValue.OneLİSTE" />
        </b-col>
        <b-col>
          <input type="text" v-model="modalValue.OneLİSTETl" />
        </b-col>
        <b-col>
          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            variant="secondary"
            class="btn-icon"
          >
            <feather-icon icon="Trash2Icon" @click="deleteİtem('1.LİSTE')" />
          </b-button>
        </b-col>
      </div>

      <div class="m-flex-row d-non" id="3.LİSTE">
        <b-col lg="2">
          <label>ÖTV 3.LİSTE</label>
        </b-col>
        <b-col>
          <input type="text" v-model="modalValue.ThreeLİSTE" />
        </b-col>
        <b-col>
          <input type="text" v-model="modalValue.ThreeLİSTETl" />
        </b-col>
        <b-col>
          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            variant="secondary"
            class="btn-icon"
          >
            <feather-icon icon="Trash2Icon" @click="deleteİtem('3.LİSTE')" />
          </b-button>
        </b-col>
      </div>

      <div class="m-flex-row d-non" id="4.LİSTE">
        <b-col lg="2">
          <label>ÖTV 4.LİSTE</label>
        </b-col>
        <b-col>
          <input type="text" v-model="modalValue.FourLİSTE" />
        </b-col>
        <b-col>
          <input type="text" v-model="modalValue.FourLİSTETl" />
        </b-col>
        <b-col>
          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            variant="secondary"
            class="btn-icon"
          >
            <feather-icon icon="Trash2Icon" @click="deleteİtem('4.LİSTE')" />
          </b-button>
        </b-col>
      </div>

      <div class="m-flex-row d-non" id="3A-LİSTE">
        <b-col lg="2">
          <label>ÖTV 3A LİSTE</label>
        </b-col>
        <b-col>
          <input type="text" v-model="modalValue.ThreeALİSTE" />
        </b-col>
        <b-col>
          <input type="text" v-model="modalValue.ThreeALİSTETl" />
        </b-col>
        <b-col>
          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            variant="secondary"
            class="btn-icon"
          >
            <feather-icon icon="Trash2Icon" @click="deleteİtem('3A-LİSTE')" />
          </b-button>
        </b-col>
      </div>

      <div class="m-flex-row d-non" id="3B-LİSTE">
        <b-col lg="2">
          <label>ÖTV 3B LİSTE</label>
        </b-col>
        <b-col>
          <input type="text" v-model="modalValue.ThreeBLİSTE" />
        </b-col>
        <b-col>
          <input type="text" v-model="modalValue.ThreeBLİSTETl" />
        </b-col>
        <b-col>
          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            variant="secondary"
            class="btn-icon"
          >
            <feather-icon icon="Trash2Icon" @click="deleteİtem('3B-LİSTE')" />
          </b-button>
        </b-col>
      </div>

      <div class="m-flex-row d-non" id="3C-LİSTE">
        <b-col lg="2">
          <label>ÖTV 3C LİSTE</label>
        </b-col>
        <b-col>
          <input type="text" v-model="modalValue.ThreCALİSTE" />
        </b-col>
        <b-col>
          <input type="text" v-model="modalValue.ThreeCLİSTETl" />
        </b-col>
        <b-col>
          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            variant="secondary"
            class="btn-icon"
          >
            <feather-icon icon="Trash2Icon" @click="deleteİtem('3C-LİSTE')" />
          </b-button>
        </b-col>
      </div>

      <div class="m-flex-row d-non" id="DAMGA-V">
        <b-col lg="2">
          <label>DAMGA V</label>
        </b-col>
        <b-col>
          <input type="text" v-model="modalValue.DAMGAV" />
        </b-col>
        <b-col>
          <input type="text" v-model="modalValue.DAMGAVTl" />
        </b-col>
        <b-col>
          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            variant="secondary"
            class="btn-icon"
          >
            <feather-icon icon="Trash2Icon" @click="deleteİtem('DAMGA-V')" />
          </b-button>
        </b-col>
      </div>

      <div class="m-flex-row d-non" id="5035SKDAMGAV">
        <b-col lg="2">
          <label>5035SKDAMGAV</label>
        </b-col>
        <b-col>
          <input type="text" v-model="modalValue.SKDAMGAV" />
        </b-col>
        <b-col>
          <input type="text" v-model="modalValue.SKDAMGAVTl" />
        </b-col>
        <b-col>
          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            variant="secondary"
            class="btn-icon"
          >
            <feather-icon
              icon="Trash2Icon"
              @click="deleteİtem('5035SKDAMGAV')"
            />
          </b-button>
        </b-col>
      </div>

      <div class="m-flex-row d-non" id="ÖZEL-İLETİŞİM-VERGİSİ">
        <b-col lg="2">
          <label>ÖZEL İLETİŞİM VERGİSİ</label>
        </b-col>
        <b-col>
          <input type="text" v-model="modalValue.ÖİV" />
        </b-col>
        <b-col>
          <input type="text" v-model="modalValue.ÖİVTl" />
        </b-col>
        <b-col>
          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            variant="secondary"
            class="btn-icon"
          >
            <feather-icon
              icon="Trash2Icon"
              @click="deleteİtem('ÖZEL-İLETİŞİM-VERGİSİ')"
            />
          </b-button>
        </b-col>
      </div>

      <div class="m-flex-row d-non" id="2.LİSTE">
        <b-col lg="2">
          <label>ÖTV 2 LİSTE</label>
        </b-col>
        <b-col>
          <input type="text" v-model="modalValue.TwoALİSTE" />
        </b-col>
        <b-col>
          <input type="text" v-model="modalValue.TwoALİSTETl" />
        </b-col>
        <b-col>
          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            variant="secondary"
            class="btn-icon"
          >
            <feather-icon icon="Trash2Icon" @click="deleteİtem('2.LİSTE')" />
          </b-button>
        </b-col>
      </div>

      <div class="m-flex-row d-non" id="TES.ÜC">
        <b-col lg="2">
          <label>Borsa TES.ÜC</label>
        </b-col>
        <b-col>
          <input type="text" v-model="modalValue.TESÜC" />
        </b-col>
        <b-col>
          <input type="text" v-model="modalValue.TESÜCTl" />
        </b-col>
        <b-col>
          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            variant="secondary"
            class="btn-icon"
          >
            <feather-icon icon="Trash2Icon" @click="deleteİtem('TES.ÜC')" />
          </b-button>
        </b-col>
      </div>

      <div class="m-flex-row d-non" id="İskonto3">
        <b-col lg="2">
          <label>İskonto 3</label>
        </b-col>
        <b-col>
          <input type="text" v-model="modalValue.İskontoThree" />
        </b-col>
        <b-col>
          <input type="text" v-model="modalValue.İskontoThreeTl" />
        </b-col>
        <b-col>
          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            variant="secondary"
            class="btn-icon"
          >
            <feather-icon icon="Trash2Icon" @click="deleteİtem('İskonto3')" />
          </b-button>
        </b-col>
      </div>
      <div class="m-flex-row d-non" id="Artırım">
        <b-col lg="2">
          <label>Artırım</label>
        </b-col>
        <b-col>
          <input type="text" v-model="modalValue.Artırım" />
        </b-col>
        <b-col>
          <input type="text" v-model="modalValue.ArtırımTl" />
        </b-col>
        <b-col>
          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            variant="secondary"
            class="btn-icon"
          >
            <feather-icon icon="Trash2Icon" @click="deleteİtem('Artırım')" />
          </b-button>
        </b-col>
      </div>
      <div class="m-flex-row d-non" id="Artırım2">
        <b-col lg="2">
          <label>Artırım2</label>
        </b-col>
        <b-col>
          <input type="text" v-model="modalValue.Artırım2" />
        </b-col>
        <b-col>
          <input type="text" v-model="modalValue.Artırım2Tl" />
        </b-col>
        <b-col>
          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            variant="secondary"
            class="btn-icon"
          >
            <feather-icon icon="Trash2Icon" @click="deleteİtem('Artırım2')" />
          </b-button>
        </b-col>
      </div>
      <div class="m-flex-row d-non" id="Artırım3">
        <b-col lg="2">
          <label>Artırım3</label>
        </b-col>
        <b-col>
          <input type="text" v-model="modalValue.Artırım3" />
        </b-col>
        <b-col>
          <input type="text" v-model="modalValue.Artırım3Tl" />
        </b-col>
        <b-col>
          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            variant="secondary"
            class="btn-icon"
          >
            <feather-icon icon="Trash2Icon" @click="deleteİtem('Artırım3')" />
          </b-button>
        </b-col>
      </div>
      <div class="m-flex-row d-non" id="İskonto2">
        <b-col lg="2">
          <label>İskonto2</label>
        </b-col>
        <b-col>
          <input type="text" v-model="modalValue.İskonto2" />
        </b-col>
        <b-col>
          <input type="text" v-model="modalValue.İskonto2Tl" />
        </b-col>
        <b-col>
          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            variant="secondary"
            class="btn-icon"
          >
            <feather-icon icon="Trash2Icon" @click="deleteİtem('İskonto2')" />
          </b-button>
        </b-col>
      </div>

      <hr />
      <div class="m-flex-row">
        <b-col lg="2">
          <label>KDV İstisna</label>
        </b-col>
        <b-col>
          <input type="text" v-model="modalValue.İskonto2" />
        </b-col>
        <b-col lg="2">
          <label>ÖTV İstisna</label>
        </b-col>
        <b-col>
          <input type="text" v-model="modalValue.İskonto2" />
        </b-col>
      </div>
    </b-modal>
  </div>
</template>
<script>
import {
  BRow,
  BFormCheckbox,
  BTable,
  BContainer,
  BCol,
  BButton,
  BModal,
  BCardGroup,
  BInputGroup,
  BFormSelect,
  BCard,
  BCardText,
  BFormInput,
  BDropdown,
  BDropdownItem,
  BInputGroupPrepend,
  BFormTextarea,
  BTabs,
  BTab,
} from "bootstrap-vue";
import flatPickr from "vue-flatpickr-component";
import Ripple from "vue-ripple-directive";

import vSelect from "vue-select";
export default {
  name: "test-address",
  components: {
    BRow,
    BTable,
    BFormCheckbox,
    BContainer,
    BTabs,
    BTab,
    BCol,
    BCardGroup,
    BFormSelect,
    BDropdown,
    BFormTextarea,
    BDropdownItem,
    BCard,
    BButton,
    BCardText,
    BInputGroupPrepend,
    BFormInput,
    vSelect,
    BInputGroup,
    flatPickr,
    BModal,
  },
  directives: {
    Ripple,
  },
  props: {
    value: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      modalValue: {},
      PaxList: [
        { value: "BMV", text: "BMV" },
        { value: "GV-STOPAJI", text: "GV STOPAJI" },
        { value: "KV-STOPAJI", text: "KV STOPAJI" },
        { value: "MERA-FONU", text: "MERA FONU" },
        { value: "1.LİSTE", text: "ÖTV 1.LİSTE" },
        { value: "3.LİSTE", text: "ÖTV 3.LİSTE" },
        { value: "4.LİSTE", text: "ÖTV 4.LİSTE" },
        { value: "3A-LİSTE", text: "ÖTV 3A LİSTE" },
        { value: "3B-LİSTE", text: "ÖTV 3B LİSTE" },
        { value: "3C-LİSTE", text: "ÖTV 3C LİSTE" },
        { value: "DAMGA-V", text: "DAMGA V" },
        { value: "5035SKDAMGAV", text: "5035SKDAMGAV" },
        { value: "ÖZEL-İLETİŞİM-VERGİSİ", text: "ÖZEL İLETİŞİM VERGİSİ" },
        { value: "2.LİSTE", text: "ÖTV 2.LİSTE" },
        { value: "TES.ÜC", text: "BORSA TES.ÜC" },
      ],
      AllPaxList: [
        { value: "İskonto3", text: "İskonto3" },
        { value: "Artırım", text: "Artırım" },
        { value: "Artırım2", text: "Artırım2" },
        { value: "Artırım3", text: "Artırım3" },
        { value: "İskonto2", text: "İskonto2" },
        { value: "BMV", text: "BMV" },
        { value: "GV-STOPAJI", text: "GV STOPAJI" },
        { value: "KV-STOPAJI", text: "KV STOPAJI" },
        { value: "MERA-FONU", text: "MERA FONU" },
        { value: "1.LİSTE", text: "ÖTV 1.LİSTE" },
        { value: "3.LİSTE", text: "ÖTV 3.LİSTE" },
        { value: "4.LİSTE", text: "ÖTV 4.LİSTE" },
        { value: "3A-LİSTE", text: "ÖTV 3A LİSTE" },
        { value: "3B-LİSTE", text: "ÖTV 3B LİSTE" },
        { value: "3C-LİSTE", text: "ÖTV 3C LİSTE" },
        { value: "DAMGA-V", text: "DAMGA V" },
        { value: "5035SKDAMGAV", text: "5035SKDAMGAV" },
        { value: "ÖZEL-İLETİŞİM-VERGİSİ", text: "ÖZEL İLETİŞİM VERGİSİ" },
        { value: "2.LİSTE", text: "ÖTV 2.LİSTE" },
        { value: "TES.ÜC", text: "BORSA TES.ÜC" },
      ],
      DiscoundList: [
        { value: "İskonto3", text: "İskonto3" },
        { value: "Artırım", text: "Artırım" },
        { value: "Artırım2", text: "Artırım2" },
        { value: "Artırım3", text: "Artırım3" },
        { value: "İskonto2", text: "İskonto2" },
      ],
      AllAddedPax: "",
      DiscoundValue: "",
      AddedPax: "",
      Unit: [
        { value: "Kg-Metre kare", text: "Kg-Metre kare" },
        { value: "Adet(Unit)", text: "Adet(Unit)" },
        {
          value: "Ton Başına Taşıma Kapasite",
          text: "Ton Başına Taşıma Kapasite",
        },
        { value: "Çift", text: "Çift" },
        { value: "Brüt Kalori Değer", text: "Brüt Kalori Değer" },
        { value: "Bin Litre", text: "Bin Litre" },
        { value: "Fıssıle İzotop Gramı", text: "Fıssıle İzotop Gramı" },
        { value: "Gram", text: "Gram" },
        { value: "Groos Ton", text: "Groos Ton" },
        { value: "Yüz Adet", text: "Yüz Adet" },
        { value: "Kilogram Potasyum Oksit", text: "Kilogram Potasyum Oksit" },
        {
          value: "KURUTULMUŞ NET AĞIRLIKLI KİLOGRAMI",
          text: "KURUTULMUŞ NET AĞIRLIKLI KİLOGRAMI",
        },
        { value: "Kilogram-Adet", text: "Kilogram-Adet" },
        {
          value: "DİFOSFOR PENTAOKSİT KİLOGRAMI",
          text: "DİFOSFOR PENTAOKSİT KİLOGRAMI",
        },
        { value: "KİLOGRAM", text: "KİLOGRAM" },
        {
          value: "HİDROJEN PEROKSİT KİLOGRAMI",
          text: "HİDROJEN PEROKSİT KİLOGRAMI",
        },
        {
          value: "METİL AMİNLERİN KİLOGRAMI",
          text: "METİL AMİNLERİN KİLOGRAMI",
        },
        { value: "AZOTUN KİLOGRAMI", text: "AZOTUN KİLOGRAMI" },
        {
          value: "KİLOGRAM POTASYUM HİDROKSİT",
          text: "KİLOGRAM POTASYUM HİDROKSİT",
        },
        { value: "%90 KURU ÜRÜN KİLOGRAMI", text: "%90 KURU ÜRÜN KİLOGRAMI" },
        {
          value: "SODYUM HİDROKSİT KİLOGRAMI",
          text: "SODYUM HİDROKSİT KİLOGRAMI",
        },
      ],
      fields: [
        "#",
        "Ürün-Hizmet",
        "Miktar",
        "Birim",
        "BirimFiyati",
        "İskonto-yüzde",
        "İskonto",
        "KDV",
        "ToplamFiyat",
        "İşlemler",
      ],
    };
  },
  methods: {
    showModal(e) {
      this.$refs["my-modal"].show();
      this.modalValue = e;
    },
    deleteİtem(item) {
      document.getElementById(item).style.display = "none";
    },
    calculation(field) {
      let cal = field.quantity * field.unitPrice;
      //İskonto değeri hesaplanmasi
      let YüzdeIskonto = field.discounty / 100;
      console.log(field.KDV);
      let iskonto = cal - cal * YüzdeIskonto;
      field.discountt = iskonto;
      console.log(iskonto);
      //KDV hesaplanması
      let Brüt;
      let KdvHesaplama;
      if (field.KDV != 0 &&field.KDV != null) {
        if (field.discounty != 0 && field.discounty != null) {
          Brüt = iskonto;
        } else {
          Brüt = cal;
        }
        console.log(Brüt);
        KdvHesaplama = Brüt * (field.KDV / 100) + Brüt;
        console.log(KdvHesaplama);
        field.kdvTl=KdvHesaplama
        field.total = KdvHesaplama;
      } else {
        if (field.discounty != 0 && field.discounty != null) {
          field.total = iskonto;
        } else {
          field.total = cal;
        }
      }
    },
  },
  computed: {
    localAddress: {
      get() {
        return this.value;
      },
      set(localAddress) {
        this.$emit("input", localAddress);
      },
    },
  },
  watch: {
    AddedPax() {
      console.log(this.AddedPax);
      document.getElementById(this.AddedPax).style.display = "flex";
    },
    DiscoundValue() {
      document.getElementById(this.DiscoundValue).style.display = "flex";
    },
    AllAddedPax() {
      document.getElementById(this.AllAddedPax).style.display = "flex";
    },
    modalValue() {
      console.log(this.modalValue);
    },
    "modalValue.GVStopaj"() {
      let total = this.modalValue.quantity * this.modalValue.unitPrice;
      this.modalValue.GVStopajTl = total * (this.modalValue.GVStopaj / 100);
    },
    "modalValue.TESÜC"() {
      let total = this.modalValue.quantity * this.modalValue.unitPrice;
      this.modalValue.TESÜCTl = total * (2 / 100);
    },
    "modalValue.BMV"() {
      let total = this.modalValue.quantity * this.modalValue.unitPrice;
      this.modalValue.BMVTl = total * (this.modalValue.BMV / 100);
    },
    "modalValue.Diskount3"() {
      let total = this.modalValue.quantity * this.modalValue.unitPrice;
      this.modalValue.Diskount3Tl = total * (this.modalValue.Diskount3 / 100);
    },
    "modalValue.GVStopaj"() {
      let total = this.modalValue.quantity * this.modalValue.unitPrice;
      this.modalValue.GVStopajTl = total * (this.modalValue.GVStopaj / 100);
    },
    "modalValue.KVSTOPAJI"() {
      let total = this.modalValue.quantity * this.modalValue.unitPrice;
      this.modalValue.KVSTOPAJIjTl = total * (this.modalValue.KVSTOPAJI / 100);
    },
    "modalValue.MERAFONU"() {
      let total = this.modalValue.quantity * this.modalValue.unitPrice;
      this.modalValue.MERAFONUTl = total * (this.modalValue.MERAFONU / 100);
    },
    "modalValue.OneLİSTE"() {
      let total = this.modalValue.quantity * this.modalValue.unitPrice;
      this.modalValue.OneLİSTETl = total * (this.modalValue.OneLİSTE / 100);
    },
    "modalValue.ThreeLİSTE"() {
      let total = this.modalValue.quantity * this.modalValue.unitPrice;
      this.modalValue.ThreeLİSTETl = total * (this.modalValue.ThreeLİSTE / 100);
    },
    "modalValue.FourLİSTE"() {
      let total = this.modalValue.quantity * this.modalValue.unitPrice;
      this.modalValue.FourLİSTETl = total * (this.modalValue.FourLİSTE / 100);
    },
    "modalValue.ThreeALİSTE"() {
      let total = this.modalValue.quantity * this.modalValue.unitPrice;
      this.modalValue.ThreeALİSTETl =
        total * (this.modalValue.ThreeALİSTE / 100);
    },
    "modalValue.ThreeBLİSTE"() {
      let total = this.modalValue.quantity * this.modalValue.unitPrice;
      this.modalValue.ThreeBLİSTETl =
        total * (this.modalValue.ThreeBLİSTE / 100);
    },
    "modalValue.ThreCALİSTE"() {
      let total = this.modalValue.quantity * this.modalValue.unitPrice;
      this.modalValue.ThreCALİSTETl =
        total * (this.modalValue.ThreCALİSTE / 100);
    },
    "modalValue.DAMGAV"() {
      let total = this.modalValue.quantity * this.modalValue.unitPrice;
      this.modalValue.DAMGAVTl = total * (this.modalValue.DAMGAV / 100);
    },
    "modalValue.SKDAMGAV"() {
      let total = this.modalValue.quantity * this.modalValue.unitPrice;
      this.modalValue.SKDAMGAVTl = total * (this.modalValue.SKDAMGAV / 100);
    },
    "modalValue.ÖİV"() {
      let total = this.modalValue.quantity * this.modalValue.unitPrice;
      this.modalValue.ÖİVTl = total * (this.modalValue.ÖİV / 100);
    },
    "modalValue.TwoALİSTE"() {
      let total = this.modalValue.quantity * this.modalValue.unitPrice;
      this.modalValue.TwoALİSTETl = total * (this.modalValue.TwoALİSTE / 100);
    },
    "modalValue.TESÜC"() {
      let total = this.modalValue.quantity * this.modalValue.unitPrice;
      this.modalValue.TESÜCTl = total * (this.modalValue.TESÜC / 100);
    },
    "modalValue.İskontoThree"() {
      let total = this.modalValue.quantity * this.modalValue.unitPrice;
      this.modalValue.İskontoThreeTl =
        total * (this.modalValue.İskontoThree / 100);
    },
    "modalValue.Artırım"() {
      let total = this.modalValue.quantity * this.modalValue.unitPrice;
      this.modalValue.ArtırımTl = total * (this.modalValue.Artırım / 100);
    },
    "modalValue.Artırım2"() {
      let total = this.modalValue.quantity * this.modalValue.unitPrice;
      this.modalValue.Artırım2Tl = total * (this.modalValue.Artırım2 / 100);
    },
    "modalValue.Artırım3"() {
      let total = this.modalValue.quantity * this.modalValue.unitPrice;
      this.modalValue.Artırım3Tl = total * (this.modalValue.Artırım3 / 100);
    },
    "modalValue.İskonto2"() {
      let total = this.modalValue.quantity * this.modalValue.unitPrice;
      this.modalValue.İskonto2Tl = total * (this.modalValue.İskonto2 / 100);
    },
  },
};
</script>

<style scoped lang="scss">
.feather-trash-2 {
  color: #fff;
}
.as .col input,
.d-non .col input {
  width: 100%;
}
.address {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
}
.address div {
  padding-inline: 10px;
}
.address div input {
  width: 100%;
  border: 1px solid #d8d6de;
  border-radius: 0.357rem;
  padding: 4px 8px;
}
.row {
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
}

label {
  text-align: left;
  margin-bottom: 4px;
}

input {
  height: 32px;
  border-radius: 4px;
  border: 1px solid var(--def-border-base);
}
@media (max-width: 768px) {
  .address {
    flex-wrap: wrap;
    flex-direction: column;
    align-items: start;
  }
}
</style>