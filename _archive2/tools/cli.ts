import chalk from 'chalk';

export class ColorManager {
    colors = [chalk.red, chalk.yellow, chalk.green, chalk.blueBright]
    currentColor = 0

    nextColor() {
        const ccolor = (this.currentColor + 0)
        this.currentColor++

        if (this.colors.length < this.currentColor) {
            this.currentColor = 0
        }

        return this.colors[ccolor]
    }
}