new Vue({
  // このelにHTMLのidを指定することで、そのidのDOMでVue.jsのインスタンスがインポートされる
  el: '#app',
  // dataは、定義されたVue.jsのインスタンスが持つ属性（値）
  data: {
    name: 'A山B郎',
    course: 'Webエンジニアコース',
    acceptancePeriod: '2019年01月期',
    defaultLastId: 3,
    students: [
      { id: 1, name: '野呂浩良', course: '機械学習コース', acceptancePeriod: '2019年01月期' },
      { id: 2, name: '富永修司', course: 'Webエンジニアコース', acceptancePeriod: '2017年11月期' },
      { id: 3, name: '斉藤一起', course: 'Webエンジニアコース', acceptancePeriod: '2017年11月期' }
    ]
  },
  // methodsに、Vue.jsのインスタンスに使用させたいメソッドを記載する
  methods: {
    addStudent: function(event) {
        // この function() { } の中にaddStudentメソッド
        // （入力欄に入力された値と、ID値（最後に登録されたID値+1の値）が新たに出現する機能）の処理を書く
        // this.students = this.students.split('').reverse().join('')
        // 以下にコードを書く
        // <script setup>import { ref } from "module";const name = ref('');</script>
      this.students.push({
        id: this.students.length + 1 ,//要素数を取得して、それに+1した値をidとして設定するのでcountではなくlengthを使用する
        name: this.name, //htmlで記述してあるv-modelで取得した値をnameに代入する
        course: this.course, //htmlで記述してあるv-modelで取得した値をcourseに代入する
        acceptancePeriod: this.acceptancePeriod //htmlで記述してあるv-modelで取得した値をacceptancePeriodに代入する
        //参考した記事はこちらhttps://kasumiblog.org/vue-js-array-push/
      })
    }
  }
})
