<template>
    <div class="view-content">
        <section>
            <h4 class="mb-3">Basic</h4>
            <div class="section">
                <BSpin/>
            </div>
        </section>

        <section class="mt-8">
            <h4 class="mb-3">Custom</h4>
            <div class="section">
                <BSpin style="width: 50px; height: 50px" strokeWidth="8" fill="transparent"
                       animationDuration=".5s" aria-label="Custom ProgressSpinner"/>
            </div>
        </section>
    </div>
</template>