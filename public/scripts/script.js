let squadMembers = null;

const searchBar = document.getElementById('searchBar');
searchBar.addEventListener('keyup', search)
squadMembers = document.querySelectorAll('.cards-container > .card')
console.log(squadMembers)
function search() {
    
    const searchValue = this.value.toLowerCase()
    if(this.value === '') {
      squadMembers.forEach(member => {
        console.log(member)
        member.hidden = false;
      })
    } else {
      squadMembers.forEach(member => {
        member.hidden = !member.textContent.toLowerCase().includes(searchValue);
      })
    }
}