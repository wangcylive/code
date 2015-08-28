Scroller = function(element) {
  this.element = this;
  this.startTouchY = 0;
  this.animateTo(0);

  element.addEventListener(‘touchstart’, this, false);
  element.addEventListener(‘touchmove’, this, false);
  element.addEventListener(‘touchend’, this, false);
}

Scroller.prototype.handleEvent = function(e) {
  switch (e.type) {
    case “touchstart”:
      this.onTouchStart(e);
      break;
    case “touchmove”:
      this.onTouchMove(e);
      break;
    case “touchend”:
      this.onTouchEnd(e);
      break;
  }
}

Scroller.prototype.onTouchStart = function(e) {
  // This will be shown in part 4.
  this.stopMomentum();

  this.startTouchY = e.touches[0].clientY;
  this.contentStartOffsetY = this.contentOffsetY;
}

Scroller.prototype.onTouchMove = function(e) {
  if (this.isDragging()) {
    var currentY = e.touches[0].clientY;
    var deltaY = currentY - this.startTouchY;
    var newY = deltaY + this.contentStartOffsetY;
    this.animateTo(newY);
  }
}

Scroller.prototype.onTouchEnd = function(e) {
  if (this.isDragging()) {
    if (this.shouldStartMomentum()) {
      // This will be shown in part 3.
      this.doMomentum();
    } else {
      this.snapToBounds();
    }
  }
}

Scroller.prototype.animateTo = function(offsetY) {
  this.contentOffsetY = offsetY;

  // We use webkit-transforms with translate3d because these animations
  // will be hardware accelerated, and therefore significantly faster
  // than changing the top value.
  this.element.style.webkitTransform = ‘translate3d(0, ‘ + offsetY + ‘px, 0)’;
}

// Implementation of this method is left as an exercise for the reader.
// You need to measure the current position of the scrollable content
// relative to the frame. If the content is outside of the boundaries
// then simply reposition it to be just within the appropriate boundary.
Scroller.prototype.snapToBounds = function() {
  ...
}

// Implementation of this method is left as an exercise for the reader.
// You need to consider whether their touch has moved past a certain
// threshold that should be considered ‘dragging’.
Scroller.prototype.isDragging = function() {
  ...
}

// Implementation of this method is left as an exercise for the reader.
// You need to consider the end velocity of the drag was past the
// threshold required to initiate momentum.
Scroller.prototype.shouldStartMomentum = function() {
  ...
}