<template>
    <div>
      <section>
        <article class="card">
            <div class="title" style="background-color: #0073b7;">
                <users-icon size="35" class="icon"></users-icon>
                <span>{{mukellefData.length}}<span style="font-weight: 400; font-size: 15px;"> Mükellef </span></span>
            </div>

            <div class="card-stats">
                <span>Firma:98</span>
                <span>Şahıs:135</span>
                <span>Basit:0</span>
            </div>

            <div class="card-link">
                Mükellef Listesine Git 
                <arrow-right-circle-icon size="20"> </arrow-right-circle-icon>
            </div>
        </article>

        <article class="card">
            <div class="title" style="background-color: #359c6d;">
                <file-icon size="35" class="icon"></file-icon>
                <span>100<span style="font-weight: 400; font-size: 15px;"> SGK Takibi </span></span>
            </div>

            <div class="card-stats">
                <span>SGK Takibi</span>
            </div>

            <div class="card-link">
                SGK Kontrol Listesine Git 
                <arrow-right-circle-icon size="20"> </arrow-right-circle-icon>
            </div>
        </article>

        <article class="card">
            <div class="title" style="background-color: #f39c12;">
                <file-text-icon size="35" class="icon"></file-text-icon>
                <span>{{beyannameData.length}}<span style="font-weight: 400; font-size: 15px;"> E-Beyanname </span></span>
            </div>

            <div class="card-stats">
                <span>E-Beyanname</span>
            </div>

            <div class="card-link">
                E-Beyanname K. Listesine Git 
                <arrow-right-circle-icon size="20"> </arrow-right-circle-icon>
            </div>
        </article>

        <article class="card">
            <div class="title" style="background-color: #3c8dbc;">
                <img src="./assets/gib.png" style="width: 35px">
                <span style="font-weight: 400; font-size: 15px;">  Gelir İdaresi Başkanlığı Tebligatları </span>
            </div>

            <div class="card-stats">
                <span style="color: #21925f; display: flex; flex-direction: column; align-items: center">
                    Okunanlar
                    <span>0</span>
                </span>

                <span style="color: #dd4b39; display: flex; flex-direction: column; align-items: center">
                    Okunmayanlar
                    <span>0</span>
                </span>
            </div>

            <div class="card-link">
                E-Tebligat Listesine Git 
                <arrow-right-circle-icon size="20"> </arrow-right-circle-icon>
            </div>
        </article>
        
        <article class="card">
            <div class="title" style="background-color: #3c8dbc;">
                <img src="./assets/vd.png" style="width: 50px">
                <span style="font-weight: 400; font-size: 15px;"> Vergi Denetim Kurulu B. Tebligatları </span>
            </div>

            <div class="card-stats">
                <span style="color: #21925f; display: flex; flex-direction: column; align-items: center">
                    Okunanlar
                    <span>0</span>
                </span>

                <span style="color: #dd4b39; display: flex; flex-direction: column; align-items: center">
                    Okunmayanlar
                    <span>0</span>
                </span>
            </div>

            <div class="card-link">
                E-Tebligat Listesine Git 
                <arrow-right-circle-icon size="20"> </arrow-right-circle-icon>
            </div>
        </article>

        <article class="card">
            <div class="title" style="background-color: #3c8dbc;">
                <img src="./assets/tb.svg" style="width: 50px">
                <span style="font-weight: 400; font-size: 15px;"> Ticaret Bakanlığı Tebligatları </span>
            </div>

            <div class="card-stats">
                <span style="color: #21925f; display: flex; flex-direction: column; align-items: center">
                    Okunanlar
                    <span>0</span>
                </span>

                <span style="color: #dd4b39; display: flex; flex-direction: column; align-items: center">
                    Okunmayanlar
                    <span>0</span>
                </span>
            </div>

            <div class="card-link">
                E-Tebligat Listesine Git 
                <arrow-right-circle-icon size="20"> </arrow-right-circle-icon>
            </div>
        </article>

        <article class="card">
            <div class="title" style="background-color: #284871;">
                <img src="./assets/sgk.png" style="width: 60px">
                <span>100<span style="font-weight: 400; font-size: 15px;"> E-Rapor </span></span>
            </div>

            <div class="card-stats">
                <span style="color: #21925f; display: flex; flex-direction: column; align-items: center">
                    Onaylanmış
                    <span>0</span>
                </span>

                <span style="color: #dd4b39; display: flex; flex-direction: column; align-items: center">
                    Onaylanmamış
                    <span>0</span>
                </span>
            </div>

            <div class="card-link">
                E-Rapor Listesine Git 
                <arrow-right-circle-icon size="20"> </arrow-right-circle-icon>
            </div>
        </article>

        <article class="card">
            <div class="title" style="background-color: #284871;">
                <img src="./assets/sgk.png" style="width: 60px">
                <span>100<span style="font-weight: 400; font-size: 15px;"> E-Bildirim </span></span>
            </div>

            <div class="card-stats" style="font-size: 13px">
                <span style="color: #0009bc; display: flex; flex-direction: column; align-items: center;">
                    İş Kazası
                    <span>0</span>
                </span>

                <span style="color: #0009bc; display: flex; flex-direction: column; align-items: center">
                    Meslek H...
                    <span>0</span>
                </span>

                <span style="color: #21925f; display: flex; flex-direction: column; align-items: center">
                    Güncel İş...
                    <span>0</span>
                </span>

                <span style="color: #21925f; display: flex; flex-direction: column; align-items: center">
                    Güncel M...
                    <span>0</span>
                </span>
            </div>

            <div class="card-link">
                Hastane Bildirim Lis. Git
                <arrow-right-circle-icon size="20"> </arrow-right-circle-icon>
            </div>
        </article>
      </section>
    </div>
</template>

<script>
import { UsersIcon, FileIcon, FileTextIcon, ArrowRightCircleIcon } from 'vue-feather-icons';
import { mapGetters,mapActions} from "vuex"
export default {
    components: {
        UsersIcon,
        FileIcon,
        FileTextIcon,
        ArrowRightCircleIcon,
    },
    methods:{
          ...mapActions(["fetchBeyanname","fetch", "fetchMukellef",]),
    FecthPersonData() {
      console.log("app çaliştim");
      this.fetch().then((res) => {
        console.log(res);
        res.forEach((el) => {
          console.log(el.data().KullaniciId);
          this.fetchMukellef(el.data().KullaniciId)

        });
      });
    },
    fecthBeyan(){
        console.log("çaliştim");
   let arr=[]
  this.mukellefData.forEach(element => {
arr.push(element.MukellefId)
  
  }); 
  console.log( this.mukellefData);
this.fetchBeyanname(arr)
  console.log(this.beyannameData);
    },
    },
    
  computed:{
       ...mapGetters(["reMukellef","reBeyanname"]),
    beyannameData(){
      return this.reBeyanname
    },
    mukellefData(){
      return this.reMukellef
    }
  },

  mounted(){
   this.FecthPersonData()
   setTimeout(()=>{
       this.fecthBeyan()
   },5000)
  }
}
</script>

<style>
section {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
    grid-gap: 15px;
}

.card {
    background: #fff;
    box-shadow: 0 4px 24px 0 rgb(34 41 47 / 10%);
    border-radius: 2px;
}

.card .title {
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 35px;
    color: white;
    gap: 10px;
    font-weight: 500;
    border-radius: 2px;
}

.card-stats {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-size: 15px;
    color: #333333;
    font-weight: 500;
}

.icon {
    color: rgba(255, 255, 255, 0.4);
}

.card-link {
    background: #e0e6ec;
    height: 40px;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 2px;
    gap: 4px;
    user-select: none;
    cursor: pointer;
    transition: 200ms all;
}

.card-link:hover {
    background: #d2d7db;
}
</style>