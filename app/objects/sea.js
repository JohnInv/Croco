import * as paper from "paper";

function lightenColor(color, percent) {
  var num = parseInt(color.replace("#", ""), 16),
    amt = Math.round(2.55 * percent),
    R = (num >> 16) + amt,
    B = (num >> 8 & 0x00FF) + amt,
    G = (num & 0x0000FF) + amt;
  return "#" + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 + (B < 255 ? B < 1 ? 0 : B : 255) * 0x100 + (G < 255 ? G < 1 ? 0 : G : 255)).toString(16).slice(1);
}

export class Sea {
  constructor({c, color, lighting}) {
    this.c = c;
    this.color = color || '#4682B4';
    this.lighting = lighting || 4;

    this.draw(c);
  }

  draw(c) {
    let addPath, addPoints, animatePath, i, j, n, path, paths, ref, view;
    paper.setup(this.c);
    view = paper.project.view;
    paths = new paper.Group;

    addPoints = function (path, quantity) {
      var i, j, ref, x, y;
      path.add(view.bounds.bottomLeft);
      for (i = j = -1, ref = quantity + 1; j <= ref; i = j += 1) {
        x = view.viewSize.width / quantity * i;
        y = view.viewSize.height / 1.618;
        path.add(new paper.Point(x, y));
      }

      return path.add(view.bounds.bottomRight);
    };

    addPath = function (quantity, color, opacity) {
      var path;
      path = new paper.Path();
      path.fillColor = color;
      path.opacity = opacity;
      addPoints(path, quantity);
      path.smooth();
      return path;
    };
    animatePath = function (path, event, index) {
      var i, j, len, ref, results, segment, sin;
      ref = path.segments;
      results = [];
      for (i = j = 0, len = ref.length; j < len; i = ++j) {
        segment = ref[i];
        if (i > 0 && i < path.segments.length - 1) {
          sin = Math.sin(event.time * 3 + i - index);
          const y = sin * 15 + index * 15;
          results.push(segment.point.y = y);
        }
      }
      return results;
    };
    n = 32;
    //n = 8 // river moves left

    const resultedColors = [this.color];

    for (i = j = 1, ref = n; j <= ref; i = j += 1) {
      const color = lightenColor(resultedColors[i - 1], this.lighting);
      resultedColors.push(color);
      //path = addPath(3, color, i * opacity); //river moves left
      path = addPath(1, color, 1);
      path.position.y += 25 * i;
      paths.addChild(path);
    }
    view.onFrame = function (event) {
      var k, len, ref1, results;
      ref1 = paths.children;
      results = [];
      for (i = k = 0, len = ref1.length; k < len; i = ++k) {
        path = ref1[i];
        results.push(animatePath(path, event, i));
      }
      return results;
    };
    view.draw();
  }
}
