const itemData = JSON.parse(items);
var itemSelected = false

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
            console.log("dit word geladen")

            // Get the table element where the images will be placed
            var table = document.getElementById('items-table');
            var row; // Variable to hold each row

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
                td.setAttribute('data-indexnum',index);
                td.addEventListener("click", (event) => {
                  selectItem(td)
                });
                row.appendChild(td);
            });
        }

function selectItem(item) {
  closePopup('item-menu')
  loadSelectedItem(item.getAttribute('data-indexnum'))
}

function loadSelectedItem(itemIndex) {
  const itemBox = document.getElementById("selected-item-box");
  var itemTooltip
  if (itemSelected = true) {
    itemTooltip = document.getElementById("selected-item-tooltip")
  } else {
    itemSelected = true
    itemTooltip = document.createElement("div")
    itemTooltip.setAttribute('class', "tooltip");
    itemTooltip.setAttribute('id', "selected-item-tooltip");
    itemBox.parentElement.appendChild(itemmTooltip);
  };
  var item = itemData[itemIndex] // Set the item to the selected one
  var img = document.createElement('img');
  img.src = item.image; // Set image source
  img.alt = item.name; // Set alt text for the image
  itemBox.innerHTML = '';
  itemTooltip.innerHTML = '';
  var tooltipName = document.createElement("span");
  tooltipName.innerHTML = item.name;
  tooltipName.className = 'color-' + item.stats.rarity
  itemBox.appendChild(img)
  itemTooltip.appendChild(tooltipName)
};
