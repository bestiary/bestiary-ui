<template>
    <div class="view-content">
        <section>
            <h4 class="mb-3">Rectangle</h4>
            <div class="section flex flex-col justify-center gap-2">
                <BSkeleton class="mb-2"></BSkeleton>
                <BSkeleton width="10rem" class="mb-2"></BSkeleton>
                <BSkeleton width="5rem" class="mb-2"></BSkeleton>
                <BSkeleton height="2rem" class="mb-2"></BSkeleton>
                <BSkeleton width="10rem" height="4rem"></BSkeleton>
            </div>
        </section>

        <section class="mt-8">
            <div class="section flex gap-8">
                <div class="flex flex-col">
                    <h5>Rounded</h5>
                    <BSkeleton class="mb-2" borderRadius="16px"></BSkeleton>
                    <BSkeleton width="10rem" class="mb-2" borderRadius="16px"></BSkeleton>
                    <BSkeleton width="5rem" borderRadius="16px" class="mb-2"></BSkeleton>
                    <BSkeleton height="2rem" class="mb-2" borderRadius="16px"></BSkeleton>
                    <BSkeleton width="10rem" height="4rem" borderRadius="16px"></BSkeleton>
                </div>
                <div class="flex flex-col">
                    <h5>Square</h5>
                    <BSkeleton size="2rem" class="mb-2"></BSkeleton>
                    <BSkeleton size="3rem" class="mb-2"></BSkeleton>
                    <BSkeleton size="4rem" class="mb-2"></BSkeleton>
                    <BSkeleton size="5rem"></BSkeleton>
                </div>
                <div class="flex flex-col">
                    <h5>Circle</h5>
                    <BSkeleton size="2rem" class="mb-2" shape="circle"></BSkeleton>
                    <BSkeleton size="3rem" class="mb-2" shape="circle"></BSkeleton>
                    <BSkeleton size="4rem" class="mb-2" shape="circle"></BSkeleton>
                    <BSkeleton size="5rem" shape="circle"></BSkeleton>
                </div>
            </div>
        </section>
    </div>
</template>