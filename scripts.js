function openBooksMenu() { document.getElementById("books-menu").style.visibility = "visible"; }
function openGemstonesMenu() { document.getElementById("gemstones-menu").style.visibility = "visible"; }
function openReforgesMenu() { document.getElementById("reforges-menu").style.visibility = "visible"; }
function openEssenceMenu() { document.getElementById("essence-menu").style.visibility = "visible"; }
function openItemMenu() { document.getElementById("item-menu").style.visibility = "visible";
                          loadItems()}
function openEnchantmentsMenu() { document.getElementById("enchantments-menu").style.visibility = "visible"; }
function openModifiersMenu() { document.getElementById("modifiers-menu").style.visibility = "visible"; }
function openUltimateEnchantsMenu() { document.getElementById("ultimate-enchants-menu").style.visibility = "visible"; }

function closePopup(popupId) {
  document.getElementById(popupId).style.visibility = "hidden";
  if (popupId == 'item-menu') {
    document.getElementById('items-table').innerHTML = '';
  }
}

function loadItems() {
  console.log("dit word geladen");
  // Parse the JSON data
  var itemData = JSON.parse(items);

  // Get the table element where the images will be placed
  var table = document.getElementById('items-table');
  var row; // Variable to hold each row

  // Create the popup element
  var popup = document.createElement('div');
  popup.id = 'item-popup';
  popup.style.position = 'absolute';
  popup.style.backgroundColor = 'white';
  popup.style.border = '1px solid #ccc';
  popup.style.padding = '10px';
  popup.style.boxShadow = '0px 0px 5px rgba(0,0,0,0.3)';
  popup.style.display = 'none';
  document.body.appendChild(popup);

  // Loop through the itemData to add images to the table
  itemData.forEach(function(item, index) {
    // Start a new row every 5 items
    if (index % 5 === 0) {
      row = document.createElement('tr');
      table.appendChild(row);
    }

    // Create a table cell for each item image
    var td = document.createElement('td');
    var img = document.createElement('img');
    img.src = item.image; // Set image source
    img.alt = item.name; // Set alt text for the image
    td.classList.add('item-slot');

    td.appendChild(img);
    
    // Event listener to show the popup when the mouse hovers over the item
    td.addEventListener("mouseover", function(event) {
      // Set popup content
      popup.innerHTML = `
        <h3>${item.name}</h3>
        <p><strong>Description:</strong> ${item.lore || 'No description available'}</p>
        <p><strong>Modifiers:</strong></p>
        <ul>
          ${Object.keys(item.stats).map(function(stat) {
            return `<li><strong>${stat}:</strong> ${item.stats[stat]}</li>`;
          }).join('')}
        </ul>
      `;
      // Position the popup next to the item
      var rect = td.getBoundingClientRect();
      popup.style.top = rect.top + window.scrollY + "px";
      popup.style.left = rect.left + window.scrollX + rect.width + "px"; // Place next to the item
      popup.style.display = 'block';
    });

    // Event listener to hide the popup when the mouse leaves the item
    td.addEventListener("mouseleave", function() {
      popup.style.display = 'none';
    });

    row.appendChild(td);
  });
}


function selectItem(item) {
  console.log(item)
}
