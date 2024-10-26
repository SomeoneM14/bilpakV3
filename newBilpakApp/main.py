import kivy
from kivy.uix.label import Label
from kivy.uix.gridlayout import GridLayout
from kivy.uix.textinput import TextInput
from kivy.uix.button import Button
from kivy.uix.widget import Widget
#from kivy.properties import ObjectProperty
from kivy.app import App
from kivy.uix.screenmanager import ScreenManager, Screen
import kivymd
import asynckivy
from kivy.animation import Animation
from kivy.metrics import dp
from kivymd.app import MDApp
from kivymd.uix.button import MDButton
from kivymd.uix.scrollview import MDScrollView
from kivymd.uix.tab import MDTabsItem
from kivymd.uix.behaviors import RotateBehavior
from kivymd.uix.expansionpanel import MDExpansionPanel
from kivymd.uix.list import MDListItemTrailingIcon
from kivy.uix.behaviors import ButtonBehavior
from kivymd.uix.scrollview import MDScrollView


class TrailingPressedIconButton(
    ButtonBehavior, RotateBehavior, MDListItemTrailingIcon
):
    ...


class main_screen(Screen):
    pass
class bilpak(MDApp):
    def build(self):
        self.network_search_width=0
        return main_screen()
    def tap_expansion_chevron(self, panel: MDExpansionPanel, chevron: TrailingPressedIconButton):
        panel.open() if not panel.is_open else panel.close()
        panel.set_chevron_down(chevron) if not panel.is_open else panel.set_chevron_up(chevron)
        print("test")
    def scan(self):
        print(self.network_search_width)
    def change_search_width(self,value,active):
        if active:
            self.network_search_width=value
            print("changed to",value)

if __name__ == '__main__':
    bilpak().run()