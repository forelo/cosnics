import Category from "@/Plugins/ScoreRubric/Domain/Category";
import Criterium from "@/Plugins/ScoreRubric/Domain/Criterium";

test('json', () => {
    let category = new Category('my category');
    category.color = 'red';
    let  criterium = new Criterium('my criterium');
    category.addCriterium(criterium);
    expect(Category.fromJSON(JSON.stringify(category))).toEqual(category);
});
