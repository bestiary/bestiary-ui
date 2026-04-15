<script setup lang="ts">
</script>
<template>
    <div class="view-content">

        <section>
            <h4 class="mb-4">Default</h4>
            <div class="section">
                <p class="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis
                    aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum.
                </p>

                <BDivider/>

                <p class="m-0">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                    totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                    dicta sunt explicabo. Nemo enim ipsam
                    voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
                    qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
                </p>
            </div>
        </section>

        <section>
            <h4 class="mb-4">Type</h4>
            <div class="section">
                <p class="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores expedita explicabo fugiat
                    inventore ipsam itaque magnam, minus mollitia necessitatibus, odio praesentium provident quasi quo
                    repudiandae rerum tempora tempore temporibus voluptatum?
                </p>

                <BDivider type="solid"/>

                <p class="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aspernatur delectus earum illum
                    magnam perferendis quidem repudiandae tempore. Ab aliquid culpa dolores explicabo laudantium libero
                    nihil nulla porro similique vero.
                </p>

                <BDivider type="dotted"/>

                <p class="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aspernatur delectus earum illum
                    magnam perferendis quidem repudiandae tempore. Ab aliquid culpa dolores explicabo laudantium libero
                    nihil nulla porro similique vero.
                </p>

                <BDivider type="dashed"/>

                <p class="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aspernatur delectus earum illum
                    magnam perferendis quidem repudiandae tempore. Ab aliquid culpa dolores explicabo laudantium libero
                    nihil nulla porro similique vero.
                </p>
            </div>
        </section>

        <section>
            <h4 class="mb-4">Layout</h4>
            <div class="section flex">
                <p class="m-0 text-justify">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis
                    aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum.
                </p>

                <BDivider layout="vertical"/>

                <p class="m-0 text-justify">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                    totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                    dicta sunt explicabo. Nemo enim ipsam
                    voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
                    qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
                </p>

                <BDivider layout="vertical"/>

                <p class="m-0 text-justify">
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
                    deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non
                    provident, similique sunt in culpa qui officia
                    deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et
                    expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit
                    quo minus.
                </p>
            </div>
        </section>

        <section>
            <h4 class="mb-4">Align</h4>
            <div class="section">
                <p class="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores expedita explicabo fugiat
                    inventore ipsam itaque magnam, minus mollitia necessitatibus, odio praesentium provident quasi quo
                    repudiandae rerum tempora tempore temporibus voluptatum?
                </p>

                <BDivider type="solid" align="left">
                    <b>Left</b>
                </BDivider>

                <p class="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aspernatur delectus earum illum
                    magnam perferendis quidem repudiandae tempore. Ab aliquid culpa dolores explicabo laudantium libero
                    nihil nulla porro similique vero.
                </p>

                <BDivider type="dotted" align="center">
                    <b>Center</b>
                </BDivider>

                <p class="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aspernatur delectus earum illum
                    magnam perferendis quidem repudiandae tempore. Ab aliquid culpa dolores explicabo laudantium libero
                    nihil nulla porro similique vero.
                </p>

                <BDivider type="dashed" align="right">
                    <b>Right</b>
                </BDivider>

                <p class="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aspernatur delectus earum illum
                    magnam perferendis quidem repudiandae tempore. Ab aliquid culpa dolores explicabo laudantium libero
                    nihil nulla porro similique vero.
                </p>
            </div>

            <div class="section flex">
                <p class="m-0 text-justify">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis
                    aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum.
                </p>

                <BDivider layout="vertical" align="top">
                    <b>Top</b>
                </BDivider>

                <p class="m-0 text-justify">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                    totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                    dicta sunt explicabo. Nemo enim ipsam
                    voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
                    qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
                </p>

                <BDivider layout="vertical" align="center">
                    <b>Center</b>
                </BDivider>

                <p class="m-0 text-justify">
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
                    deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non
                    provident, similique sunt in culpa qui officia
                    deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et
                    expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit
                    quo minus.
                </p>

                <BDivider layout="vertical" align="bottom">
                    <b>Bottom</b>
                </BDivider>

                <p class="m-0 text-justify">
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
                    deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non
                    provident, similique sunt in culpa qui officia
                    deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et
                    expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit
                    quo minus.
                </p>
            </div>
        </section>

    </div>
</template>
