#!/usr/bin/python3
""" 0-lockboxes module """


def canUnlockAll(boxes):
    """ Checks if all boxes can be unlocked """
    keys = []
    for key in boxes[0]:
        keys.append(key)

    count = 1
    locked_boxes = []

    while (count < len(boxes)):
        if (count in keys):
            for key in boxes[count]:
                keys.append(key)

        else:
            locked_boxes.append(count)

        count += 1

    for box in locked_boxes:
        if box not in keys:
            return False
        for key in boxes[box]:
            keys.append(key)

    return True
