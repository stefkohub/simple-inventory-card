# Simple Inventory Card

[![hacs_badge](https://img.shields.io/badge/HACS-Custom-41BDF5.svg?style=for-the-badge)](https://github.com/hacs/integration)

To use, install the [Simple Inventory](https://github.com/blaineventurine/simple_inventory) integration first.

[![Open your Home Assistant instance and open a repository inside the Home Assistant Community Store.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=blaineventurine&repository=simple-inventory-card&category=Dashboard)

This card allows you to track various items in different inventories, and automatically add an item to a specific to-do list when it is below a certain threshold.

<img width="513" height="1098" alt="image" src="https://github.com/user-attachments/assets/8c621dda-a5a9-480b-a813-0512ed416ca6" />

You can set an expiration date for an item, how far ahead you want to be warned, a par level that will update a given todo list:

<img width="539" height="258" alt="image" src="https://github.com/user-attachments/assets/9d43c244-1cd9-47f3-8c35-7ac1eb040ff6" />

(the description will not sync with the built-in Home Assistant `todo.shopping_list`, but any other list you create will work)

## Fork Enhancements

This fork adds a redesigned layout and several new configuration options:

- Category pills bar with item counts
- Collapsible category sections (when sorting by category)
- "Last" low-stock badge and location badges with fixed slots for consistent row height
- Deterministic location badge colors based on location name
- Expiry status text beside category with configurable warning threshold
- Optional compact ("light") add/edit modals with an Advanced collapsible section
- Optional transparent card background
- Optional custom title and hideable header/description
- Improved modal positioning by portaling modals to `document.body`

## Configuration

```yaml
type: custom:simple-inventory-card
entity: sensor.my_inventory
# Optional settings below
custom_name: Pantry
show_header: true
show_description: true
show_add_button: false
use_light_add_modal: false
use_light_edit_modal: false
transparent_card: false
expiry_warning_days: 7
show_search: false
show_sort: false
show_auto_add_info: false
```

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `custom_name` | string | `""` | Override the inventory title shown in the card |
| `show_header` | boolean | `true` | Show the header (title + badges) |
| `show_description` | boolean | `true` | Show the inventory description under the title |
| `show_add_button` | boolean | `false` | Show the "Add item" button |
| `use_light_add_modal` | boolean | `false` | Use compact add modal with Advanced section |
| `use_light_edit_modal` | boolean | `false` | Use compact edit modal with Advanced section |
| `transparent_card` | boolean | `false` | Make the card background transparent |
| `expiry_warning_days` | number | `7` | Days before expiry to mark items as "expiring soon" in the UI |
| `show_search` | boolean | `false` | Show search and filter controls |
| `show_sort` | boolean | `false` | Show sort controls |
| `show_auto_add_info` | boolean | `false` | Show the auto-add info pill in rows |

## Development

This project requires Node.js 20.19.0 or later. Use [nvm](https://github.com/nvm-sh/nvm) to manage Node versions:

```bash
# Install the required Node version
nvm install

# Use the required Node version
nvm use

# Install dependencies
npm install

# Start development server
npm run dev

# Run tests
npm run test:run

# Build for production
npm run build
```
