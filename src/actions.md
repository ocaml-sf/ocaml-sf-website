---
layout: md-layout.liquid
pageTitle: OCSF - Our Actions
---

# Our Actions

The foundation has invested funding and effort (in particular through
the work of Yann Régis-Gianas, teaching representative on the
Executive Board) in the Learn-OCaml technical platform for online
exercises, which powers the OCaml MOOC and several OCaml courses in
university. {.intro}

We are interested in supporting other technical platforms that allow
teaching OCaml to a wide audience, in a school/academic setting or for
self-learning; we would also like to grow an open corpus of teaching
and learning material, and support in-boarding actions towards
non-OCaml programmers.

<hr/>

## OCaml MOOC

We ran sessions of the OCaml MOOC in 2018-2019 (3k registrants, 200
certificates). We employed a TA to help students on the MOOC forums.

## The [Learn-OCaml]({{ '/learn-ocaml' | url }}) Online Exercise Platform

The Learn-OCaml exercise platform is open-source and easy for anyone to deploy
locally to support their OCaml courses.

We relicensed the codebase to MIT, and funded further development of
the platform by OCamlPro. We employed two interns to write
documentation for teachers (platform, exercise-writing...) and
review pedagogical material.

We are actively working on an instance server, to make it easier for
people to deploy new instances for their courses without having to
host one locally -- which is fairly easy to do {.silent}

<div class="mt-8">
<a href="https://github.com/ocaml-sf/learn-ocaml" class="btn-main">
<button>Visit Platform</button>
</a>
</div>

## OCaml exercise corpus development

We fund teachers to contribute high-quality exercices to a common
exercise database for the Learn-OCaml platform. In particular, we
received 10 high-quality advanced exercices from François Pottier,
and made available 40 exercises from the MOOC.


<div class="my-4 -mx-4 sm:-mx-56 flex justify-center">

  ![OCamler learning]({{ '/assets/reconf19-1.jpg' | url }}){.object-cover}

</div>


## Building a teacher community

We are trying to build a community of OCaml teacher sharing teaching
documents. We provided financial support for a CS-teaching
conference at the French national level in 2018, and presented our
teaching efforts at the OCaml Workshop on the same year.

<div class="-mx-4 sm:mx-0">

![OCamlers coding]({{ '/assets/reconf19-2.jpg' | url }})

</div>

## Helping Learn-OCaml adoption in universities

We provided some financial support for new OCaml courses in 2018, at
the Paris-Diderot university (France) and McGill University
(Canada). You may be interested in the McGill [ICFP'2019 experience
report](https://www.cs.mcgill.ca/~bpientka/papers/learn-ocaml-icfp19)
on their new course using the [Learn-OCaml]({{ '/learn-ocaml' | url }}) platform.

We are funding an initiative in the NOVA University of Lisbon and
the University of Beira Interior (Portugal) to research and teach
the foundations of computer science using OCaml, bringing new
technical developments to the Learn-OCaml platform.

<hr/>

<div class="text-60 font-serif mb-16"> General OCaml actions </div>

<div class="card-grid grid grid-cols-2 md:grid-cols-2 row-gap-12 gap-5">

  {% comment %}

     We use the "card-grid" class below which has the effect of hiding
     any paragraph that is a direct children of the container. This is
     necessary because the shortcode+markdown combination appears to
     create empty paragraph around the "cards" which consume grid
     slots.

  {% endcomment %}

  {% card "/assets/ic_learn.svg", "Community Events" %}
    We sponsor video-capture for the Paris OCaml meetup. (If you would
    like to run a regular meetup in another city, feel free to get in
    touch!).

    We sponsor the [SWERC](https://swerc.eu/2019/about/) programming
    contest for 2019-2020, and in return the contest added OCaml to the
    list of available languages.

    We are sponsoring a development sprint for the
    [Owl](https://github.com/owlbarn) project for scientific computing
    in OCaml.
  {% endcard %}

  {% card "/assets/ic_camel_blue.svg", "OCaml Language Design & Development"  %}

    We funded two [Outreachy](https://www.outreachy.org/) internships to
    improve our testing of the OCaml compiler and language tools, while
    participating in improving the diversity in the OCaml community.

    We funded a research internship on type inference, to study
    approaches to keep the type-checker predictable and robust as the
    language evolves.

    We provide funding for the [Gallium/Cambium](http://cambium.inria.fr/) research
    team at INRIA Paris (France), an active place for OCaml-related fundamental
    research (some of the team members are also very active on the implementation
    front, for example Xavier Leroy, Damien Doligez, Florian Angeletti, and
    Sébastien Hinderer).

    We are funding work to improve the OCaml reference manual.

  {% endcard %}

  {% card "/assets/ic_internships.svg", "ReasonML"  %}

    We provided financial support for the ReasonML association as it was just
    starting.

  {% endcard %}

  {% card "/assets/ic_camel_blue.svg", "Supporting the OCaml Software Ecosystem"  %}

    During the ongoing release process for OCaml 4.10, we are funding
    work by Kate Deplaix to improve the compatibility of the
    opam-repository ecosystem with the new OCaml release.

  {% endcard %}

</div>
