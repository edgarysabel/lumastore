//Page objects
class NavBar {
  createAnAccountBTN() {
    return cy
      .get(
        'a[href="https://magento.softwaretestingboard.com/customer/account/create/"]'
      )
      .first();
  }
}

export default NavBar;
