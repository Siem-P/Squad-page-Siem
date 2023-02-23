let squadMembers = null;

const searchBar = document.getElementById('searchBar');
searchBar.addEventListener('keyup', search)

// Select all elements for checking search value with.
squadMembers = document.querySelectorAll('.cards-container > .card')

// Function for searching a member
function search() {
    const searchValue = this.value.toLowerCase() // set the value to lower case
    if(this.value === '') {
      squadMembers.forEach(member => {
        member.hidden = false; // each member is not hidden by default
      })
    } else {
      squadMembers.forEach(member => {
        // if a value is equal to member, hide all the other members where this value is not equal to
        // There is a toLowerCase built in to this one-liner
        member.hidden = !member.textContent.toLowerCase().includes(searchValue);
      })
    }
}