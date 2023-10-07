function heroNana(Skill, combo) {
  let nana = {
    Skill: Skill,
    combo: combo,
  };
  return nana;
}


let nanaResah = heroNana("Nana", "Skill2 + Skill3 + Skill1");
console.log("Nama Hero: " + nanaResah.Skill + ", combo: " + nanaResah.combo);