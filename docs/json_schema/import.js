// AUTOGENERATED FROM myOwnPortfolio/tools/node/generate_doc
module.exports = {"schemas_name":["content.json","properties.json","style.json"],"modules":["about","footer","home","navbar","rubrique","skills"],"schemas":[{"title":"module_about-content_schema","description":"schema du contenu textuel du module about","type":"object","properties":{"title":{"description":"titre du module","type":"string"},"text":{"description":"texte au format markdown à afficher","type":"array","items":{"description":"une ligne du texte","type":"string"},"minItems":0,"uniqueItems":false}},"required":["title","text"]},{"title":"module_about-properties_schema","description":"schema des propriétés du module about","type":"object","properties":{"links":{"type":"array","description":"","items":{"type":"object","properties":{"href":{"type":"string","description":"lien vers lequelle pointe l'image"},"src":{"type":"string","description":"lien de l'image du logo"},"alt":{"type":"string","description":"texte à afficher si l'image n est pas trouvée"}},"required":["href","src","alt"],"minItems":0,"uniqueItems":false}},"module_animation":{"description":"animation lors de l'apparition du module","type":"string"},"content_animation":{"description":"animation lors de l'apparition d'un contenu textuel du module","type":"string"}},"required":["links","module_animation","content_animation"]},{"title":"module_about-style_schema","description":"schema du style du module about","type":"object","properties":{"none":{"description":"none","type":"string"}},"required":["none"]},{"title":"module_footer-content_schema","description":"schema du contenu textuel du module footer","type":"object","properties":{"content_left":{"description":"contenu textuel côté gauche (markdown supporté)","type":"string"},"content_right":{"description":"contenu textuel côté gauche (markdown supporté)","type":"string"}},"required":["content_left","content_right"]},{"title":"module_footer-properties_schema","description":"schema des propriétés du module footer","type":"object","properties":{"none":{"description":"none","type":"string"}},"required":["none"]},{"title":"module_footer-style_schema","description":"schema du style du module footer","type":"object","properties":{"none":{"description":"none","type":"string"}},"required":["none"]},{"title":"module_home-content_schema","description":"schema du contenu textuel du module home","type":"object","properties":{"before_typewriter":{"description":"avant la machine à écrire","type":"string"}},"required":["before_typewriter"]},{"title":"module_home-properties_schema","description":"schema des propriétés du module home","type":"object","properties":{"avatar":{"type":"object","description":"image centrale correspondant à une photo de profil","properties":{"src":{"type":"string","description":"URI de l'image"},"alt":{"type":"string","description":"texte à afficher si l'image est introuvable"}},"required":["src","alt"]},"background":{"type":"object","description":"propriétés du fond animé de la libraire particlesjs","properties":{"color":{"type":"string","description":"Color of particles and connecting lines"},"maxParticles":{"type":"integer","description":"Maximum amount of particles"},"sizeVariations":{"type":"integer","description":"Amount of size variations"},"speed":{"type":"number","description":"Movement speed of the particles"},"minDistance":{"type":"integer","description":"Distance in px for conntecting lines"},"connectParticles":{"type":"boolean","description":"true/false if connecting lines should be drawn"},"responsive":{"type":"array","description":"","items":{"type":"string","minItems":0,"uniqueItems":false}}},"required":["color","maxParticles","sizeVariations","speed","minDistance","connectParticles","responsive"]},"typewriter":{"type":"object","description":"propriétés de la librairie type ReactRotatingText","properties":{"items":{"type":"array","description":"The array of strings to be cycled through","items":{"type":"string","minItems":1,"uniqueItems":false}},"cursor":{"type":"boolean","description":"If set to true, it will display the cursor after the text."},"pause":{"type":"integer","description":"The number of milliseconds to pause after the text has just finished being typed out."},"emptyPause":{"type":"integer","description":"The number of milliseconds to pause while no text is being displayed (i.e. after deleting has just finished)."},"typingInterval":{"type":"integer","description":"The number of milliseconds between each typing action."},"deletingInterval":{"type":"integer","description":"The number of milliseconds between each deleting action."}},"required":["items","cursor","pause","emptyPause","typingInterval","deletingInterval"]}},"required":["avatar","background","typewriter"]},{"title":"module_home-style_schema","description":"schema du style du module home","type":"object","properties":{"none":{"description":"","type":"string"}}},{"title":"module_navbar-content_schema","description":"schema du contenu textuel du module navbar","type":"object","properties":{"title":{"description":"titre de la barre de navigation","type":"string"}},"required":["title"]},{"title":"module_navbar-properties_schema","description":"schema des propriétées du module navbar","type":"object","properties":{"icons_list":{"description":"","type":"array","items":{"type":"string","minItems":0,"uniqueItems":false}}},"required":["icons_list"]},{"title":"module_navbar-style_schema","description":"schema du style du module navbar","type":"object","properties":{"module_navbar_height":{"type":"string"},"module_navbar_background_color":{"type":"string"},"module_navbar_font_color":{"type":"string"}},"required":["module_navbar_height","module_navbar_background_color","module_navbar_font_color"]},{"title":"module_rubrique-content_schema","description":"schema du contenu textuel du module rubrique","type":"object","properties":{"title":{"description":"titre de la rubrique","type":"string"},"rubrique":{"description":"une rubrique","type":"array","items":{"description":"sous blocs de la rubrique","type":"array","items":{"type":"object","properties":{"title":{"description":"titre du sous bloc","type":"string"},"content":{"description":"contenu du sous bloc sous la forme d'un tableau dont chaque cellule correspond à une ligne","type":"array","items":{"description":"contenu textuel au format markdown: \n pour retourner à la ligne","type":"string","minItems":1,"uniqueItems":false}}},"required":["title","content"]},"minItems":1,"uniqueItems":false},"minItems":0,"uniqueItems":false}},"required":["title","rubrique"]},{"title":"module_rubrique-properties_schema","description":"schema des propriétés du module rubrique","type":"object","properties":{"rubrique_animation":{"description":"animation lors de l'apparition de la rubrique","type":"string"},"bloc_animation":{"description":"animation lors de l'apparition d'un bloc de la rubrique","type":"string"},"line_animation":{"description":"animation lors de l'apparition d'une ligne d'un bloc de la rubrique","type":"string"}},"required":["rubrique_animation","bloc_animation","line_animation"]},{"title":"module_rubrique-style_schema","description":"schema du style du module rubrique","type":"object","properties":{"none":{"description":"none","type":"string"}},"required":["none"]},{"title":"module_template-content_schema","description":"schema du contenu textuel du module template","type":"object","properties":{"title":{"description":"titre du module","type":"string"},"skill_group":{"description":"groupe de liste de compétences","type":"array","items":{"description":"liste de compétences","type":"object","properties":{"name":{"description":"nom du groupe de compétences","type":"string"},"skills":{"description":"liste des compétences","type":"array","items":{"description":"une compétence","type":"object","properties":{"name":{"description":"nom de la compétence","type":"string"},"level":{"description":"niveau de la compétence","type":"integer","minimum":0,"maximum":100}},"required":["name","level"]},"minItems":1,"uniqueItems":true}},"required":["name","skills"]},"minItems":0,"uniqueItems":true}},"required":["title","skill_group"]},{"title":"module_skills-properties_schema","description":"schema des propriétés du module skills","type":"object","properties":{"none":{"description":"none","type":"string"}},"required":["none"]},{"title":"module_template-style_schema","description":"schema du style du module template","type":"object","properties":{"none":{"description":"none","type":"string"}},"required":["none"]}]}