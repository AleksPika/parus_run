export class ModelParticipants{
    cellHeaders = [
        'name',
        'surname',
        'gender',
        'age',
        'town',
        'club',
    ];
    link = 'https://spreadsheets.google.com/feeds/cells/1piK2arCJWo0Zv3_o7JMXvPdwdy__OMaR9masT-3t8uk/1/public/full?alt=json';
    data = [];

    constructor(){
        this.rowSize = this.cellHeaders.length;
    }

    loadArticles(){
        return fetch(this.link).then(r => r.json()).then(d =>{
            this.parseData(d);
            return this.data;
        });
    }

     parseData(d){
        const preparedData = d.feed.entry.map(cell => cell.content.$t).slice(this.rowSize);

        preparedData.forEach((element, i) => {
            const id = Math.floor(i / this.rowSize);
            const name = i % this.rowSize;

            if(!this.data[id]){
                this.data[id] = {};
            }

            this.data[id][this.cellHeaders[name]] = element;
        });
    }
    
    get datesArr(){
        return [...this.dates];
    }
}