export class ViewParticipants {
    constructor() {
      this.articles = document.querySelector('.all_table');
    }
   
    renderArticles(data) {
      this.articles.innerHTML = data.map(d => this.articleString(d)).join("");
    }
    
    articleString({name, surname, gender, age, town, club}){
      return `<tr >
      <td >${name} ${surname}</td>
            <td >${gender}</td>
            <td >${age}</td>
            <td >${town}</td>
            <td >${club}</td>
            </tr>`;
    }
}