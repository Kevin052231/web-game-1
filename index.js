function newImage(directory, left, bottom) {
    let image = document.createElement('img')
    image.src = directory
    image.style.position = 'fixed'
    image.style.left = left + 'px'
    image.style.bottom = bottom + 'px'
    document.body.append(image)
    return image
}

newImage('assets/green-character.gif', 100, 250)
newImage('assets/tree.png', 200, 450)
newImage('assets/pillar.png', 350, 250)
newImage('assets/pine-tree.png', 450, 350)
newImage('assets/crate.png', 150, 350)
newImage('assets/well.png', 500, 575)

newItem('assets/sword.png', 500, 555)
newItem('assets/shield.png', 165, 335)
newItem('assets/staff.png', 600, 250)