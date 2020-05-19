var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  _parent: 'phaser-example',
  scene: {
    preload: preload,
    create: create
  }
};
var game = new Phaser.Game(config);

function preload (){
  this.load.image('person', 'images2/person.JPEG');
  this.load.image('bucket', 'images2/bucket.png');
  this.load.image('beanie', 'images2/beanie.png');
  this.load.image('cap', 'images2/cap.png');
  this.load.image('top', 'images2/top.png');
}

function create (){
  this.add.image(400, 300, 'person');
  var bucket = this.add.sprite(100, 100, 'bucket');
  var beanie = this.add.sprite(200, 200, 'beanie');
  var cap = this.add.sprite(300, 300, 'cap');
  var top = this.add.sprite(400, 400, 'top');


  bucket.setInteractive();
  beanie.setInteractive();
  cap.setInteractive();
  top.setInteractive();

  this.input.setDraggable(bucket);
  this.input.setDraggable(beanie);
  this.input.setDraggable(cap);
  this.input.setDraggable(top);

  this.input.on('drag', function (pointer, gameObject, dragX, dragY) {

    gameObject.x = dragX;
    gameObject.y = dragY;

  });
}
