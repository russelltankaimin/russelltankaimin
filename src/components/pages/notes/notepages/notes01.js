let notes01 = {
    id: 1,
    title: "What is an Equivalence Relation",
    category: 'CS1231S',
    subCategory: [],
    description: ["A binary relation that is reflexive, symmetric and transitive"],
    createdAt: '15 September 2021',
    page : [
      {
          "tag" : "h3",
          "content": "What is a relation?"
      },
      {
        "tag" : "p",
        "content": "A relation is a subset of the Cartesian Product. In other words, the relation between 2 sets is defined as the collection of the ordered pair, in which the ordered pair is formed by the object from each set."
      },
      {
        "tag" : "h3",
        "content": "An Equivalence Relation"
      },
      {
        "tag" : "p",
        "content": "An equivalence relation is one which is reflexive, symmetric and transitive. Meaning..."
      },
      {
        "tag" : "p",
        "content" : "Given ~ is an equivalence relation over the set S, then the following properties hold."
      },
      {
        "tag" : "p",
        "content" : "(Reflexivity) ∀ x ∈ S, x ~ x"
      },
      {
        "tag" : "p",
        "content" : "(Symmetry) ∀ x , y ∈ S, x ~ y ⇒ y ~ x"
      },
      {
        "tag" : "p",
        "content" : "(Transitivity) ∀ x , y, z ∈ S, (x ~ y) ∧ (y ~ z) ⇒ x ~ z"
      },
      {
        "tag" : "h3",
        "content": "We get partitions when sets are partitioned by an Equivalence Relation."
      },
      {
        "tag" : "h4",
        "content" : "Definition of Partitions"
      },
      {
        "tag" : "p",
        "content" : "Given a partition A/~ = {[x]~: x ∈ A}, x ~ y ⇒ [x] = [y]"
      },
      {
        "tag" : "p",
        "content" : "x not related to y ⇒ [x] ∩ [y] = ∅ "
      },
  ]
}

export default notes01