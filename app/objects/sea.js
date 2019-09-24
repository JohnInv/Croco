import * as paper from "paper";
import { lightenColor } from "utils/lighterColor";

const SEA_TYPE = 'sea';

export class Sea {
  constructor({c, color, lighting, type = SEA_TYPE}) {
    this.c = c;
    this.color = color || '#4682B4';
    this.lighting = lighting || 4;
    this.type = type;

    this.draw();
  }

  draw() {
    let addPath, addPoints, animatePath, i, j, n, path, paths, ref, view;
    paper.setup(this.c);
    view = paper.project.view;
    paths = new paper.Group;

    addPoints = function (path, quantity) {
      let i, j, ref, x, y;

      path.add(view.bounds.bottomLeft);
      for (i = j = -1, ref = quantity + 1; j <= ref; i = j += 1) {
        x = view.viewSize.width / quantity * i;
        y = view.viewSize.height / 1.618;
        path.add(new paper.Point(x, y));
      }

      return path.add(view.bounds.bottomRight);
    };

    addPath = function (quantity, color, opacity) {
      const path = new paper.Path();

      path.fillColor = color;
      path.opacity = opacity;
      addPoints(path, quantity);
      path.smooth();
      return path;
    };
    animatePath = function (path, event, index) {
      let i, j, len, ref, results, segment, sin;

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
    n = this.isSea() ? 32 : 8;

    const resultedColors = [this.color];

    for (i = j = 1, ref = n; j <= ref; i = j += 1) {
      const color = lightenColor(resultedColors[i - 1], this.lighting);

      resultedColors.push(color);
      path = this.isSea() ? addPath(1, color, 1) : addPath(3, color, 1);
      path.position.y += 25 * i;
      paths.addChild(path);
    }
    view.onFrame = function (event) {
      let k, len, ref1, results;

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

  isSea() {
    return this.type === SEA_TYPE;
  }
}
