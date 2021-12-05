AT.prototype.atTitleHelpers = {
  title: function() {
    const parentData = Template.currentData();
    const state = (parentData && parentData.state) || AccountsTemplates.getState();
    //return AccountsTemplates.texts.title[state];
    return T9n.get(AccountsTemplates.texts.title[state], markIfMissing = false);
  },
};
