var DataTypes = require("sequelize").DataTypes;
var _account = require("./account");
var _address = require("./address");
var _bank = require("./bank");
var _bank_account = require("./bank_account");
var _bill_topup = require("./bill_topup");
var _brand = require("./brand");
var _cart = require("./cart");
var _cart_line_items = require("./cart_line_items");
var _category = require("./category");
var _category_image = require("./category_image");
var _city = require("./city");
var _conditions = require("./conditions");
var _expedition = require("./expedition");
var _expedition_route = require("./expedition_route");
var _kecamatan = require("./kecamatan");
var _kodepos = require("./kodepos");
var _order_advertising = require("./order_advertising");
var _order_advertising_product = require("./order_advertising_product");
var _order_shipping = require("./order_shipping");
var _orders = require("./orders");
var _orders_line_items = require("./orders_line_items");
var _package_type = require("./package_type");
var _payment_type = require("./payment_type");
var _product = require("./product");
var _product_images = require("./product_images");
var _product_variant = require("./product_variant");
var _province = require("./province");
var _status = require("./status");
var _users = require("./users");
var _vendor = require("./vendor");
var _vendor_rules = require("./vendor_rules");
var _wallet = require("./wallet");
var _wallet_transaction = require("./wallet_transaction");

function initModels(sequelize) {
  var account = _account(sequelize, DataTypes);
  var address = _address(sequelize, DataTypes);
  var bank = _bank(sequelize, DataTypes);
  var bank_account = _bank_account(sequelize, DataTypes);
  var bill_topup = _bill_topup(sequelize, DataTypes);
  var brand = _brand(sequelize, DataTypes);
  var cart = _cart(sequelize, DataTypes);
  var cart_line_items = _cart_line_items(sequelize, DataTypes);
  var category = _category(sequelize, DataTypes);
  var category_image = _category_image(sequelize, DataTypes);
  var city = _city(sequelize, DataTypes);
  var conditions = _conditions(sequelize, DataTypes);
  var expedition = _expedition(sequelize, DataTypes);
  var expedition_route = _expedition_route(sequelize, DataTypes);
  var kecamatan = _kecamatan(sequelize, DataTypes);
  var kodepos = _kodepos(sequelize, DataTypes);
  var order_advertising = _order_advertising(sequelize, DataTypes);
  var order_advertising_product = _order_advertising_product(sequelize, DataTypes);
  var order_shipping = _order_shipping(sequelize, DataTypes);
  var orders = _orders(sequelize, DataTypes);
  var orders_line_items = _orders_line_items(sequelize, DataTypes);
  var package_type = _package_type(sequelize, DataTypes);
  var payment_type = _payment_type(sequelize, DataTypes);
  var product = _product(sequelize, DataTypes);
  var product_images = _product_images(sequelize, DataTypes);
  var product_variant = _product_variant(sequelize, DataTypes);
  var province = _province(sequelize, DataTypes);
  var status = _status(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);
  var vendor = _vendor(sequelize, DataTypes);
  var vendor_rules = _vendor_rules(sequelize, DataTypes);
  var wallet = _wallet(sequelize, DataTypes);
  var wallet_transaction = _wallet_transaction(sequelize, DataTypes);

  address.belongsTo(account, { as: "addr_accu", foreignKey: "addr_accu_id"});
  account.hasMany(address, { as: "addresses", foreignKey: "addr_accu_id"});
  bank_account.belongsTo(account, { as: "bacc_acco", foreignKey: "bacc_acco_id"});
  account.hasMany(bank_account, { as: "bank_accounts", foreignKey: "bacc_acco_id"});
  bill_topup.belongsTo(account, { as: "bito_acco", foreignKey: "bito_acco_id"});
  account.hasMany(bill_topup, { as: "bill_topups", foreignKey: "bito_acco_id"});
  cart.belongsTo(account, { as: "cart_acco", foreignKey: "cart_acco_id"});
  account.hasMany(cart, { as: "carts", foreignKey: "cart_acco_id"});
  order_advertising.belongsTo(account, { as: "orad_acco", foreignKey: "orad_acco_id"});
  account.hasMany(order_advertising, { as: "order_advertisings", foreignKey: "orad_acco_id"});
  orders.belongsTo(account, { as: "order_acco", foreignKey: "order_acco_id"});
  account.hasMany(orders, { as: "orders", foreignKey: "order_acco_id"});
  product.belongsTo(account, { as: "prod_acco", foreignKey: "prod_acco_id"});
  account.hasMany(product, { as: "products", foreignKey: "prod_acco_id"});
  wallet.belongsTo(account, { as: "wale_acco", foreignKey: "wale_acco_id"});
  account.hasMany(wallet, { as: "wallets", foreignKey: "wale_acco_id"});
  order_shipping.belongsTo(address, { as: "oship_addr", foreignKey: "oship_addr_id"});
  address.hasMany(order_shipping, { as: "order_shippings", foreignKey: "oship_addr_id"});
  bank_account.belongsTo(bank, { as: "bacc_bank", foreignKey: "bacc_bank_id"});
  bank.hasMany(bank_account, { as: "bank_accounts", foreignKey: "bacc_bank_id"});
  product.belongsTo(brand, { as: "prod_brand", foreignKey: "prod_brand_id"});
  brand.hasMany(product, { as: "products", foreignKey: "prod_brand_id"});
  cart_line_items.belongsTo(cart, { as: "clit_cart", foreignKey: "clit_cart_id"});
  cart.hasMany(cart_line_items, { as: "cart_line_items", foreignKey: "clit_cart_id"});
  category.belongsTo(category, { as: "cate_cate", foreignKey: "cate_cate_id"});
  category.hasMany(category, { as: "categories", foreignKey: "cate_cate_id"});
  category_image.belongsTo(category, { as: "caim_cate", foreignKey: "caim_cate_id"});
  category.hasMany(category_image, { as: "category_images", foreignKey: "caim_cate_id"});
  product.belongsTo(category, { as: "prod_cate", foreignKey: "prod_cate_id"});
  category.hasMany(product, { as: "products", foreignKey: "prod_cate_id"});
  kecamatan.belongsTo(city, { as: "kec_city", foreignKey: "kec_city_id"});
  city.hasMany(kecamatan, { as: "kecamatans", foreignKey: "kec_city_id"});
  product.belongsTo(conditions, { as: "prod_cond_name_condition", foreignKey: "prod_cond_name"});
  conditions.hasMany(product, { as: "products", foreignKey: "prod_cond_name"});
  expedition_route.belongsTo(expedition, { as: "exro_expe", foreignKey: "exro_expe_id"});
  expedition.hasMany(expedition_route, { as: "expedition_routes", foreignKey: "exro_expe_id"});
  order_shipping.belongsTo(expedition, { as: "oship_expe", foreignKey: "oship_expe_id"});
  expedition.hasMany(order_shipping, { as: "order_shippings", foreignKey: "oship_expe_id"});
  kodepos.belongsTo(kecamatan, { as: "kodepos_kec", foreignKey: "kodepos_kec_id"});
  kecamatan.hasMany(kodepos, { as: "kodepos", foreignKey: "kodepos_kec_id"});
  address.belongsTo(kodepos, { as: "addr_kodepos_kodepo", foreignKey: "addr_kodepos"});
  kodepos.hasMany(address, { as: "addresses", foreignKey: "addr_kodepos"});
  order_advertising_product.belongsTo(order_advertising, { as: "orap_orad", foreignKey: "orap_orad_id"});
  order_advertising.hasMany(order_advertising_product, { as: "order_advertising_products", foreignKey: "orap_orad_id"});
  order_shipping.belongsTo(orders, { as: "oship_order_name_order", foreignKey: "oship_order_name"});
  orders.hasMany(order_shipping, { as: "order_shippings", foreignKey: "oship_order_name"});
  orders_line_items.belongsTo(orders, { as: "orit_order_name_order", foreignKey: "orit_order_name"});
  orders.hasMany(orders_line_items, { as: "orders_line_items", foreignKey: "orit_order_name"});
  order_advertising.belongsTo(package_type, { as: "orad_pack_name_package_type", foreignKey: "orad_pack_name"});
  package_type.hasMany(order_advertising, { as: "order_advertisings", foreignKey: "orad_pack_name"});
  wallet_transaction.belongsTo(payment_type, { as: "watr_paty_name_payment_type", foreignKey: "watr_paty_name"});
  payment_type.hasMany(wallet_transaction, { as: "wallet_transactions", foreignKey: "watr_paty_name"});
  cart_line_items.belongsTo(product, { as: "clit_prod", foreignKey: "clit_prod_id"});
  product.hasMany(cart_line_items, { as: "cart_line_items", foreignKey: "clit_prod_id"});
  order_advertising_product.belongsTo(product, { as: "orap_prod", foreignKey: "orap_prod_id"});
  product.hasMany(order_advertising_product, { as: "order_advertising_products", foreignKey: "orap_prod_id"});
  orders_line_items.belongsTo(product, { as: "orit_prod", foreignKey: "orit_prod_id"});
  product.hasMany(orders_line_items, { as: "orders_line_items", foreignKey: "orit_prod_id"});
  product_images.belongsTo(product, { as: "prim_prod", foreignKey: "prim_prod_id"});
  product.hasMany(product_images, { as: "product_images", foreignKey: "prim_prod_id"});
  product_variant.belongsTo(product, { as: "prova_prod", foreignKey: "prova_prod_id"});
  product.hasMany(product_variant, { as: "product_variants", foreignKey: "prova_prod_id"});
  city.belongsTo(province, { as: "city_prov", foreignKey: "city_prov_id"});
  province.hasMany(city, { as: "cities", foreignKey: "city_prov_id"});
  cart.belongsTo(status, { as: "cart_stat_name_status", foreignKey: "cart_stat_name"});
  status.hasMany(cart, { as: "carts", foreignKey: "cart_stat_name"});
  cart_line_items.belongsTo(status, { as: "clit_stat_name_status", foreignKey: "clit_stat_name"});
  status.hasMany(cart_line_items, { as: "cart_line_items", foreignKey: "clit_stat_name"});
  order_advertising.belongsTo(status, { as: "orad_stat_name_status", foreignKey: "orad_stat_name"});
  status.hasMany(order_advertising, { as: "order_advertisings", foreignKey: "orad_stat_name"});
  order_shipping.belongsTo(status, { as: "oship_stat_name_status", foreignKey: "oship_stat_name"});
  status.hasMany(order_shipping, { as: "order_shippings", foreignKey: "oship_stat_name"});
  orders.belongsTo(status, { as: "order_stat_name_status", foreignKey: "order_stat_name"});
  status.hasMany(orders, { as: "orders", foreignKey: "order_stat_name"});
  bill_topup.belongsTo(vendor, { as: "bito_vendor_name_vendor", foreignKey: "bito_vendor_name"});
  vendor.hasMany(bill_topup, { as: "bill_topups", foreignKey: "bito_vendor_name"});
  vendor_rules.belongsTo(vendor, { as: "veru_vendor_name_vendor", foreignKey: "veru_vendor_name"});
  vendor.hasMany(vendor_rules, { as: "vendor_rules", foreignKey: "veru_vendor_name"});
  wallet_transaction.belongsTo(wallet, { as: "watr_wale", foreignKey: "watr_wale_id"});
  wallet.hasMany(wallet_transaction, { as: "wallet_transactions", foreignKey: "watr_wale_id"});
  bill_topup.belongsTo(wallet_transaction, { as: "bito_watr", foreignKey: "bito_watr_id"});
  wallet_transaction.hasMany(bill_topup, { as: "bill_topups", foreignKey: "bito_watr_id"});

  return {
    account,
    address,
    bank,
    bank_account,
    bill_topup,
    brand,
    cart,
    cart_line_items,
    category,
    category_image,
    city,
    conditions,
    expedition,
    expedition_route,
    kecamatan,
    kodepos,
    order_advertising,
    order_advertising_product,
    order_shipping,
    orders,
    orders_line_items,
    package_type,
    payment_type,
    product,
    product_images,
    product_variant,
    province,
    status,
    users,
    vendor,
    vendor_rules,
    wallet,
    wallet_transaction,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
