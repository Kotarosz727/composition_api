import {reactive, ref, computed, watch, watchEffect} from "vue";
export const useNumbers = () => {
    const count = ref<number>(0)
    const numbers = reactive<Record<string, number>>({ a: 0, b: 0, c: 0 });
    const total = computed(() => count.value + numbers.a + numbers.b + numbers.c);
    const histories = ref<string[]>([]);
    const historiesCountOverThanFive = computed(() =>
        histories.value.length > 5 && total.value > 10 && evenTotal.value
    );
    const evenNumbers = (n: number) => n % 2 === 0;
    const evenTotal = computed(() => evenNumbers(total.value));

    watchEffect(() => {
        histories.value.push(`count: ${count.value}, a: ${numbers.a}, b: ${numbers.b}, c: ${numbers.c}, total: ${total.value}`);
    });

    return {
        count,
        numbers,
        total,
        histories,
        historiesCountOverThanFive,
        evenTotal,
    }
};
