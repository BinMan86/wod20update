/**
 * Define a set of template paths to pre-load
 * Pre-loaded templates are compiled and cached for fast access when rendering
 * @return {Promise}
 */
export const preloadHandlebarsTemplates = async function () {
  console.log("Schrecknet : loading subroutines");
  // Define template paths to load
  const templatePaths = [
    // Actor Sheet Partials
    "systems/wod20/templates/actor/parts/biography.hbs",
    "systems/wod20/templates/actor/parts/disciplines.hbs",
    "systems/wod20/templates/actor/parts/exp.html",
    "systems/wod20/templates/actor/parts/advantages.hbs",
    "systems/wod20/templates/actor/parts/frenzy.html",
    "systems/wod20/templates/actor/parts/health.hbs",
    "systems/wod20/templates/actor/parts/humanity.html",
    "systems/wod20/templates/actor/parts/bloodpool.html",
    "systems/wod20/templates/actor/parts/profile-img.html",
    "systems/wod20/templates/actor/parts/other.hbs",
    "systems/wod20/templates/actor/parts/rotschreck.html",
    "systems/wod20/templates/actor/parts/stats.hbs",
    "systems/wod20/templates/actor/parts/willpower.html",
    "systems/wod20/templates/actor/parts/combat.html",

    // Item Sheet Partials
    "systems/wod20/templates/item/parts/skills.html",
    "systems/wod20/templates/item/parts/disciplines.html",
    "systems/wod20/templates/item/parts/attributes.html",
    "systems/wod20/templates/item/parts/virtues.html",
  ];

  /* Load the template parts
     That function is part of foundry, not founding it here is normal
  */
  return loadTemplates(templatePaths); // eslint-disable-line no-undef
};
