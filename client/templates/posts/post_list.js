var postsData = [{
    title: 'Introducing HutzPazAds',
    url: 'http://sachagreif.com/introducing-telescope/',
    domain: 'HEck Even More Shit',
    swag: 'This is So Dope Nigga!'

}, {
    title: 'HutzPazAds',
    url: 'http://meteor.com',
    domain: 'HEck Even More Shit',
    swag: 'This is So Dope Nigga!'
}, {
    title: 'The HutzPazAds',
    url: 'http://themeteorbook.com',
    domain: 'HEck Even More Shit',
    swag: 'This is So Dope Nigga!'
}];
Template.postsList.helpers({
    posts: postsData
});