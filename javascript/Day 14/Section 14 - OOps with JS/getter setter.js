const account ={
    owner:'jonas',
    detail:[200,530,120,300],

    get latest(){
        return this.detail.slice(-1).pop()
    },
    set latest(mov){
        this.detail.push(mov);
    }
}

console.log(account.latest);

account.latest=50;

console.log(account.detail);

